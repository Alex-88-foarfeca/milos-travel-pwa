const LS_CHECKLIST = "milos_checklist_v1";
const LS_NOTES = "milos_notes_v1";

function formatTripDates() {
  const start = new Date(TRIP.startDate);
  const end = new Date(TRIP.endDate);
  const opts = { day: "numeric", month: "long", year: "numeric" };
  const startStr = start.toLocaleDateString("ro-RO", { day: "numeric" });
  const endStr = end.toLocaleDateString("ro-RO", opts);
  document.getElementById("tripDates").textContent =
    TRIP.destination + " · " + startStr + " - " + endStr;
}

function mapLink(query) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

function renderItinerary() {
  const container = document.getElementById("itineraryList");
  container.innerHTML = "";

  ITINERARY.forEach((day) => {
    const card = document.createElement("div");
    card.className = "day-card";

    const header = document.createElement("div");
    header.className = "day-header";
    header.innerHTML =
      '<span class="day-name">' + day.weekday + "</span>" +
      '<span class="day-date">' + formatDayDate(day.date) + "</span>";
    card.appendChild(header);

    if (day.title) {
      const title = document.createElement("div");
      title.className = "day-title";
      title.textContent = day.title;
      card.appendChild(title);
    }

    if (!day.activities || day.activities.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-day";
      empty.textContent = "Fara activitati planificate inca.";
      card.appendChild(empty);
    } else {
      day.activities.forEach((act) => {
        const row = document.createElement("div");
        row.className = "activity";

        const time = document.createElement("div");
        time.className = "activity-time";
        time.textContent = act.time || "";
        row.appendChild(time);

        const body = document.createElement("div");
        body.className = "activity-body";

        const title = document.createElement("div");
        title.className = "activity-title";
        title.textContent = act.title;
        body.appendChild(title);

        if (act.image) {
          const img = document.createElement("img");
          img.className = "activity-image";
          img.src = act.image;
          img.alt = act.title;
          img.loading = "lazy";
          body.appendChild(img);
        }

        if (act.desc) {
          const desc = document.createElement("div");
          desc.className = "activity-desc";
          desc.textContent = act.desc;
          body.appendChild(desc);
        }

        if (act.mapQuery) {
          const link = document.createElement("a");
          link.className = "activity-map";
          link.href = mapLink(act.mapQuery);
          link.target = "_blank";
          link.rel = "noopener";
          link.textContent = "📍 Vezi pe harta";
          body.appendChild(link);
        }

        row.appendChild(body);
        card.appendChild(row);
      });
    }

    container.appendChild(card);
  });
}

function formatDayDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("ro-RO", { day: "numeric", month: "short" });
}

// ---------- Checklist ----------

function loadChecklist() {
  const raw = localStorage.getItem(LS_CHECKLIST);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      /* fall through */
    }
  }
  return DEFAULT_CHECKLIST.map((item) => ({ text: item.text, checked: false }));
}

function saveChecklist(items) {
  localStorage.setItem(LS_CHECKLIST, JSON.stringify(items));
}

function renderChecklist() {
  const items = loadChecklist();
  const list = document.getElementById("checklistList");
  list.innerHTML = "";

  items.forEach((item, idx) => {
    const li = document.createElement("li");
    if (item.checked) li.classList.add("checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.checked;
    checkbox.addEventListener("change", () => {
      const current = loadChecklist();
      current[idx].checked = checkbox.checked;
      saveChecklist(current);
      renderChecklist();
    });

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = item.text;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "✕";
    removeBtn.addEventListener("click", () => {
      const current = loadChecklist();
      current.splice(idx, 1);
      saveChecklist(current);
      renderChecklist();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

function setupChecklistAdd() {
  const input = document.getElementById("checklistInput");
  const btn = document.getElementById("checklistAddBtn");

  const addItem = () => {
    const text = input.value.trim();
    if (!text) return;
    const current = loadChecklist();
    current.push({ text, checked: false });
    saveChecklist(current);
    input.value = "";
    renderChecklist();
  };

  btn.addEventListener("click", addItem);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addItem();
  });
}

// ---------- Notes & Budget ----------

function loadNotes() {
  const raw = localStorage.getItem(LS_NOTES);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      /* fall through */
    }
  }
  return {};
}

function saveNotes(notes) {
  localStorage.setItem(LS_NOTES, JSON.stringify(notes));
}

function renderNotes() {
  const notes = loadNotes();
  const container = document.getElementById("notesList");
  container.innerHTML = "";

  ITINERARY.forEach((day) => {
    const entry = notes[day.date] || { text: "", budget: "" };

    const card = document.createElement("div");
    card.className = "note-card";

    const header = document.createElement("div");
    header.className = "note-header";
    header.innerHTML =
      "<span>" + day.weekday + " · " + formatDayDate(day.date) + "</span>";
    card.appendChild(header);

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Notite pentru ziua asta...";
    textarea.value = entry.text;
    textarea.addEventListener("input", () => {
      const current = loadNotes();
      current[day.date] = current[day.date] || {};
      current[day.date].text = textarea.value;
      saveNotes(current);
    });
    card.appendChild(textarea);

    const budgetRow = document.createElement("div");
    budgetRow.className = "budget-row";
    const budgetLabel = document.createElement("span");
    budgetLabel.textContent = "Buget estimat (EUR):";
    const budgetInput = document.createElement("input");
    budgetInput.type = "number";
    budgetInput.min = "0";
    budgetInput.value = entry.budget || "";
    budgetInput.addEventListener("input", () => {
      const current = loadNotes();
      current[day.date] = current[day.date] || {};
      current[day.date].budget = budgetInput.value;
      saveNotes(current);
      renderBudgetSummary();
    });
    budgetRow.appendChild(budgetLabel);
    budgetRow.appendChild(budgetInput);
    card.appendChild(budgetRow);

    container.appendChild(card);
  });

  renderBudgetSummary();
}

function renderBudgetSummary() {
  const notes = loadNotes();
  let total = 0;
  Object.values(notes).forEach((entry) => {
    const val = parseFloat(entry.budget);
    if (!isNaN(val)) total += val;
  });
  document.getElementById("budgetSummary").textContent =
    "Total estimat: " + total.toFixed(0) + " EUR";
}

// ---------- Tabs ----------

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
      document.getElementById("view-" + btn.dataset.view).classList.add("active");
    });
  });
}

// ---------- Init ----------

function init() {
  formatTripDates();
  renderItinerary();
  renderChecklist();
  setupChecklistAdd();
  renderNotes();
  setupTabs();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
