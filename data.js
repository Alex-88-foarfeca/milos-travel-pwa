// Datele itinerariului. Editeaza acest fisier cu detaliile reale ale traseului.
// mapQuery = textul care va fi cautat pe Google Maps la click.
// tip (pe zi) = incadrat ca sfat/logistica pentru ziua respectiva.

const TRIP = {
  destination: "Milos, Grecia",
  startDate: "2026-08-22",
  endDate: "2026-08-26",
};

const ITINERARY = [
  {
    date: "2026-08-22",
    weekday: "Sambata",
    title: "Adamas fara masina",
    tip: "Fara masina, nu merita sa consumati timp si bani pe taxiuri pentru Sarakiniko. Prima zi ramane compacta, odihnitoare si complet accesibila pe jos.",
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
        desc: "Mikros Apoplous - peste si fructe de mare, potrivit pentru primul pranz (rezervare utila seara). O! Hamos! - bucatarie traditionala greceasca, poate fi foarte cautat.",
        mapQuery: "Mikros Apoplous Adamas Milos Greece",
      },
      {
        time: "15:15",
        title: "Plimbare prin port si pe faleza din Adamas",
        desc: "",
        mapQuery: "Adamas port, Milos, Greece",
      },
      {
        time: "16:30",
        title: "Lagada Beach",
        desc: "Plaja mica si comoda, acces simplu pe jos. Merita pentru comoditate, nu pentru spectaculozitate - pastreaza energia pentru zilele urmatoare. Alternativa: Papikinou, daca preferi o plaja mai lunga.",
        mapQuery: "Lagada Beach Milos Greece",
      },
      {
        time: "18:30",
        title: "Intoarcere la cazare",
        desc: "Dus si pauza.",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "20:30",
        title: "Cina in Adamas",
        desc: "",
        mapQuery: "Adamas port, Milos, Greece",
      },
      {
        time: "22:00",
        title: "Plimbare de seara prin port",
        desc: "",
        mapQuery: "Adamas port, Milos, Greece",
      },
    ],
  },
  {
    date: "2026-08-23",
    weekday: "Duminica",
    title: "Nordul insulei",
    tip: "Nordul este grupat intr-un singur circuit, cu revenire in Adamas dupa Firopotamos.",
    activities: [
      {
        time: "10:00",
        title: "Ridicarea masinii de la centrul de inchiriere",
        desc: "",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "10:25",
        title: "Sarakiniko",
        desc: "Peisaj alb, sculptat de vant si mare - imaginea-emblema a insulei. Rezerva ~90 de minute; parcarea e aproape de zona principala dar poate fi aglomerata in sezon. Incaltaminte cu aderenta pe roca neteda.",
        mapQuery: "Sarakiniko Beach Milos Greece",
      },
      {
        time: "12:15",
        title: "Mandrakia",
        desc: "Sat pescaresc mic, syrmata colorate si golf fotogenic. 30-40 minute e suficient daca nu mananci aici; parcheaza fara sa blochezi accesul localnicilor.",
        mapQuery: "Mandrakia Milos Greece",
      },
      {
        time: "13:00",
        title: "Papafragas",
        desc: "Canion marin ingust in roca vulcanica - aici e oprire panoramica, nu sesiune de plaja. 20-30 minute; accesul la apa poate fi dificil in functie de valuri.",
        mapQuery: "Papafragas Milos Greece",
      },
      {
        time: "13:45",
        title: "Pollonia - pranz si plimbare",
        desc: "Enalion sau Armenaki - fructe de mare si preparate grecesti; planifica 1,5-2 ore cu tot cu masa si plimbarea prin port.",
        mapQuery: "Enalion Pollonia Milos Greece",
      },
      {
        time: "16:15",
        title: "Firopotamos",
        desc: "Golf mic cu apa clara, case pescaresti si biserica alba - ultima oprire fotogenica inainte de intoarcere. Parcare limitata si strazi inguste; 45-60 minute e suficient.",
        mapQuery: "Firopotamos Milos Greece",
      },
      {
        time: "18:00",
        title: "Intoarcere spre Adamas",
        desc: "Pauza si dus.",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "20:30",
        title: "Cina in Adamas",
        desc: "",
        mapQuery: "Adamas port, Milos, Greece",
      },
    ],
  },
  {
    date: "2026-08-24",
    weekday: "Luni",
    title: "Excursia cu barca",
    tip: "Traseul exact depinde de vant si de conditiile marii - operatorul poate schimba ordinea opririlor sau portul de plecare pentru siguranta. Ce iei la bord: prosop, costum de baie, SPF 50+, ochelari de soare, sapca, husa impermeabila pentru telefon, un strat subtire pentru vant si, optional, medicament pentru rau de mare.",
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
    title: "Vest + istorie + Coasta de Sud",
    tip: "Zi lunga, cu ora fixa: tinta este sa fii inapoi in Adamas la ~17:30, la centrul de inchiriere in jur de 18:15, pentru predarea oficiala la 19:00.",
    activities: [
      {
        time: "08:00",
        title: "Plecare din Adamas spre Trypiti",
        desc: "",
        mapQuery: "Tripiti Milos Greece",
      },
      {
        time: "08:20",
        title: "Trypiti - catacombe + teatru antic",
        desc: "Catacombe paleocrestine + teatru antic cu vedere spre golf. Verifica programul siturilor dimineata; exista pante si portiuni expuse la soare.",
        mapQuery: "Catacombs of Milos",
      },
      {
        time: "09:15",
        title: "Klima",
        desc: "Syrmata - garaje de barci vopsite in culori vii. Mergi incet pe promenada ingusta si respecta spatiile private.",
        mapQuery: "Klima Milos Greece",
      },
      {
        time: "10:00",
        title: "Plaka + Kastro",
        desc: "Alei albe, magazine si panorame; Kastro e punctul inalt de deasupra Plaka, cea mai buna priveliste asupra insulei. Lasa masina la marginea zonei pietonale si exploreaza pe jos.",
        mapQuery: "Kastro Plaka Milos Greece",
      },
      {
        time: "11:00",
        title: "Plecare spre coasta de sud",
        desc: "",
        mapQuery: "Provatas Beach Milos Greece",
      },
      {
        time: "11:30",
        title: "Provatas",
        desc: "Plaja lunga si usor accesibila, buna pentru baie. Oprire flexibila - scurteaz-o daca preferi mai mult timp la Firiplaka.",
        mapQuery: "Provatas Beach Milos Greece",
      },
      {
        time: "12:45",
        title: "Firiplaka",
        desc: "Plaja ampla, nisip deschis, apa turcoaz si faleze colorate. Dupa-amiaza soarele poate fi puternic - apa si protectie solara.",
        mapQuery: "Firiplaka Beach Milos Greece",
      },
      {
        time: "14:00",
        title: "Paleochori - plaja si pranz tarziu",
        desc: "Culori minerale intense, activitate geotermala aproape de suprafata. Masa la Sirocco (rezervare utila). Nu sapa in zone fierbinti, nisipul poate fi foarte cald.",
        mapQuery: "Sirocco Paleochori Milos Greece",
      },
      {
        time: "16:45",
        title: "Plecare spre Adamas",
        desc: "",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "17:30",
        title: "Alimentare, bagaje si verificarea masinii",
        desc: "",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "18:15",
        title: "Sosire la centrul de inchiriere",
        desc: "Marja de siguranta inainte de predare.",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "19:00",
        title: "Predarea masinii",
        desc: "",
        mapQuery: "Adamas, Milos, Greece",
      },
    ],
  },
  {
    date: "2026-08-26",
    weekday: "Miercuri",
    title: "Plecare spre Atena si zbor spre Bucuresti",
    tip: "Marja de siguranta: pastreaza cel putin 60-90 de minute rezerva peste timpul normal pentru predarea masinii, bagaje si deplasarea spre aeroport.",
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

const GENERAL_TIPS = [
  {
    title: "Sfaturi utile",
    items: [
      "22 august: nu planifica obiective care necesita masina; foloseste ziua pentru Adamas si odihna.",
      "23 august: mergi direct spre Sarakiniko dupa ridicarea masinii la 10:00.",
      "Nu insista pe baie la Papafragas daca accesul sau valurile nu inspira incredere.",
      "In Firopotamos si Mandrakia, parcarea poate fi limitata; nu bloca accesul localnicilor.",
      "Pentru siturile din Trypiti, verifica programul in dimineata vizitei.",
      "Tsigrado (optional, langa Firiplaka) - nu cobori daca accesul iti pare riscant sau inconfortabil.",
      "25 august: pleaca din Paleochori cel tarziu in jur de 16:45 pentru a proteja ora de predare 19:00.",
      "Alimenteaza masina inainte de predare, conform conditiilor contractului.",
      "Verifica vantul si starea marii in fiecare dimineata si muta timpul de plaja daca este nevoie.",
      "Rezerva mesele foarte dorite in avans, mai ales in sezon.",
      "Itinerariul este un cadru; daca un loc iti place foarte mult, renunta la o oprire secundara in loc sa alergi.",
    ],
  },
  {
    title: "Checklist masina si plecare",
    items: [
      "Permis de conducere + contractul de inchiriere",
      "Fotografii/video ale masinii la preluare",
      "Nivel combustibil verificat la preluare",
      "Locul exact de predare salvat in telefon",
      "Alimentare facuta pana la 17:45 in 25 august",
      "Bagajele scoase din masina",
      "Compartimentele si portbagajul verificate",
      "Poze finale ale masinii la predare",
      "Cheia predata si confirmarea returnarii pastrata",
    ],
  },
  {
    title: "Plan B pentru vant",
    items: [
      "Vant puternic din nord: reduce timpul la Sarakiniko/Papafragas si prioritizeaza coasta de sud.",
      "Mare agitata: transforma opririle de plaja in puncte panoramice - mai mult timp in Plaka, Trypiti, Klima, Pollonia sau la restaurante.",
      "Tur cu barca anulat/reprogramat: nu forta o alternativa pe mare; varianta terestra ramane completa si eficienta.",
    ],
  },
  {
    title: "Fotografii, lumina si ritm",
    items: [
      "Sarakiniko: fotografii mai dramatice cand umbrele devin vizibile; protejeaza telefonul de sare si praf.",
      "Klima functioneaza excelent spre finalul diminetii; Plaka/Kastro sunt mai bune dupa-amiaza si la apus.",
      "Plajele sudice: dimineata e mai placuta pentru baie, la pranz caldura devine puternica.",
      "Regula de tampon: adauga 15-20 minute la fiecare schimbare majora de zona pentru parcare si orientare - in ziua predarii masinii, tamponul e si mai mare.",
    ],
  },
  {
    title: "Informatii practice",
    items: [
      "Urgente: 112 (numar european de urgenta).",
      "Kalimera = Buna dimineata",
      "Kalispera = Buna seara",
      "Efharisto = Multumesc",
      "Parakalo = Va rog / cu placere",
      "Poso kani? = Cat costa?",
      "Pou ine...? = Unde este...?",
      "Logariasmo, parakalo = Nota, va rog",
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
