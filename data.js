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
    title: "Sosire + Nordul insulei",
    tip: "Nu supraincarca prima zi. Sarakiniko si Papafragas sunt suficient de spectaculoase pentru un debut memorabil, iar seara merita pastrata pentru Adamas.",
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
        desc: "Mikros Apoplous - peste si fructe de mare, potrivit pentru primul pranz. O! Hamos! - bucatarie traditionala greceasca, poate fi foarte cautat.",
        mapQuery: "Mikros Apoplous Adamas Milos Greece",
      },
      {
        time: "15:30",
        title: "Sarakiniko",
        desc: "Peisaj alb, sculptat de vant si mare - baie, plimbare si fotografii. Poarta incaltaminte cu aderenta si evita marginile expuse daca bate vantul.",
        mapQuery: "Sarakiniko Beach Milos Greece",
      },
      {
        time: "17:30",
        title: "Papafragas",
        desc: "Canion ingust in roca vulcanica, cu priveliste dramatica spre mare. Accesul la apa poate fi conditionat de valuri si de starea potecii.",
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
    tip: "Aceasta este ziua cea mai plina. Pastreaza flexibilitate: daca zabovesti in Plaka sau Klima, redu timpul la una dintre plajele de dupa-amiaza.",
    activities: [
      {
        time: "09:00",
        title: "Plecare spre Plaka",
        desc: "",
        mapQuery: "Plaka Milos Greece",
      },
      {
        time: "09:30",
        title: "Plaka - castelul venetian",
        desc: "Capitala traditionala a insulei, alei albe si puncte de belvedere; cafea la Kri Kri sau Utopia Cafe. Urca fara graba si lasa masina la marginea zonei pietonale.",
        mapQuery: "Plaka Castle Milos Greece",
      },
      {
        time: "11:00",
        title: "Klima",
        desc: "Satul cu garaje de barci colorate (syrmata). Mergi incet pe promenada ingusta si respecta spatiile private.",
        mapQuery: "Klima Milos Greece",
      },
      {
        time: "11:45",
        title: "Tripiti",
        desc: "Catacombe paleocrestine + teatrul antic cu vedere spre golf. Ia apa si incaltaminte buna; verifica programul sezonier al siturilor.",
        mapQuery: "Tripiti Milos Greece",
      },
      {
        time: "13:00",
        title: "Pranz la Astakas (Klima)",
        desc: "Pranz cu vedere la mare, convenabil intre Klima si sud.",
        mapQuery: "Astakas Cafe Restaurant Klima Milos Greece",
      },
      {
        time: "14:30",
        title: "Firiplaka",
        desc: "Plaja ampla cu nisip deschis si faleze colorate. Cauta umbra si hidrateaza-te dupa pranz.",
        mapQuery: "Firiplaka Beach Milos Greece",
      },
      {
        time: "17:00",
        title: "Paleochori",
        desc: "Plaja vulcanica cu culori minerale intense - activitatea geotermala se simte aproape de suprafata. Nu sapa in zone fierbinti, nisipul poate fi foarte cald.",
        mapQuery: "Paleochori Beach Milos Greece",
      },
      {
        time: "20:00",
        title: "Cina la Sirocco (Paleochori)",
        desc: "Experienta culinara legata de caracterul geotermal al zonei. Rezerva din timp, mai ales in sezon.",
        mapQuery: "Sirocco Paleochori Milos Greece",
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
    title: "Sud-vest + Nord linistit",
    tip: "",
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
        desc: "Baie de dimineata pe plaje nisipoase si calme.",
        mapQuery: "Agia Kiriaki Beach Milos Greece",
      },
      {
        time: "12:00",
        title: "Firopotamos",
        desc: "Mic golf cu apa clara, case pescaresti si o bisericuta alba. Parcarea poate fi limitata - nu bloca accesul localnicilor.",
        mapQuery: "Firopotamos Milos Greece",
      },
      {
        time: "13:00",
        title: "Pranz la Pollonia",
        desc: "Enalion (fructe de mare) sau Armenaki - alternativa buna. Alege masa aproape de apa.",
        mapQuery: "Enalion Pollonia Milos Greece",
      },
      {
        time: "14:30",
        title: "Plimbare prin Pollonia",
        desc: "Port pescaresc calm, atmosfera mai linistita decat in Adamas.",
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
      "Rezerva din timp restaurantele foarte cautate si excursia cu barca, mai ales in sezon.",
      "Porneste devreme spre Sarakiniko si Plaka daca vrei mai putina aglomeratie.",
      "Nu subestima soarele: SPF ridicat, apa si pauze la umbra.",
      "La plajele vulcanice, nisipul si roca pot deveni foarte fierbinti.",
      "Pastreaza mereu o marja de timp in ziua plecarii.",
      "Nu lasa obiecte de valoare vizibile in masina inchiriata.",
      "Verifica vantul si starea marii in fiecare dimineata; muta plajele intre zile daca este nevoie.",
      "Pentru turul cu barca, accepta schimbarea traseului daca echipajul o considera necesara pentru siguranta.",
      "Fa fotografiile, dar lasa si timp fara telefon: Milos merita trait lent.",
    ],
  },
  {
    title: "Plan B pentru vant",
    items: [
      "Daca bate tare din nord: prioritizeaza coasta de sud (Firiplaka, Paleochori, Provatas, Agia Kiriaki).",
      "Daca marea e agitata: inlocuieste timpul de plaja cu Plaka, Trypiti, Klima, Pollonia si restaurante.",
      "Daca turul cu barca se muta: pastreaza luni ca zi flexibila; schimba cu marti doar daca timpul permite in siguranta.",
    ],
  },
  {
    title: "Fotografii, lumina si ritm",
    items: [
      "Dimineata: Plaka, Klima si plajele sudice sunt mai placute inainte de caldura puternica.",
      "Dupa-amiaza: Sarakiniko capata umbre expresive spre finalul zilei.",
      "Apus: Plaka e alegerea clasica pentru panorama, dar merge si faleza din Adamas.",
      "Regula 20/20: aloca ~20 min pentru parcare/orientare la obiectivele populare si lasa 20 min tampon la finalul fiecarei jumatati de zi.",
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
