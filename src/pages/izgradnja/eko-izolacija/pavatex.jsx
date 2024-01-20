import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";

const PavatexPage = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Eko izolacija">
      <SubMenu data={ekoIzolacijaMenu} />
      <div className="content-one-column">
        <h1 className="headline" id="pavatex">
          Pavatex
        </h1>
        <h3>Višenamjenska ploča od drvenih vlakana s povećanom izolacijom</h3>
        <p>
          PAVATEX Combi su višenamjenske izolacijske ploče manje gustoće, koje
          se koriste za ventilirane krovne i fasadne konstrukcije kao i za
          kontaktne fasade. Njihova čvrstoća osigurava da se mogu montirati na
          skeletne ili okvirne, kao i na masivne konstrukcije. Imaju izvrsna
          svojstva toplinske izolacije uz zadržavanje sposobnosti akumulacije
          velike topline i posljedično osiguravaju visoki fazni pomak toplinskog
          prijenosa, pa su posebno pogodna za građevine u kojima je potrebna
          najveća moguća izolacija s vanjske strane konstrukcije.
        </p>
        <p>
          <strong>Prednosti</strong>
          <ul>
            <li>izvrsna zaštita od ljetnih vrućina – faznog pomaka</li>
            <li>
              zbog jezika i utora na nagibima većim od 18 stupnjeva, štite od
              provale kiše
            </li>
            <li>do 4 tjedna pogodan kao krov u hitnim slučajevima</li>
            <li>smanjiti strukturne toplinske mostove</li>
            <li>posebno otvoren za difuziju</li>
            <li>ekološki, ekološki prihvatljiv, podesiv za recikliranje</li>
          </ul>
        </p>
        <p>
          <strong>TEHNIČKI PODACI MATERIJALA:</strong>
          <ul>
            <li>Deklarirana toplinska vodljivost λ: 0,041 W / mK</li>
            <li>Gustoća: cca. 145 Kg / m3</li>
            <li>Specifični toplinski kapacitet: 2.100 J / kg</li>
            <li>Otpornost vodene pare µ: 3</li>
            <li>Tlačna čvrstoća:> 100 kPa</li>
            <li>Vučna čvrstoća okomito na ploču:> 10kPa</li>
            <li>Klasa požara prema DIN13501-1: klasa E</li>
            <li>Klasa požara prema DIN 4102: B2</li>
            <li>Format: pero i utor</li>
            <li>Način proizvodnje: suhi princip</li>
            <li>Korišteni materijali: drvena vlakna, PUR smole, parafin</li>
          </ul>
        </p>
      </div>
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default PavatexPage;

export const Head = () => <title>Ekocell - Pavatex proizvodi</title>;
