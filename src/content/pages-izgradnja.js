import drveneKuceImage from "../assets/images/ekocell-drvenekuce.png";
import zavrsniRadoviImage from "../assets/images/ekocell-zavrsniradovi-1.png";
import podnoGrijanjeImage from "../assets/images/ekocell-podnogrijanje.png";
import ekoIzolacijaImage from "../assets/images/ekocell-ekoizolacija.png";

export const welcome = {
  amblem: {
    text: "Gradimo budućnost zajedno",
  },
  title: {
    text: "Gradimo budućnost zajedno",
  },
};

export const drveneKuce = {
  id: "drvene-kuce",
  headline: "DRVENE MONTAŽNE KUĆE",
  text: "U novije vrijeme drvo kao prirodni građevinski materijal opet je počeo dobivati značajniju ulogu u dizajnu. Sa svojim dobrim fizičkim svojstvima u izgradnji te mnogim aspektima, superioran je u odnosu na druge upotrebljive srodne materijale. Zbog mnogih prednosti u usporedbi s drugim građevinskim materijalima ponovno se povećala izgradnja drvenih objekata.želite surađivati u tom važnom životnom projektu.",
  link: {
    src: "/izgradnja/drvene-kuce",
    text: "Više o drvenim kućama",
  },
  image: {
    src: drveneKuceImage,
  },
};

export const podnoGrijanje = {
  id: "podno-grijanje",
  headline: "Podno grijanje",
  text: "Nudimo sistem grijanja nove generacije koji štedi energiju. Inovativna tehnologija grijanja osnovana je na upotrebi aluminijskih traka. Ove specijalno razvijene trake ravnomjerno raspoređuju toplinu i stoga su energetski efikasne.",
  link: {
    src: "/izgradnja/podno-grijanje",
    text: "Više o podnom grijanju",
  },
  image: {
    src: podnoGrijanjeImage,
  },
};

export const ekoIzolacija = {
  id: "eko-izolacija",
  headline: "Eko izolacija",
  text: "Ekocell nudi širok spektar prirodnih izolacija i materijala za brtvljenje. Kod nas možete pronaći informacije o različitim vrstama izolacija, uključujući drvene izolacije, sekundarni pokrov, fasadne ploče, toplinsku izolaciju, panele za ravne krovove, instalacijske šupljine, podnu izolaciju, celuloznu izolaciju, folije i brtve, parnu branu, kišnu foliju te različite vrste brtvi. Pružimo vam korisne informacije i smjernice o uporabi ovih materijala za izolaciju i brtvljenje u različitim kontekstima i aplikacijama.",
  link: {
    src: "/izgradnja/eko-izolacija",
    text: "Više o eko izolaciji",
  },
  image: {
    src: ekoIzolacijaImage,
  },
};

export const strucnoSavjetovanje = {
  id: "strucno-savjetovanje",
  headline: "Stručno savjetovanje",
  text: "Stručno savjetovanje u vezi drvene gradnje, prirodne izolacije i završnih radova pruža klijentima visokokvalitetno i personalizirano savjetovanje u vezi ovih specifičnih područja. Stručnjaci u ponudi ove usluge pružit će vam informacije, smjernice i savjete o primjeni drvenih materijala u građevinskim projektima, odabiru prirodnih izolacijskih materijala i tehnikama za postizanje energetske učinkovitosti te savjetima o završnim radovima kako biste postigli željeni estetski i funkcionalni izgled vašeg projekta. Ova usluga omogućuje klijentima da donesu informirane odluke i ostvare uspješne rezultate u svojim građevinskim projektima.",
  image: {
    src: zavrsniRadoviImage,
  },
};

export const izgradnjaMenu = [
  {
    text: "Drvene kuće",
    link: "/izgradnja/drvene-kuce",
  },
  {
    text: "Podno grijanje",
    link: "/izgradnja/podno-grijanje",
  },
  {
    text: "Eko izolacija",
    link: "/izgradnja/eko-izolacija",
  },
  {
    text: "Projekti",
    link: "/izgradnja/projekti",
  }
]

export const drveneKuceMenu = [
  {
    text: "Zašto drvene kuće",
    link: "/izgradnja/drvene-kuce",
  },
  {
    text: "Tehnologija gradnje",
    link: "/izgradnja/drvene-kuce/tehnologija-gradnje",
  },
  {
    text: "Prednosti drvenih kuća",
    link: "/izgradnja/drvene-kuce/prednosti",
  },
  {
    text: "Niskoenergetska kuća",
    link: "/izgradnja/drvene-kuce/niskoenergetska-kuca",
  }
];

export const ekoIzolacijaMenu = [
  {
    text: "Eko izolacija i materijali za brtvljenje",
    link: "/izgradnja/eko-izolacija",
  },
  {
    text: "Drvene izolacije",
    link: "/izgradnja/eko-izolacija/drvene-izolacije",
  },
  {
    text: "Celulozna izolacija",
    link: "/izgradnja/eko-izolacija/celulozna-izolacija",
  }
];
