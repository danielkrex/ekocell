import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";

const EggerPage = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Eko izolacija">
      <SubMenu data={ekoIzolacijaMenu} />
      <div className="content-one-column">
        <h1 className="headline" id="egger">
          Egger ploče
        </h1>
        <h3>DHF Pokrovna ploča za vanjsku upotrebu</h3>
        <p>
          EGGER DHF je difuzijski otvorena, paropropusna drvena vlaknasta ploča
          otporna na vlagu, ima CE oznaku u skladu sa standardom EN 14964 i s
          odobrenjem za gradnju Z-9.1-454 za primjenu kao nosiva komponenta. Za
          proizvodnju se upotrebljava hoblovina i trijeske iz proizvodnje punog
          drveta. Ploče su slijepljene bez formaldehida i isporučuju se debljine
          od 15 odnosno 20 mm.
        </p>
        <p>
          <strong>Prednosti</strong>
          <ul>
            <li>difuzijski otvorena</li>
            <li>tehnička klasa UDP -a</li>
            <li>isporučive u veličini optimalnoj za gradnju krova i zidova</li>
            <li>otporne na vjetar</li>
            <li>otporne na UV zračenje</li>
            <li>otporne na tuču</li>
            <li>
              Glavne prednosti DHF-a pred jelovom daskom i paropropusnom
              folijom: odvođenje vlage uz bolje zadržavanje topline,
              jednostavnije i brže postavljanje, bolja i jača konstrukcija,
              otpornost na tuču, vodoslivni sloj. DHF na krovu može ostati
              nepokriven vanjskim pokrovom u ljetnim mjesecima i do dva mjeseca,
              dok u zimskim mjesecima, razdoblje nepokrivanja može biti do 2 tj.
            </li>
          </ul>
        </p>
        <p>
          <strong>Tehničke karakteristike:</strong>
          <br />
          Dimenzija: 2500 x 675 x 15mm (4 – strani profil pero/utor) <br />
          Paleta: 63kom – 1t <br />
          Ƿ = 600kg/m³ <br />
        </p>

        <p>
          <strong>Glavne karakteristike i područja primjene DHF ploča:</strong>
          <ul>
            <li>Za „tople“ krovove i iskorištavanje potkrovlja</li>
            <li>
              Svrha ploče je „odvođenje“ tj., propuštanje vlage iz kuće kroz
              izolaciju prema van, s istodobnim boljim zadržavanjem topline
            </li>
            <li>
              Izolacijska zamjena za jelovu dasku i foliju (nije potrebno
              stavljati foliju)
            </li>
            <li>
              Nije potrebno stavljati dodatnu izolaciju na mjestima spajanja
              letvi i greda na sam DHF (probijanje čavala, vijaka i sl.)
            </li>
            <li>
              Sigurna, precizna i jednostavna montaža zahvaljujući otpornosti na
              puknuća
            </li>
            <li>Brza montaža zahvaljući printanoj rešetki za čavle</li>
            <li>Jaka konstrukcija</li>
            <li>Energetska učinkovitost</li>
            <li>Nizak rizik za oštećenja uzrokovana vlagom</li>
            <li>Otpornost na kišu, tuču, vjetar, uv zrake</li>
            <li>Vodoslivni sloj</li>
            <li>
              Troškovno i vremenski djelotvornija od alternativnih proizvoda –
              ekonomično rješenje
            </li>
          </ul>
        </p>

        <p>
          <strong>Koristi se za KROVOVE i ZIDOVE</strong>
          <ul>
            <li>
              KROVOVI, DHF se stavlja s vanjske strane, stavlja se na krovišta
              čiji nagib ne ide ispod 14°, odnosno ne ide nikako ispod 10°.
              Ukoliko je područje nagiba 10° – 14°, samo u tom slučaju je mjesto
              spojeva potrebno prelijepiti zaštitnom Egger trakom koju također
              imamo u ponudi.
            </li>
            <li>
              ZIDOVI, DHF se stavlja s vanjske strane zida, koristi se samo kod
              ventiliranih fasada, ne smije se zatvoriti i mora se osigurati
              konstantno provjetravanje.Za zidove se koriste i druge dimenzije,
              2800/3000 x 1250 x 15mm (2 – strani profil pero/utor)
            </li>
            <li>
              Pri postavljanju, treba voditi brigu da se paralelno s
              postavljanjem ploča moraju postavljati i letve kako bi se
              onemogućilo naknadno proklizavanje pri postavljanju ostalih DHF
              ploča.
              <br /> Nije potrebno koristiti nikakvu dodatnu izolaciju na
              mjestima spajanja letvi i greda na sam DHF (probijanje čavala,
              vijaka i sl.) DHF se koristi za tople krovove, što znači, za
              iskorištene tavanske prostorije pri renoviraju ili pri novogradnji
              na kojoj je predviđeno potkrovlje. <br /> U slučaju hladnih
              krovova, neiskorištenih tavana, sam DHF gubi svoju funkciju za
              koju je namjenjen te se kod istih i ne koristi.
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

export default EggerPage;

export const Head = () => <title>Ekocell - Egger proizvodi</title>;
