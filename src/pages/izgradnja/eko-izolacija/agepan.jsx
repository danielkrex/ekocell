import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";

const AgepanPage = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Eko izolacija">
      <SubMenu data={ekoIzolacijaMenu} />
      <div className="content-one-column">
        <h1 className="headline" id="agepan">
          AGEPAN® THD
        </h1>
        <p>
          Ploče debljine 40, 60, 80 mm. Dodatna toplinska i zvučna izolacija
          poboljšava fazni pomak prolaska topline kroz vaš krov. Koristimo kao
          sekundarni pokrov, fasadnu ploču te izolaciju. Idealne kod sanacije
          krova s gornje strane kao termoizolacija.
        </p>
        <p>
          <strong>Trocken Holzfaser Dammplatte</strong>
          <ul>
            <li>Sekundarni pokrov, fasadna ploča i toplinska izolacija.</li>
            <li>Difuzijski otvorena (paropropusna) ploča.</li>
            <li>Profil pero i utor na sve četiri strane.</li>
          </ul>
        </p>
        <p>
          <strong>AGEPAN® THD N+F:</strong>
          <ul>
            <li>
              ploče su istovremeno toplinska izolacija, sekundarni pokrov ali i
              fasadna ploča. Odlična su zvučna izolacija i vjetrozaštita. Zbog
              izrazito dugog faznog pomaka prolaska topline, sprječavaju
              zagrijavanje objekta u ljetnom periodu, dok po zimi zadržavaju
              toplinu unutar prostora. Ploče su primjerene i za novogradnje i za
              adaptaciju.
            </li>
            <li>
              ploče su napravljene od crnogoričnog drveta te su potpuno PRIRODAN
              PROIZVOD koji ne sadrži formaldehide. Odgovaraju svim zahtijevima
              visokih ekoloških standarda, a sama je proizvodnja pod stalnim
              nadzorom njemačkih instituta. (Njemački institut za graditeljstvo,
              DIBt, HFB Ingeneering GmbH).
            </li>
            <li>
              je ploča od drvenih vlakana, izrađena u suhom postupku. S profilom
              pero i utor sa sve 4 strane, udovoljava zahtijevima SIST (DIN) EN
              13171, te dozvoli Njemačkog instituta za graditeljstvo
              Z-23.15-1508. U procesu proizvodnje se pojedinačna drvena vlakna
              prskaju sa PUR-vezivima koja ne sadrže formaldehide te se pritišću
              u jednoslojne ploče s asimetričnim profilom gustoće. Zbog toga je
              THD ploča, gledano na prijepise pravilnika ZDVH, upotrebljiva kao
              sekundarni pokrov s odgovarajućom ventilacijom. Može se koristiti
              u krovnom i zidnom dijelu objekta, kao unutarnja izolacijska
              ravnina ili kao nosioc fasadne žbuke.
            </li>
          </ul>
        </p>
        <p>
          <strong>Fazni Pomak:</strong>
          <ul>
            <li>THD 40 mm – 176 min</li>
            <li>THD 52 mm – 228 min</li>
            <li>THD 60 mm – 264 min</li>
            <li>THD 80 mm – 352 min</li>
            <li>THD 100 mm – 420 min</li>
            <li>THD 120 mm – 504 min</li>
          </ul>
        </p>
        <p>
          <strong>PREDNOSTI:</strong>
          <ul>
            <li>Difuzijski otvorena (paropropusna) ploča</li>
            <li>Ekološki materijal</li>
            <li>Certificarn materijal</li>
            <li>Malo otpada i brza ugradnja</li>
            <li>Prohodna po ONR 22219-2 (iznad 60 mm)</li>
            <li>Izvedba zračnog kanala je dozvoljena s tanjim letvama</li>
            <li>Može se koristiti u zidnom i krovnom dijelu objekta</li>
            <li>
              Upotrebljivo kao toplinska izolacija na unutarnjoj i vanjskoj
              strani
            </li>
            <li>
              S inovativnim postupkom proizvodnje, stvoren je asimetričan profil
              gustoe u homogenoj ploči. AGEPAN® THD ploče na jednoj strani imaju
              6-8 mm površinski sloj, s gušćim profilom gustoće. To im daje
              izvanrednu stabilnost i čvrstoću. Sredina ploče je lakša i djeluje
              kao izvrstan izolator.
            </li>
            <li>Sekundarni pokrov po ZDVH* pravilniku</li>
            <li>Bez potrebe brtvljenja vijaka</li>
            <li>
              Mogu biti izložene vremenskim uvjetima do 8 tjedana (kiša,
              snijeg…)
            </li>
            <li>Primjerena površina za trake za brtvljenje</li>
            <li>Odlična zvučna, toplinska i protupožarna zaštita</li>
            <li>Jako dobra izolacija od hladnoće i vrućine</li>
            <li>Nadomješta sistem daska + folija (kod nagiba iznad 15°)</li>
            <li>Koristi se kao fasadna ploča kod ventiliranih fasada</li>
            <li>
              Podloga za fasadnu žbuku – certificiran sistem fasade s Knauf
              Marmorit
            </li>
          </ul>
        </p>
      </div>
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default AgepanPage;

export const Head = () => <title>Ekocell - AGEPAN Proizvodi</title>;
