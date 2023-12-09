import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { drveneKuceMenu } from "../../../content/pages-izgradnja";

import PregradniZid from "../../../assets/images/ekocell-pregradni-zid.jpeg";
import KrovPresjek from "../../../assets/images/ekocell-krov-presjek.png";

const DrveneKuce = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Drvene montažne kuće">
      <SubMenu data={drveneKuceMenu} />
      <h1 className="headline">Niskoenergetska kuća</h1>
      <div className="content-one-column">
        <p>
          Niskoenergetske kuće temelj su primjene održive gradnje tijekom
          cijelog svog životnog vijeka, počevši od građevinskog materijala čija
          proizvodnja ne opterećuje okoliš, preko njihove energetske
          učinkovitosti i racionalnog trošenja energenata tijekom životnog
          vijeka, pa sve do racionalnog gospodarenja otpadom. Osim toga,
          niskoenergetske kuće (u čiju skupinu spadaju i pasivne kuće) pružaju
          visok stambeni komfor s ugodnom klimom tijekom cijele godine bez
          standardnih sustava grijanja i hlađenja, uz vrlo niske troškove na
          račun energenata.
        </p>
      </div>
      <div className="content-two-column pbig">
        <div className="column">
          <p>
            Dok klasične kuće prosječno troše 150kWh/m², a one starije i loše
            građene čak i do 200-250 kWh/m², niskoenergetske kuće troše oko 30
            kWh/m² god. energije za grijanje iako to varira od zemlje do zemlje.
            U Hrvatskoj se prilikom definiranja niskoenergetske kuće uzima
            vrijednost do 40 kWh/m² godišnje za grijanje prostorija.
            Niskoenergetske kuće još nazivaju i trolitarske. Prema jednostavnom
            izračunu, kaže se da takva kuća na grijanje troši otprilike 3 lit/m²
            god. lož ulja, 3 m3/m² god. prirodnog plina ili 6 kg/m² god. drvenih
            peleta.
          </p>
        </div>
        <div className="column">
          <p>
            Cilj je smanjenje toplinskih gubitaka kuće što se ostvaruje se na
            slijedeće načine:
          </p>
          <ul>
            <li>kuća se orijentira prema jugu</li>
            <li>
              inzistira se na kvalitetnoj toplinskoj izolaciji cijelog oplošja
              kuće
            </li>
            <li>
              toplinske zone kuće se odvajaju (dnevna soba prema jugu, ostave na
              sjever)
            </li>
            <li>imperativ je kompaktnija gradnja</li>
            <li>postavljaju se prozori sa 3-slojnim staklom</li>
            <li>sustav grijanja je niskotemperaturni</li>
          </ul>
        </div>
      </div>

      <div className="content-one-column">
        <p>
          Također, želi se povećati korištenje obnovljivih izvora energije, te
          se preporuča aktivno korištenje sunčeve energije pomoću sunčevih
          toplovodnih kolektora (za dobivanje tople vode), fotonaponskih ploča
          (za dobivanje električne struje) te pasivno korištenje sunčeve
          energije preko velikih staklenih ploha okrenutih na jug. Procjenjuje
          se da je početna investicija veća za nekih 20%, a povrat se očekuje
          kroz 10-15 godina. Energijom koja se danas potroši u prosječnoj kući u
          Hrvatskoj možemo zagrijati 3-4 niskoenergetske kuće odnosno 8 – 10
          pasivnih kuća.
        </p>
        <p>
          U Hrvatskoj se već sada može naći kvalitetna ponuda niskoenergetski
          kuća i gotovih projekata.
        </p>
      </div>

      <div className="content-one-column">
        <h3 className="headline">Presjek zida niskoenergetske kuće</h3>
        <p>
          Na vanjskoj strani drvene konstrukcije je s vijcima pričvrščen RF
          agepan THD ploča a na unutarnjoj strani OSB ploča , koja je
          zabrtvljena s Airstop trakom, zajedno čineći parnu branu. Gornji sloj
          fasade izvodimo marmorit KNAUF sistemom, dajući otpornost na vatru
          F90. Na unutarnjoj strani zida nalaze se KNAUF profili, na koje se
          pričvrsti vatrostalna gips ploča. Prostor između drvene konstrukcije i
          ravnine instalacije ispunjen je celuloznom izolacijom.
        </p>
      </div>
      <div className="content-two-column">
        <div className="column">
          <img src={PregradniZid} alt="Pregradni zid" />
        </div>
        <div className="column">
          <p>
            Prijenos topline: U = 0,125 W / m2K <br />
            Fazni pomak: 17.5 sati <br />
            Vatrootpornost: F90 (izvana) F30 (unutra) <br />
            Zvučnu izolaciju: ≥53 dB
            <br />
            SASTAV:
          </p>
          <ul className="no-style">
            <li>1 – gips obloge 1,5 cm</li>
            <li>2 – celulozna izolacija 10 cm</li>
            <li>3 – OSB ploče – parna brana 1,5 cm</li>
            <li>4 – celulozna izolacija 18 cm</li>
            <li>5 – ploča agepan THD 6 cm</li>
            <li>6 – fasada 0,8 cm</li>
            <li>A – KVH drveni kostur strukture</li>
            <li>B – metalni profili za gips</li>
            <li>C – Airstop traka</li>
          </ul>
        </div>
      </div>

      <div className="content-one-column">
        <h3 className="headline">Presjek krova niskoenergetske kuće</h3>
        <p>
          Pod gredama lažnog stropa slaže se metalna potkonstrukcija na koju se
          s donje strane lijepi EKO NATUR parna brana. Ova membrana je
          hermetički zatvorena s Airstop trakom. Ako nemamo dovoljno prostora za
          veću debljinu toplinske izolacije na gornjoj strani krovnog roga
          stavljamo deblju agepan ploču.
        </p>
      </div>
      <div className="content-two-column end">
        <div className="column">
          <img src={KrovPresjek} alt="Ekocell Presjek krova" />
        </div>
        <div className="column">
          <p>
            Prijenos topline: U = 0.15 W / m2K <br />
            Fazna: Fz = 14 sati
            <br />
            SASTAV:
          </p>
          <ul className="no-style">
            <li> 1 – crijep</li>
            <li>2 – krovne letve</li>
            <li>3 – ventilirajući krovni kanali</li>
            <li>4 – ploče agepan DWD sek. 6 cm</li>
            <li>5 – celulozna izolacija 23 cm</li>
            <li>6 – Eko Natur parna brana 0,2 cm</li>
            <li>7 – gips ploča 1,5 cm</li>
            <li>A – krovni rogovi</li>
            <li>B – metalni profil za gips ploču</li>
            <li>C – Airstop traka</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
