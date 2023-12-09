import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";

const DrveneKuce = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Eko izolacije">
      <SubMenu data={ekoIzolacijaMenu} />

      <h1 className="headline">Drvene izolacije</h1>
      <div className="content-one-column">
        <p>
          Drvena izolacija, također poznata kao drvena vlakna izolacija, sve
          više postaje popularan izbor kao materijal za izolaciju u građevinskoj
          industriji. Evo nekoliko prednosti korištenja drvene izolacije:
        </p>
      </div>
      <div className="content-two-column pbig">
        <div className="column">
          <h3>Ekološka održivost</h3>
        </div>
        <div className="column">
          <p>
            Drvena izolacija proizvodi se od prirodnih drvenih vlakana, obično
            iz recikliranih drvenih komadića, piljevine i ostataka iz
            drvoprerađivačke industrije. Ova reciklirana priroda čini drvenu
            izolaciju ekološki prihvatljivom i održivom opcijom.
          </p>
        </div>
        <div className="column">
          <h3>Dobar izolator</h3>
        </div>
        <div className="column">
          <p>
            Drvena izolacija ima dobre termičke svojstva i može pružiti visoku
            razinu toplinske izolacije. Ova izolacija pomaže u održavanju
            željene temperature u zgradi tijekom cijele godine, smanjujući
            potrebu za grijanjem ili hlađenjem.
          </p>
        </div>
        <div className="column">
          <h3>Zvučna izolacija</h3>
        </div>
        <div className="column">
          <p>
            Drvena izolacija također ima dobre akustičke karakteristike, što
            znači da može pomoći u smanjenju buke i stvaranju tišeg i udobnijeg
            unutarnjeg okoliša.
          </p>
        </div>

        <div className="column">
          <h3>Regulacija vlažnosti</h3>
        </div>
        <div className="column">
          <p>
            Drvena izolacija ima sposobnost upijanja i otpuštanja vlage, što
            može pomoći u održavanju ravnoteže vlažnosti u prostoru. To može
            biti korisno u sprječavanju problema s kondenzacijom i plijesni.
          </p>
        </div>

        <div className="column">
          <h3>Jednostavna instalacija</h3>
        </div>
        <div className="column">
          <p>
            Drvena izolacija je relativno jednostavna za instalaciju, što može
            smanjiti troškove radne snage. Osim toga, ovaj materijal može se
            koristiti za različite dijelove zgrade, uključujući zidove, stropove
            i krovove.
          </p>
        </div>

        <div className="column">
          <h3>Dugovječnost</h3>
        </div>
        <div className="column">
          <p>
            Drvena izolacija može trajati dugo vremena bez gubitka svojih
            izolacijskih svojstava, što može smanjiti potrebu za čestom
            zamjenom.
          </p>
        </div>

        <div className="column">
          <h3>Niska emisija VOC-a</h3>
        </div>
        <div className="column">
          <p>
            Drvena izolacija obično ima nisku emisiju štetnih spojeva (VOC -
            Volatile Organic Compounds) koji mogu utjecati na kvalitetu zraka u
            zatvorenim prostorima.
          </p>
        </div>
        <div className="column">
          <h3>Lagana</h3>
        </div>
        <div className="column">
          <p>
            Drvena izolacija je relativno lagana i ne stvara dodatno opterećenje
            na strukturi zgrade.
          </p>
        </div>
      </div>
      <div className="content-one-column end">
        <p>
          Važno je napomenuti da je važno slijediti pravilne tehniku instalacije
          i osigurati da je drvena izolacija zaštićena od vlage kako bi se
          očuvala njezina funkcionalnost. Također, cijene drvene izolacije mogu
          varirati, a ponekad može biti skuplja od drugih vrsta izolacija.
          Međutim, njezine prednosti u smislu održivosti i energetske
          učinkovitosti čine je atraktivnom opcijom za mnoge građevinske
          projekte.
        </p>
      </div>
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
