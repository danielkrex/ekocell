import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";
import FasadeBkg from "../../../assets/images/ekocell-ecoiso-fasadne.png";
import PodneBkg from "../../../assets/images/ekocell-ecoiso-podne.png";
import GredeBkg from "../../../assets/images/ekocell-ecoiso-grede.png";
import InterijerBkg from "../../../assets/images/ekocell-ecoiso-interijer.png";
import VFasadeBkg from "../../../assets/images/ekocell-ecoiso-v-fasadne.png";

import steicoLogo from "../../../assets/images/steico-logo.png";
import agepanLogo from "../../../assets/images/agepan-logo.png";
import eggerLogo from "../../../assets/images/egger-logo.png";
import pavatexLogo from "../../../assets/images/pavatex-logo.png"

const DrveneKuce = () => {
  useLayoutEffect(() => { }, []);

  return (
    <Layout title="Eko izolacija">
      <SubMenu data={ekoIzolacijaMenu} />

      <h1>Drvene izolacije</h1>
      <SubMenu data={ekoIzolacijaMenu} />
      <p>
        Drvena izolacija sve je popularniji izbor za modernu građevinu zbog svojih ekoloških prednosti, termičkih i zvučnih svojstava te protupožarne sigurnosti. Proizvedena od recikliranih drvenih vlakana ili celuloze, ova prirodna opcija donosi ugodnu klimu u domove, smanjuje troškove energije te doprinosi održivom razvoju.
      </p>
      <a
        rel="noreferrer"
        href="/izgradnja/eko-izolacija/drvene-izolacije"
        className="greenButton"
      >
        Prednosti drvenih izolacija
      </a>
      <p>
        Prije nego što se odlučite za drvenu izolaciju, uvijek je dobro konzultirati se s profesionalcem kako biste bili sigurni da je to pravi izbor za vaše potrebe i uvjete gradnje. Slobodno nam se javite s vašim pitanjima na <a href="mailto:info@ekocell.hr">info@ekocell.hr</a>
      </p>
      <br />

      <h3>Brandovi drvenih ploča koje nudimo</h3>

      <div className="brand-box">
        <a
          rel="noreferrer"
          href="/izgradnja/eko-izolacija/steico"
        >
          <img src={steicoLogo} alt="steico logo" />
        </a>
        
        <a
          rel="noreferrer"
          href="/izgradnja/eko-izolacija/agepan"
        >
          <img src={agepanLogo} alt="agepan logo" />
        </a>
        
        <a
          rel="noreferrer"
          href="/izgradnja/eko-izolacija/egger"
        >
          <img src={eggerLogo} alt="egger logo" />
        </a>
        
        <a
          rel="noreferrer"
          href="/izgradnja/eko-izolacija/pavatex"
        >
          <img src={pavatexLogo} alt="pavatex logo" />
        </a>
      </div>

      <h3>Proizvodi u ponudi</h3>
      <div className="eko-boxes">
        <div className="eko-box">
          <img src={FasadeBkg} alt="Ekocell eco izolacije" />
          <h2 className="headline">FASADNE PLOČE</h2>
          <div className="eko-links">
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-protect"
              className="steico"
            >
              Steico <span>protect</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-duo-dry"
              className="steico"
            >
              Steico <span>duo dry</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/pavatex"
            >
              Pavatex Isolair Multi
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-special-dry"
              className="steico"
            >
              Steico <span>special dry</span>
            </a>
          </div>
        </div>
        <div className="eko-box">
          <img src={PodneBkg} alt="Ekocell eco izolacije" />
          <h2 className="headline">PODNE PLOČE</h2>
          <div className="eko-links">
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-base"
              className="steico"
            >
              Steico <span>base</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-floor"
              className="steico"
            >
              Steico <span>floor</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-therm"
              className="steico"
            >
              Steico <span>therm</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-ecosilent"
              className="steico"
            >
              Steico <span>eco silent</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-protect"
              className="steico"
            >
              Steico <span>protect</span>
            </a>
          </div>
        </div>
        <div className="eko-box">
          <img src={GredeBkg} alt="Ekocell eco izolacije" />
          <h2 className="headline">IZOLACIJA IZMEĐU DRVENIH/METALNIH GREDA</h2>
          <div className="eko-links">
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-flex036"
              className="steico"
            >
              Steico <span>flex 036</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/celulozna-izolacija"
            >
              Cleulozna izolacija ISOCELL
            </a>
          </div>
        </div>
        <div className="eko-box">
          <img src={InterijerBkg} alt="Ekocell eco izolacije" />
          <h2 className="headline">IZOLACIJSKE PLOČE ZA INTERIJERE</h2>
          <div className="eko-links">
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-internal"
              className="steico"
            >
              Steico <span>internal</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-base"
              className="steico"
            >
              Steico <span>base</span>
            </a>
          </div>
        </div>
        <div className="eko-box">
          <img src={VFasadeBkg} alt="Ekocell eco izolacije" />
          <h2 className="headline">IZOLACIJSKE PLOČE ZA VENTILIRANE FASADE</h2>
          <div className="eko-links">
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-universal-black"
              className="steico"
            >
              Steico <span>universal black</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-universal"
              className="steico"
            >
              Steico <span>universal</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija"
              className="steico"
            >
              Agepan THD
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-protect"
              className="steico"
            >
              Steico <span>special dry</span>
            </a>
            <a

              rel="noreferrer"
              href="/izgradnja/eko-izolacija/egger"
              className="steico"
            >
              Egger DHF
            </a>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
