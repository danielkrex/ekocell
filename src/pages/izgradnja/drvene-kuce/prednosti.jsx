import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { drveneKuceMenu } from "../../../content/pages-izgradnja";

import Icon1 from "../../../assets/images/ekocell-benefit-icon(1).png";
import Icon2 from "../../../assets/images/ekocell-benefit-icon(2).png";
import Icon3 from "../../../assets/images/ekocell-benefit-icon(3).png";
import Icon4 from "../../../assets/images/ekocell-benefit-icon(4).png";
import Icon5 from "../../../assets/images/ekocell-benefit-icon(5).png";
import Icon6 from "../../../assets/images/ekocell-benefit-icon(6).png";
import Icon7 from "../../../assets/images/ekocell-benefit-icon(7).png";
import Icon8 from "../../../assets/images/ekocell-benefit-icon(8).png";

const DrveneKuce = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Drvene montažne kuće">
      <SubMenu data={drveneKuceMenu} />
      <h1 className="headline">Prednosti drvene gradnje</h1>
      <div className="content-two-column end pbig prednosti-table">
        <div className="column">
          <img class="ekocell-benefit-icon" src={Icon1} alt="ekocell-benefits" />
          <h3>Energetska učinkovitost</h3>
        </div>
        <div className="column">
          <p>
            U današnje vrijeme, kada klasični energenti sve više poskupljuju i
            kada izdvajanje za redovne mjesečne režije postaje veliki uteg oko
            vrata budžetu prosječne obitelji važno je znati da u usporedbi sa
            standardnim zidanim kućama, niskoenergetske kuće troše čak do 5 puta
            manje energije za grijanje i hlađenje. To znači da naši investitori
            izdvajaju znatno manji iznos za mjesečne režije.
          </p>
        </div>
        <div className="column">
          <img class="ekocell-benefit-icon" src={Icon2} alt="ekocell-benefits" />
          <h3>Brzina izgradnje</h3>
        </div>
        <div className="column">
          <p>
            Brzina gradnje je najveća prednost skeletno montažne kuće. Klasična
            zidana kuća bi se prema pravilima struke trebala graditi 8-12
            mjeseci, dok gradnja jedne ovakva montažne kuće traje nekoliko
            tjedana.
          </p>
        </div>
        <div className="column">
          <img class="ekocell-benefit-icon" src={Icon7} alt="ekocell-benefits" />
          <h3>Ekološka osviještenost</h3>
        </div>
        <div className="column">
          <p>
            Materijali koje koristimo prilikom proizvodnje i gradnje su zdravi,
            prirodni i ekološki, što uz znatno smanjenje onečišćenja okoliša
            osigurava zdrav, kvalitetan i ugodan život u našim kućama. Svi
            otpadni materijali koje koristimo u gradnji su reciklirani.
          </p>
        </div>

        <div className="column">
          <img class="ekocell-benefit-icon" src={Icon6} alt="ekocell-benefits" />
          <h3>Protupotresna otpornost</h3>
        </div>
        <div className="column">
          <p>
            Skeletne, odnosno drvene kuće imaju površinsku masu znatno manju od
            zidanih kuća, pa su i nekoliko puta otpornije na potres. Drvo kao
            građevni materijal je puno elastičniji od cigle i betona, pa se
            upravo zbog toga «bolje» ponaša prilikom potresa, te je
            protupotresno vrlo zahvalan materijal. Spojevi same konstrukcije u
            skeletnoj gradnji su puno jači nego u montažnoj, jer su napravljeni
            tako da stupovi ulaze jedan u drugi, te se ne vežu s metalnim
            spojnicama.
          </p>
        </div>

        <div className="column">
          <img class="ekocell-benefit-icon" src={Icon5} alt="ekocell-benefits" />
          <h3>Individualni pristup</h3>
        </div>
        <div className="column">
          <p>
            Kako bismo svojim investitorima omogućili useljenje u njihov dom iz
            snova, oblikovan upravo po njihovim željama i prilagođen njihovom
            stilu života, svakom projektu pristupamo individualno. Ne nudimo
            tipske i standardne kuće već izradu jedinstvenog projekta
            prilagođenog vašim željama!
          </p>
        </div>

        <div className="column">
          <img class="ekocell-benefit-icon" src={Icon4} alt="ekocell-benefits" />
          <h3>Zrakotjesnost</h3>
        </div>
        <div className="column">
          <p>
            Jedna od važnijih stvari koje Ekocell nudi je zrakotjesno
            zabrtvljena kuća. Izvana, konstrukcija mora biti zaštićena od
            vremenskih utjecaja, s unutarnje strane važno je ne dopustiti da
            vlaga iz prostorije slobodno prodire u strukturu i izolaciju.
            Nepropusni sloj je obično na takozvanoj toploj strani vanjskih
            komponenata. Iako unutarnja žbuka obično preuzima tu funkciju u
            čvrstoj konstrukciji, na primjer, folije za zaštitu od pare koriste
            se u drvenoj gradnji. Nepropusni dizajn omotača zgrade propisan je
            standardima i smjernicama, i to s dobrim razlogom. Pored propuha i
            loše kvalitete zraka, nedovoljno dizajnirana razina nepropusnosti
            može dovesti do strukturnih oštećenja. Ako zrak iz unutrašnjosti
            dospije u hladnija područja bez kočenja tamo gdje su spojevi i gdje
            vlaga kondenzira, lako može doći do rasta plijesni i truljenja.
          </p>
        </div>

        <div className="column">
          <img class="ekocell-benefit-icon" src={Icon3} alt="ekocell-benefits" />
          <h3>Protupožarna otpornost</h3>
        </div>
        <div className="column">
          <p>
            Materijali koje koristimo kao slojeve za oblaganje drvenih nosivih
            elementa, kategorizirani su kao «negorivi» ili «slabo gorivi».
            Suprotno uvriježenom mišljenju, drvo je protupožarno vrlo vrijedan
            materijal. Naime, beton pod utjecajem visokih temperatura puca,
            čelik gubi stabilnost zbog savijanja i uvijanja, dok drvo stvara
            zaštitni sloj, koji sprječava dovod kisika i gorenje drveta, tako da
            drvo samo tinja, ali ostaje statički stabilno duže vrijeme.
          </p>
        </div>
        <div className="column">
          <img class="ekocell-benefit-icon" src={Icon8} alt="ekocell-benefits" />
          <h3>Trajnost</h3>
        </div>
        <div className="column">
          <p>
            Trajnost građevine određena je kvalitetnom gradnjom i redovitim
            održavanjem. Uporabni vijek konstrukcije je razdoblje tijekom kojeg
            ponašanje i svojstva građevina ostaju očuvana na razini sukladnoj s
            ispunjenjem bitnih zahtjeva. Trajnost skeletnih građevina uz
            redovita održavanja mogu biti 150 godina ili više godina, te su u
            tom pogledu puno bolji od klasične gradnje.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
