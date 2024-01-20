import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";
import FasadeBkg from "../../../assets/images/ekocell-ecoiso-fasadne.png";
import PodneBkg from "../../../assets/images/ekocell-ecoiso-podne.png";
import GredeBkg from "../../../assets/images/ekocell-ecoiso-grede.png";
import InterijerBkg from "../../../assets/images/ekocell-ecoiso-interijer.png";
import VFasadeBkg from "../../../assets/images/ekocell-ecoiso-v-fasadne.png";

const DrveneKuce = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Eko izolacija">
      <SubMenu data={ekoIzolacijaMenu} />

      <div className="eko-boxes">
        <div className="eko-box">
          <img src={FasadeBkg} alt="Ekocell eco izolacije" />
          <h2 className="headline">FASADNE PLOČE</h2>
          <div className="eko-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-protect"
              className="steico"
            >
              Steico <span>protect</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-duo-dry"
              className="steico"
            >
              Steico <span>duo dry</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/pavatex"
            >
              Pavatex Isolair Multi
            </a>
            <a
              target="_blank"
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
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-base"
              className="steico"
            >
              Steico <span>base</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-floor"
              className="steico"
            >
              Steico <span>floor</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-therm"
              className="steico"
            >
              Steico <span>therm</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-ecosilent"
              className="steico"
            >
              Steico <span>eco silent</span>
            </a>
            <a
              target="_blank"
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
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-flex036"
              className="steico"
            >
              Steico <span>flex 036</span>
            </a>
            <a
              target="_blank"
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
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-internal"
              className="steico"
            >
              Steico <span>internal</span>
            </a>
            <a
              target="_blank"
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
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-universal-black"
              className="steico"
            >
              Steico <span>universal black</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-universal"
              className="steico"
            >
              Steico <span>universal</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija"
              className="steico"
            >
              Agepan THD
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="/izgradnja/eko-izolacija/steico#steico-protect"
              className="steico"
            >
              Steico <span>special dry</span>
            </a>
            <a
              target="_blank"
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
