import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";

import CelulozaProcess from "../../../assets/images/ekocell-celuloza-process.jpeg";
import CelulozaPresjek from "../../../assets/images/ekocell-celuloza-presjek.jpeg";
import FazniPomak from "../../../assets/images/ekocell-fazni-pomak.jpeg";
import CelulozaStroj from "../../../assets/images/ekocell-celuloza-stroj.jpg"

import CelulozaVideomp4 from "../../../assets/images/ekocell-celulozna-izolacija.mp4";
import CelulozaVideowebm from "../../../assets/images/ekocell-celulozna-izolacija.webm";

const CeluloznaIzolacija = () => {
  useLayoutEffect(() => { }, []);

  return (
    <Layout title="Eko izolacije">
      <SubMenu data={ekoIzolacijaMenu} />
      <h1 className="headline">Celulozna izolacija</h1>
      <div className="content-one-column">
        <img src={CelulozaProcess} alt="process celuloze" />
      </div>
      <div className="content-one-column">
        <p>
          Izrađena je od mljevenog novinskog ili bijelog papira, u koju je
          dodana borova sol te ju čini vatrostalnom. Borova sol je prirodni
          konzervans, tako da je maksimalno zaštićena izolacija od pljesni i
          insekata. Ako u izolaciju doprije miš ili puh, to mu isiše vlagu iz
          tijela i tako dehidrira. Izolacija je u rahlom stanju, te se upuhuje
          kroz cijevi iz stroja. Ugrađena izolacija ima oblik ploče, koja je
          čvrsto smještena u svakom dizajnu. Dobar učinak ima i u ljetnom
          razdoblju, što se gleda u činjenici da u potkrovlju ne trebaju više
          rasipni klima uređaji. U kombinaciji s ECO NATUR parnom branom, ona
          također regulira mikroklimu u prostoru.
        </p>
      </div>
      <div className="content-one-column"></div>
      <div className="content-two-column pbig">
        <div className="column">
          <p>
            Niska toplinska vodljivost (lambda) dobije se kada je u vlakna
            uhvaćeno puno zraka, što je stvarni izolator. Prema tome, najbolje
            toplinska vodljivost se postiže vakuumom. Lagani izolacijski
            materijali (XPS, EPS, staklena vuna) imaju težinu od oko 20 kg / m3
            ili manje i imaju toplinsku provodljivost 0,025 do 0,035 W / m2K, pa
            teoretski trebamo manju debljinu toplinske izolacije revizorski isti
            U vrijednost. Međutim, budući da potrošnja energije također utječe
            na termalnu stabilnost i pomak u fazi topline je važan koliko i masa
            materijala. Dakle, lagani izolacijski materijali unatoč odličnom
            lambda akumuliraju manje topline. Ako usporedimo dvije zgrade s
            istim U-vrijednošću stvarni utrošak energije smanji se za 26,4% dok
            je zgrada izolirana celuloznom izolacijom.
          </p>
        </div>
        <div className="column">
          <img src={CelulozaPresjek} alt="presjek kuce s celulozom" />
        </div>
      </div>
      <div className="content-two-column pbig">

        <div className="column">
          <h3>Štiti krovnu konstrukciju od propadanja</h3>
          <p>
            ISOCELL celulozna izolacija može u odnosu na druge prirodne izolacije
            upiti otprilike dvostruko vlage, a u usporedbi s mineralnom vunom i 4x
            više vlage, u svojoj strukturi je takva da čak i na 40% sadržaja vlage
            na dodir je uvijek još suha. Zbog različitih temperatura unutar i
            izvan zgrade dovodi do kondenzacije u izolacijskom sloju. Mineralna
            (staklo, kamen)vuna i sintetički materijali ne mogu se riješiti viška
            vlage, pa se prihvaća u drvenu konstrukciju. U instalaciji celulozne
            izolacija Isocell upuhuje se u cijeloj debljini drva. Budući da
            celulozna izolacija u odnosu na drvo može držati više vlage, time
            štiti drvenu konstrukciju od prekomjernog ovlaživanja. Time celulozna
            izolacija u normalnim uvjetima regulira vlagu u drvenoj konstrukciji,a
            u kombinaciji s eco natur parnom branom doprinosi optimalnom stupnju
            vlažnosti u prostoru.
          </p>
        </div>

        <div className="column">
          <img src={CelulozaStroj} alt="stroj za upuhavanje celuloze" />
        </div>
      </div>
      <div className="content-one-column pbig">
        <h3>Za krovove, zidove i podove</h3>
        <p>
          Bilo da se radi o izgradnji novih ili obnovi, celulozna izolacija se
          može koristiti u mnogim strukturama: u krovovima, stropovima, podovima
          suhe gradnje, u pregradnim zidovima, drvenim skeletnim zidovima, kao i
          dodatna izolacija na unutarnjoj stijenki trupaca i masivnih zidova.
        </p>
      </div>

      <video style={{width: "100%", maxWidth: "800px"}} controls>
        <source src={CelulozaVideomp4} type="video/mp4" />
        <source src={CelulozaVideowebm} type="video/webm" />
        Your browser does not support HTML video.
      </video>

      <br />
      <h3>Prednosti proizvoda</h3>

      <div className="content-two-column pbig">
        <div className="column">
          <h3>Vrlo niski koeficijent toplinske provodljivosti.</h3>
        </div>
        <div className="column">
          <p>
            Poznata činjenica ja da je svaka vrsta izolacije uvijek samo toliko
            dobra kao njezina najslabija točka. S celuloznom izolacijom i
            najmanji nedostaci i pukotine su ispunjeni. Rezultat je izolacijska
            potpunost, bez šupljina i bez toplinskih mostova.
          </p>
        </div>
        <div className="column">
          <h3>Regulacija vlage</h3>
        </div>
        <div className="column">
          <p>
            Celulozna izolacija je u mogućnosti prikupiti vlagu u svoja vlakna,
            bez gubitka izolacijske vrijednosti, i da ga ponovo emitira
            ravnomjerno. Ova posebna moć za pohranu vlage ima regulacijski
            učinak na sobnu klimu. Kada se koristi u renoviranje ili na ravnim
            krovnim sustavima bez stražnje ventilacije, celuloza djeluje kao
            “tampon”, izvlači vlagu (iz stajališta građevinske fizike).
            <br />
            Osim toga, u usporedbi s uobičajenim vlaknima ima bolju
            zrakotjesnost, posebno u drvenim konstrukcijama. Sve u svemu
            prirodna svojstva celuloznih vlakana u kombinaciji s blow-in
            tehnologijom zadovoljava najviše zahtjeve za sobnu klimu i uštedu
            energije.
          </p>
        </div>
        <div className="column">
          <h3>Veći fazni pomak</h3>
        </div>
        <div className="column">
          <p>
            Visok kapacitet za pohranu celuloznu izolaciju dovodi do znatno
            kasnijeg prijenosa zračene topline od sunca. Čak i soba u potkrovlju
            ostaje svježa do kasno u noć i možete mirnije spavati. Također je
            moguće izračunati toplinske zaštite na sličan način kao
            U-vrijednosti za toplinsku izolaciju. U tom slučaju govorimo o
            faznom pomaku. Fazni pomak je vrijeme, računa se u satima, vrijeme
            koje je potrebno za toplinski val da prođe s vanjske strane zgrade
            prema unutra.
          </p>
          <img src={FazniPomak} alt="fazni pomak kod celulozne izolacije" />
        </div>
        <div className="column">
          <h3>Maksimalna zvučna nepropusnost</h3>
        </div>
        <div className="column">
          <p>
            Celulozna izolacija kada je upuhana, kompaktna je i također ima
            velike prednosti u ovom sektoru. U testovima provedenim za
            usporedbu,na sredini zidova mjereno do 7 dB više zvučne izolacije u
            usporedbi s konvencionalnim vlaknima. ..jedan test između celulozne
            izolacije i staklene vune
          </p>
        </div>
        <div className="column">
          <h3>EKO prednost</h3>
        </div>
        <div className="column">
          <p>
            Općenito se zna da dobra izolacija ne samo da štedi energiju, već i
            ne šteti okolišu. Čak je u fazi proizvodnje ISOCELL celulozna
            izolacija bez premca s ekološkog stajališta:
            <br />U usporedbi s drugim izolacijskim materijalima, kao što su
            polystrene(XPS) ili staklene vune, primarna energija potrebna za
            proizvodnju je znatno manja. U usporedbi s polystrene to je samo
            jedna šestina energije, a jedna trećina u usporedbi sa staklenom
            vunom.
          </p>
        </div>
        <div className="column">
          <h3>Maksimalna otpornost na požar</h3>
        </div>
        <div className="column">
          <p>
            Celulozna izolacija ima jaču vatrootpornost u usporedbi s
            konvencionalnim izolacijskim materijalima. To je dokazano u
            testovima provedenim na građevinskim elementima od F30 do F90. S EN
            klasifikacijom B-s2-d0. ISOCELL celulozna izolacija postiže jedan od
            najboljih mogućih ocjena u zapaljivosti izolacijskih materijala.
            Kratki video, test sa 3 identična zapaljena objekta (zanimljivo).
          </p>
        </div>
      </div>
      <div className="content-one-column end">
        <div className="column">
          <iframe
            width="672"
            height="378"
            src="https://www.youtube.com/embed/lAPPn53JtHQ"
            title="The Big Burn: The Truth About Cellulose Insulation"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="672"
            height="378"
            src="https://www.youtube.com/embed/vF68EIAvzt8"
            title="Production of cellulose insulation | 4:24 min"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default CeluloznaIzolacija;

export const Head = () => <title>Celulozna izolacija</title>;
