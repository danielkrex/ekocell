import ImageInterijer from "../assets/images/ekocell-interijer.png";
import DizajnInterijera from "../assets/images/ekocell-dizajnInterijera.png";
import InterijerPlaniranje from "../assets/images/ekocell-planiranje.png";
import InterijerBoja from "../assets/images/ekocell-boja.png";
import InterijerKljucImage from "../assets/images/ekocell-interijer-kljuc.png";

export const welcome = {
    amblem: {
      text: "Interijer",
    },
    title: {
      text: "Interijer",
    },
  };

export const interijer = {
  id: "interijer",
  headline: "Interijer",
  text: "EKOCELL Interijer, specijaliziran je za stvaranje impresivnih interijera koji kombiniraju funkcionalnost i ljepotu. Naš stručan dizajn i vješti izvršitelji radova zajedno rade na transformiranju vašeg prostora u odraz vašeg jedinstvenog stila i osobnosti.",
  text1:
    "Naše usluge uključuju: Dizajn interijera, Planiranje prostora, Konzultacije o boji, Dizajn rasvjete, Odabir i nabava namještaja",
  image: {
    src: ImageInterijer,
  },
};

export const interijerIdeja = {
  id: "ideja",
  headline: "Ideja",
  text: "Naš pristup dizajnu započinje razgovorom s vama kako bismo bolje razumjeli vaše želje i potrebe. Na temelju tih informacija, naš tim kreativaca razvija inspirirajuće koncepte koji će transformirati vaš interijer. S obzirom na vašu estetiku i funkcionalne ciljeve, stvaramo vizualne smjernice, skice i prijedloge za promjene u prostoru. Ideja je prva faza koja vam pomaže vizualizirati budući izgled vašeg interijera.",
  image: {
    src: DizajnInterijera,
  },
};

export const interijerIzvedba = {
  id: "izvedba",
  headline: "Izvedba",
  text: "Nakon što se usuglasimo oko ideje, prelazimo na fazu detaljnog rješenja. Ovdje ćemo razraditi planove, tehničke nacrte i specifikacije materijala i opreme potrebne za implementaciju dizajna. Također ćemo vam pružiti procjenu troškova kako biste imali jasnu sliku o financijskim aspektima projekta. Ova faza osigurava da svi tehnički aspekti budu pokriveni, uključujući i sve potrebne dozvole.",
  image: {
    src: InterijerBoja,
  },
};

export const interijerKljuc = {
  id: "kljuc-u-ruke",
  headline: "Ključ u ruke",
  text: "U ovoj najkompletnijoj usluzi, mi preuzimamo odgovornost za sve korake projekta. To uključuje odabir materijala i izvođača, koordinaciju svih radova i redovito praćenje napretka. Također se brinemo o kvaliteti izvođenja i rješavanju eventualnih izazova koji se mogu pojaviti tijekom izvedbe. Na kraju, isporučujemo vam potpuno uređen i funkcionalan interijer koji odražava vašu početnu ideju.",
  image: {
    src: InterijerKljucImage,
  },
};

export const interijerStrucnoSavjetovanje = {
  id: "interijer-boja",
  headline: "Stručno savjetovanje",
  text: "Stručno savjetovanje pruža vam priliku da iskoristite naše znanje i iskustvo kako biste samostalno radili na poboljšanju svog interijera. Naši dizajneri će vas voditi kroz proces donošenja odluka o bojama, materijalima, rasporedu namještaja te drugim važnim aspektima dizajna. Ovo savjetovanje može biti od pomoći ako želite raditi manje promjene u svom prostoru ili imate određena pitanja vezana uz dizajn.",
  image: {
    src: InterijerPlaniranje,
  },
};

export const interijerMenu = [
  {
    text: "Projekti",
    link: "/interijer/projekti",
  }
]
