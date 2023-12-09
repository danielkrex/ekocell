import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import ReactCompareImage from "react-compare-image";
import { drveneKuceMenu } from "../../../content/pages-izgradnja";

import SkeletnaGradnja from "../../../assets/images/ekocell-skeletna-gradnja-razrez.jpeg";
import SkeletnaGradnja1 from "../../../assets/images/ekocell-skeletna-gradnja-razrez-2.jpeg";
import SkeletnaStart from "../../../assets/images/ekocell-skeletna-gradnja-start.jpeg";
import SkeletnaKriz from "../../../assets/images/ekocell-skeletna-kriz.jpeg";
import SkeletnaRep from "../../../assets/images/ekocell-skeletna-rep.jpeg";

import SeverinBefore from "../../../assets/images/ekocell-kuca-severin-01.jpg";
import SeverinAfter from "../../../assets/images/ekocell-kuca-severin-02.jpg";

const DrveneKuce = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Drvene montažne kuće">
      <SubMenu data={drveneKuceMenu} />
      <h1>Tehnologija gradnje</h1>
      <div className="content-two-column pbig end">
        <h3 className="headline">Stari sistem gradnje na nov način</h3>
        <div className="column">
          <p className="end">
            Danas za gradnju drvenih skeletnih kuća upotrebljavamo modernu,
            kompletnu i računalno potpomognutu metodu gradnje. Još uvijek
            koristimo način gradnje starih tesara kao što su lastin rep. CNC
            obrada drvne konstrukcije precizno izreže svaku gredu, stoga su
            skeletne kuće danas još čvršće i, poput svojih prethodnika, stoje po
            nekoliko generacija.
          </p>
          <img src={SkeletnaGradnja} alt="skeletna gradnja" />
        </div>
        <div className="column flex">
          <img src={SkeletnaGradnja1} alt="skeletna gradnja" />
        </div>
        <h1 className="headline pbig">Tok gradnje na gradilištu</h1>
        <div className="column">
          <p>
            Montaža ovakve skeletne kuće izvodi se na licu mjesta, na građ.
            parceli. Od Vas se samo traži glavni ili idejni projekt u nekom CAD
            programu ili na papiru. Naši ljudi zatim pripreme izvedbeni projekat
            sa svim detaljima.
          </p>
          <p>
            CNC računalno upravljani stroj, temeljen na skeletnim kosturnim
            planovima, obavlja precizno rezanje drva koje naši monteri grade na
            mjestu kao lego kocke. Tako dobivaju kostur ili skelet kuće. Na
            jednoj strani kostura stavljamo ploču od drvenih vlakana, a na drugu
            paropropusnu OSB 3 ploču. Celulozna izolacija se strojno ugrađuje
            unutar skeleta kuće. Na unutarnjoj strani postoji samo instalacijski
            kanal, jer instalacije nisu predviđene unutar skeleta, već unutar
            toplinske ovojnice. To je korisno jer paropropusna ploča(OSB 3)
          </p>
          <p>
            ostaje neoštećena, a dodatno nam omogućuje da napravimo moguće
            promjene u instalaciji ako bismo je kasnije odlučili prenamjeniti.
          </p>
        </div>
        <div className="column">
          <img src={SkeletnaStart} alt="Skeletna gradnja - početak gradnje" />
        </div>

        <ReactCompareImage
          leftImage={SeverinBefore}
          rightImage={SeverinAfter}
        />
        <h1 className="headline pbig">
          Izvrsna sigurnost protiv požara, potresa i oluje
        </h1>
        <div className="column">
          <p className="end">
            Neopravdan je strah da skeletna kuća ne može podnjeti oluju. Dakle,
            u slučaju uragana i potresa, nudi visoku razinu sigurnosti. Pored
            ploča koje joj daju i statiku, skeletne kuće sadrže kosnike i
            križeve za kose sile. Drveni spojevi konstrukcije su obrađeni CNC
            obradom, sjedaju jedan u drugi te nisu potrebni dodatni vinkli za
            spajanje. Takvi spojevi pojačavaju sigurnost skeletne kuće od
            potresa. Skeletne kuće su same po sebi također sigurne od požara.
            Kostur kuće traje dugo, jer drvo gori polako i polako gubi teret. U
            slučaju zidanih armiranih kuća, čelik se tali te beton puca.
          </p>
          <img src={SkeletnaRep} alt="Skelenata gradnja - rep" />
        </div>
        <div className="column">
          <img src={SkeletnaKriz} alt="Skeletna gradnja - križ" />
        </div>
      </div>
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
