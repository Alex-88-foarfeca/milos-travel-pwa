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
    title: "Sosire in Milos",
    activities: [
      {
        time: "",
        title: "Sosire si cazare in Adamas",
        desc: "Adamas (langa port) e cea mai buna baza pentru a explora insula.",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "",
        title: "Inchiriere masina (recomandat)",
        desc: "Necesara pentru plajele si satele mai izolate de pe insula.",
        mapQuery: "car rental Adamas Milos Greece",
      },
      {
        time: "seara",
        title: "Plimbare pe faleza + cina relaxata",
        desc: "Acomodare usoara dupa drum, prima seara in Adamas.",
        mapQuery: "Adamas port, Milos, Greece",
      },
    ],
  },
  {
    date: "2026-08-23",
    weekday: "Duminica",
    title: "Ziua 1: Milos Antic & Vin Local",
    activities: [
      {
        time: "07:00",
        title: "Mic dejun la EGOIST",
        desc: "Platou traditional grecesc sau clatite, cu cafea greceasca.",
        mapQuery: "EGOIST Adamas Milos Greece",
      },
      {
        time: "10:00",
        title: "Tur arheologic & cultural (jumatate de zi)",
        desc: "Teatrul Roman Antic (Tripiti/Klima) - vedere spre Marea Egee, legatura cu Venus de Milo.",
        mapQuery: "Ancient Roman Theatre Milos Greece",
      },
      {
        time: "",
        title: "Catacombele din Milos",
        desc: "Catacombe paleocrestine, atmosfera stranie si impresionanta.",
        mapQuery: "Catacombs of Milos Greece",
      },
      {
        time: "",
        title: "Satul Plaka",
        desc: "1 ora de plimbare, shopping, curtea bisericii cu priveliste.",
        mapQuery: "Plaka Milos Greece",
      },
      {
        time: "",
        title: "Mandrakia",
        desc: "Sat mic de pescari, garaje de barci pictate colorat.",
        mapQuery: "Mandrakia Milos Greece",
      },
      {
        time: "",
        title: "Plaja Sarakiniko",
        desc: "1 ora - stanci vulcanice albe ca varul, peisaj lunar.",
        mapQuery: "Sarakiniko Beach Milos Greece",
      },
      {
        time: "",
        title: "Phylakopi",
        desc: "Asezare preistorica, oprire scurta.",
        mapQuery: "Phylakopi Milos Greece",
      },
      {
        time: "",
        title: "Pollonia",
        desc: "50 min in acest sat de coasta fermecator.",
        mapQuery: "Pollonia Milos Greece",
      },
      {
        time: "14:00",
        title: "Timp pe plaja + pranz tarziu",
        desc: "Pranz la Rifaki (taverna pe malul apei) - fructe de mare foarte proaspete, mai scump.",
        mapQuery: "Rifaki Pollonia Milos Greece",
      },
      {
        time: "apus",
        title: "Degustare de vin la Kostantakis Winery",
        desc: "2 ore, crama de familie, pestera naturala de vinuri, 7 vinuri + branzeturi si gustari locale.",
        mapQuery: "Kostantakis Winery Milos Greece",
      },
      {
        time: "seara",
        title: "Cina la Gyros of Milos",
        desc: "Cina casual, rapida si accesibila, in Adamas.",
        mapQuery: "Gyros of Milos Adamas Greece",
      },
      {
        time: "",
        title: "Desert la Artemis Bakery",
        desc: "Placinta cu pepene verde - specialitate locala.",
        mapQuery: "Artemis Bakery Adamas Milos Greece",
      },
    ],
  },
  {
    date: "2026-08-24",
    weekday: "Luni",
    title: "Ziua 2: Navigatie, Pesteri Marine & Cina la Apus",
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
    title: "Ziua 3: Plaje, Kayaking & Ramas Bun",
    activities: [
      {
        time: "dimineata",
        title: "Relaxare pe plaja - alege una sau mai multe",
        desc: "Firopotamos (mica dar superba, case de barci colorate) / Tsigrado (acces pe scara, nisip fin) / Papafragas (pesteri, oprire foto) / Plathiena (plaja larga, apa linistita, langa Plaka) / Fyriplaka (plaja lunga, bar de plaja).",
        mapQuery: "Firopotamos Beach Milos Greece",
      },
      {
        time: "13:00",
        title: "Tur de kayaking cu plecare din Fyriplaka",
        desc: "2-3.5 ore - pesteri marine langa Tsigrado, plaja Gerakas (accesibila doar cu barca), izvor termal natural. Include gustari locale (koufeto).",
        mapQuery: "Fyriplaka Beach Milos Greece",
      },
      {
        time: "",
        title: "Plaja Gerakas",
        desc: "Fasie izolata, accesibila doar cu barca, inot in pestera marina.",
        mapQuery: "Gerakas Beach Milos Greece",
      },
      {
        time: "21:00",
        title: "Cina la O! Hamos! Tavern",
        desc: "Taverna locala indragita, fara rezervare, meniuri scrise de mana, retete de familie. Cina tarzie e normala in Grecia.",
        mapQuery: "O Hamos Tavern Adamas Milos Greece",
      },
      {
        time: "seara",
        title: "Cocktail de ramas bun la Akri Bar",
        desc: "Deasupra portului din Adamas, terasa cu priveliste, cocktailuri bune.",
        mapQuery: "Akri Bar Adamas Milos Greece",
      },
    ],
  },
  {
    date: "2026-08-26",
    weekday: "Miercuri",
    title: "Plecare din Milos",
    activities: [
      {
        time: "dimineata",
        title: "Ultima plaja / plimbare de dimineata",
        desc: "In functie de ora zborului/feribotului - o ultima baie sau cafea in Adamas.",
        mapQuery: "Adamas, Milos, Greece",
      },
      {
        time: "",
        title: "Check-out si predare masina inchiriata",
        desc: "",
        mapQuery: "Milos Island National Airport",
      },
      {
        time: "",
        title: "Plecare (aeroport / port)",
        desc: "",
        mapQuery: "Milos Island National Airport",
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
