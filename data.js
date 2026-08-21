// Datele itinerariului. Editeaza acest fisier cu detaliile reale ale traseului.
// mapQuery = textul care va fi cautat pe Google Maps la click.

const TRIP = {
  destination: "Milos, Grecia",
  startDate: "2026-08-22",
  endDate: "2026-08-26",
};

const ITINERARY = [
  {
    date: "2026-08-22",
    weekday: "Sambata",
    title: "Sosire + Nordul insulei",
    activities: [
      {
        time: "12:00",
        title: "Sosire, check-in si instalare in Adamas",
        desc: "",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "13:30",
        title: "Pranz la Mikros Apoplous sau O! Hamos!",
        desc: "Mikros Apoplous - peste proaspat, priveliste la mare; O! Hamos! - mancare traditionala greceasca. Rezerva din timp, mai ales in sezon.",
        mapQuery: "Mikros Apoplous Adamas Milos Greece",
      },
      {
        time: "15:30",
        title: "Sarakiniko",
        desc: "Plaja lunara alba, 5 min din Adamas - scalda si poze.",
        mapQuery: "Sarakiniko Beach Milos Greece",
      },
      {
        time: "17:30",
        title: "Papafragas",
        desc: "Canalul marin dintre stanci, 10 min din Sarakiniko.",
        mapQuery: "Papafragas Milos Greece",
      },
      {
        time: "19:00",
        title: "Intoarcere in Adamas",
        desc: "Plimbare pe faleza.",
        mapQuery: "Adamas port, Milos, Greece",
      },
      {
        time: "20:30",
        title: "Cina in port la Adamas",
        desc: "",
        mapQuery: "Adamas port, Milos, Greece",
      },
    ],
  },
  {
    date: "2026-08-23",
    weekday: "Duminica",
    title: "Sate istorice + Coasta de Sud",
    activities: [
      {
        time: "09:00",
        title: "Plecare spre Plaka",
        desc: "Capitala cicladica a insulei, ulite albe.",
        mapQuery: "Plaka Milos Greece",
      },
      {
        time: "09:30",
        title: "Plaka - castelul venetian",
        desc: "Panorame superbe; cafea/gustare la Kri Kri sau Utopia Cafe.",
        mapQuery: "Plaka Castle Milos Greece",
      },
      {
        time: "11:00",
        title: "Klima",
        desc: "Satul cu garaje de barci colorate (syrmata), 3 km din Plaka.",
        mapQuery: "Klima Milos Greece",
      },
      {
        time: "11:45",
        title: "Tripiti",
        desc: "Catacombele romane + teatrul roman, la cateva minute din Klima.",
        mapQuery: "Tripiti Milos Greece",
      },
      {
        time: "13:00",
        title: "Pranz la Astakas (Klima)",
        desc: "Vedere la mare; alternativ, intoarcere spre coasta de sud.",
        mapQuery: "Astakas Cafe Restaurant Klima Milos Greece",
      },
      {
        time: "14:30",
        title: "Firiplaka",
        desc: "Plaja nisipoasa cu apa turcoaz, usor accesibila - scalda.",
        mapQuery: "Firiplaka Beach Milos Greece",
      },
      {
        time: "17:00",
        title: "Paleochori",
        desc: "Plaja vulcanica cu apa calda geotermala.",
        mapQuery: "Paleochori Beach Milos Greece",
      },
      {
        time: "20:00",
        title: "Cina la Sirocco (Paleochori)",
        desc: "Mancare gatita cu caldura vulcanica chiar pe plaja. Rezerva din timp, mai ales in sezon.",
        mapQuery: "Sirocco Paleochori Milos Greece",
      },
    ],
  },
  {
    date: "2026-08-24",
    weekday: "Luni",
    title: "Excursia cu barca",
    activities: [
      {
        time: "06:00",
        title: "Mic dejun la Mentor Coffee",
        desc: "Mentor Coffee Guidance & More, vizavi de punctul de intalnire pentru tur.",
        mapQuery: "Mentor Coffee Adamas Milos Greece",
      },
      {
        time: "10:00",
        title: "Tur de navigatie de o zi intreaga",
        desc: "Cel mai indragit tur - snorkeling, pesteri marine si pranz proaspat la bord. Rezerva prin Viator.",
        mapQuery: "boat tour Adamas Milos Greece",
      },
      {
        time: "",
        title: "Plaja Kalogries",
        desc: "Oprire pentru snorkeling.",
        mapQuery: "Kalogries Beach Milos Greece",
      },
      {
        time: "",
        title: "Pestera Sykia",
        desc: "Explorare cu barca gonflabila (dinghy).",
        mapQuery: "Sykia Cave Milos Greece",
      },
      {
        time: "",
        title: "Kleftiko",
        desc: "Atractia principala - stanci albe impunatoare, explorare pesteri marine.",
        mapQuery: "Kleftiko Milos Greece",
      },
      {
        time: "",
        title: "Agios Dimitrios",
        desc: "Ultima oprire pentru inot - golf linistit cu priveliste spre caldera.",
        mapQuery: "Agios Dimitrios Milos Greece",
      },
      {
        time: "seara",
        title: "Cina la Astakas Cafe Restaurant",
        desc: "Taverna pe malul apei in Klima, loc in primul rand pentru apus. Rezerva din timp, se umple rapid!",
        mapQuery: "Astakas Cafe Restaurant Klima Milos Greece",
      },
    ],
  },
  {
    date: "2026-08-25",
    weekday: "Marti",
    title: "Sud-vest + Nord linistit",
    activities: [
      {
        time: "09:00",
        title: "Plecare spre coasta de sud-vest",
        desc: "",
        mapQuery: "Provatas Beach Milos Greece",
      },
      {
        time: "09:30",
        title: "Provatas sau Agia Kiriaki",
        desc: "Plaje nisipoase, calme si usor accesibile - scalda de dimineata.",
        mapQuery: "Agia Kiriaki Beach Milos Greece",
      },
      {
        time: "12:00",
        title: "Firopotamos",
        desc: "Sat colorat langa apa, putin aglomerat, in drum spre nord.",
        mapQuery: "Firopotamos Milos Greece",
      },
      {
        time: "13:00",
        title: "Pranz la Pollonia",
        desc: "Enalion (fructe de mare, shrimp saganaki) sau Armenaki. Rezerva din timp la Enalion.",
        mapQuery: "Enalion Pollonia Milos Greece",
      },
      {
        time: "14:30",
        title: "Plimbare prin Pollonia",
        desc: "Portul pescaresc, plimbare relaxata.",
        mapQuery: "Pollonia Milos Greece",
      },
      {
        time: "16:00",
        title: "Intoarcere in Adamas",
        desc: "",
        mapQuery: "Adamas, Milos, Greece",
      },
    ],
  },
  {
    date: "2026-08-26",
    weekday: "Miercuri",
    title: "Plecare spre Atena si zbor spre Bucuresti",
    activities: [
      {
        time: "09:00",
        title: "Check-out si zbor Milos - Atena",
        desc: "Zbor intern scurt spre Atena; verifica din timp orarul.",
        mapQuery: "Milos Island National Airport",
      },
      {
        time: "",
        title: "Tur scurt prin Atena (max 2 ore)",
        desc: "Plimbare rapida - Acropole/Plaka, in functie de timpul disponibil intre zboruri.",
        mapQuery: "Acropolis of Athens",
      },
      {
        time: "",
        title: "Pranz in Atena",
        desc: "Masa rapida, aproape de zona vizitata, inainte de drumul spre aeroport.",
        mapQuery: "Plaka Athens restaurants",
      },
      {
        time: "seara",
        title: "Zbor Atena - Bucuresti",
        desc: "Plecare catre aeroportul din Atena pentru zborul de intoarcere.",
        mapQuery: "Athens International Airport",
      },
    ],
  },
];

const DEFAULT_CHECKLIST = [
  { text: "Pasaport / Carte de identitate", checked: false },
  { text: "Bilete avion / bording pass", checked: false },
  { text: "Confirmare cazare", checked: false },
  { text: "Asigurare medicala de calatorie", checked: false },
  { text: "Card bancar + cash (EUR)", checked: false },
  { text: "Incarcator telefon", checked: false },
  { text: "Baterie externa (power bank)", checked: false },
  { text: "Crema protectie solara", checked: false },
  { text: "Ochelari de soare", title: "", checked: false },
  { text: "Palarie / sapca", checked: false },
  { text: "Costum de baie", checked: false },
  { text: "Prosop de plaja", checked: false },
  { text: "Papuci de plaja / sandale", checked: false },
  { text: "Haine usoare de vara", checked: false },
  { text: "O tinuta mai eleganta pentru seara", checked: false },
  { text: "Medicamente personale", checked: false },
  { text: "Periuta si pasta de dinti", checked: false },
];
