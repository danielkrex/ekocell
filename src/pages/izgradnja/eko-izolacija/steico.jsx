import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";

const DrveneKuce = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Eko izolacija">
      <SubMenu data={ekoIzolacijaMenu} />

      <div className="content-one-column">
        <h1 className="headline" id="pavatex">
          STEICO
        </h1>
        <h3>
          Ploče od drvenih vlakana za podnu izolaciju povećane tlačne čvrstoće
        </h3>
        <p>
          STEICO base ploče od drvenih vlakana razvijene su kao izolacijske
          ploče koje se mogu koristiti i za suho sastavljene estrihe i za
          klasične mokre estrihe, gdje su osigurana veća opterećenja poda.
          Izrađuju se takozvanim mokrim postupkom gdje se drvena vlakna ne suše,
          već se posebnim postupkom spajaju vlastitim smolama u posebno čvrstu,
          stabilnu i gustu ploču. Zbog veće gustoće, STEICO base ploče nude vrlo
          visoku sposobnost skladištenja topline s niskom toplinskom vodljivošću
          i istovremeno pružaju visoku tlačnu čvrstoću. <br /> <br />
          Instalacija je izuzetno jednostavna, jer se ploče jednostavno polažu
          na unaprijed pripremljenu nosivu ploču u potrebnoj debljini, a preko
          nje se postavlja građevinska ploča za polaganje završne podne obloge,
          poput OSB-a. Ako se koriste klasični mokri estrihi, ploče od drvenih
          vlakana STEICO base prekrivaju se odgovarajućom zaštitnom folijom, a
          preko njih se, kao u klasičnoj izolaciji, postavlja mokri estrih.
        </p>
        <p>
          <strong>Prednosti</strong>
          <ul>
            <li> izrazito visoka tlačna čvrstoća 150 kPa </li>
            <li>upotreba pri svim vrstama estriha – mokri i suhi</li>
            <li>
              upotreba kao izolacijska ploča pri upotrebi asfaltnih estriha
            </li>
            <li>izvrsna termoizolacijska svojstva</li>
            <li>ekološka</li>
            <li>jednostavno recikliranje</li>
          </ul>
        </p>
        <p>
          <strong>TEHNIČKI PODACI MATERIJALA:</strong>
          <ul>
            <li>Deklarirana toplinska vodljivost λ: 0,048 W / mK</li>
            <li>Gustoća: cca. 250 Kg / m3</li>
            <li>Specifični toplinski kapacitet: 2.100 J / kg</li>
            <li>Otpornost vodene pare µ: 5</li>
            <li>Tlačna čvrstoća:> 150 kPa</li>
            <li>Vučna čvrstoća okomito na ploču:> 10kPa</li>
            <li>Klasa požara prema DIN13501-1: klasa E</li>
            <li>Klasa požara prema DIN 4102: B2</li>
            <li>Format: ravni rub</li>
            <li>Način proizvodnje: mokri princip</li>
            <li>Korišteni materijali: drvena vlakna, veziva</li>
          </ul>
        </p>
      </div>

      <div className="steico-item" id="steico-protect">
        <div className="title">
          <h2>
            STEICO<i>protect</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/e/8/csm_Product_Image_Total_STEICOprotect_RGB_01.tif_web_c5c925dc45.jpg"
            alt="steico protect"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/etics/steico-etics-timber/steicoprotect#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/etics/steico-etics-timber/steicoprotect#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">
            Izolacijska ploča od drvenih vlakana za ETICS
          </p>
          <p className="light-description">
            Robusna izolacijska ploča od drvenih vlakana za fasade s ekološkom
            žbukom
          </p>
          <ul>
            <li>Posebno robustan i izdržljiv</li>
            <li>Izvrsna izolacijska svojstva zimi i ljeti</li>
            <li>Vodoodbojan i paropropusn za robusne konstrukcije</li>
            <li>Veliki izbor formata i debljina od 40 do 240 mm</li>
            <li>Prikladno za zračnu izolaciju od 40 mm debljine</li>
            <li>
              Dostupan u pločama velikog formata za izgradnju izvan gradilišta
            </li>
            <li>Dostupan opsežan katalog građevinskih detalja</li>
            <li>
              Proizvedeno od svježeg mekog drva - održiva zaštita klime kroz
              skladištenje CO2
            </li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-duo-dry">
        <div className="title">
          <h2>
            STEICO<i>duo dry</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/1/8/csm_Product_Image_Total_STEICOduo_dry_RGB.tif_web_48af52c18d.jpg"
            alt="steico duo dry"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/etics/steico-etics-timber/steicoduo-dry#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/etics/steico-etics-timber/steicoduo-dry#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">Kombinacija obloge i žbuke</p>
          <p className="light-description">
            Kombinirana obloga i žbuka izrađena od prirodnih drvenih vlakana
          </p>
          <ul>
            <li>
              Trenutna zaštita od vremenskih uvjeta s provjerenim STEICO T & G
              profilom
            </li>
            <li>
              Izolacijska ploča od drvenih vlakana koja nosi žbuku za
              STEICOsecure Timber ETICS
            </li>
            <li>Vodoodbojan i paropropustan za robusne konstrukcije</li>
            <li>
              Izvrsna izolacijska svojstva ljeti i zimi i dobra zvučna izolacija
            </li>
            <li>Prikladno za zračnu izolaciju od 40 mm debljine</li>
            <li>Vrsta pločice: UDP-A, pogodna kao privremeni pokrov</li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-special-dry">
        <div className="title">
          <h2>
            STEICO<i>special dry</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/4/3/csm_Product_Image_Total_STEICOspecial_dry_RGB_60.tif_web_d8407d6d62.jpg"
            alt="steico special dry"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/insulation-systems-for-roofs/sarking-and-sheathing-boards/steicospecial-dry#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/insulation-systems-for-roofs/sarking-and-sheathing-boards/steicospecial-dry#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">Ploča za oblaganje</p>
          <p className="light-description">
            Izolacijske ploče iz suhog postupka debljine do 200 mm
          </p>
          <ul>
            <li>
              Posebno niska toplinska vodljivost, odlična zaštita od hladnoće
            </li>
            <li>Smanjuje toplinske mostove</li>
            <li>
              posebno paropropusna za povećanu sigurnost konstrukcije kod
              renoviranja
            </li>
            <li>Ekstra debele ploče posebno za obnovu</li>
            <li>
              Može se koristiti zajedno sa STEICO ai-injected izolacijskim
              sustavima
            </li>
            <li>Ekološki, ekološki prihvatljiv i recikliran poput drva</li>
            <li>
              Drvena vlaknasta ploča koja se može gipsati za vanjsku upotrebu
            </li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-base">
        <div className="title">
          <h2>
            STEICO<i>base</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/4/1/csm_Product_Image_Total_STEICOisorel_RGB.tif_web_513bb9e297.jpg"
            alt="steico base"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/wood-based-materials/panel-materials/steicoisorel#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/wood-based-materials/panel-materials/steicoisorel#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">
            Standardna ploča od drvenih vlakana
          </p>
          <p className="light-description">
            višenamjenska kruta izolacijska ploča
          </p>
          <ul>
            <li>Visoka tlačna čvrstoća</li>
            <li>Visoka zaštita od topline</li>
            <li>Izvrsna izolacijska svojstva</li>
            <li>Idealna kombinacija za suhi i mokri estrih visoke nosivosti</li>
            <li>Prikladno za sustave tekućih estriha</li>
            <li>
              Ekološki i ekološki prihvatljiv te se može reciklirati poput
              prirodnog drva
            </li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-floor">
        <div className="title">
          <h2>
            STEICO<i>floor</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/4/6/csm_Product_Image_Total_STEICOfloor_RGB_01.tif_web_9c2aea1f0f.jpg"
            alt="steico standard nature"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/wood-based-materials/panel-materials/steicoisorel#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/wood-based-materials/panel-materials/steicoisorel#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">Sustav podne izolacije</p>
          <p className="light-description">
            Instalacijski sustav za spajanje podnih ploča na plivajućem podu
          </p>
          <ul>
            <li>
              Izvrsno smanjuje udarnu buku i poboljšava akustiku prostorije
            </li>
            <li>Izvrsna izolacijska svojstva</li>
            <li>
              Visok kapacitet sorpcije doprinosi uravnoteženoj unutarnjoj klimi
            </li>
            <li>Ekološki, održivi i reciklirajući poput prirodnog drva</li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-therm">
        <div className="title">
          <h2>
            STEICO<i>therm</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/3/1/csm_Product_Image_Total_STEICOtherm_SD_RGB_01.tif_web_45e455b2d2.jpg"
            alt="steico standard nature"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/wood-based-materials/panel-materials/steicoisorel#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/wood-based-materials/panel-materials/steicoisorel#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">Izolacija od udarne buke</p>
          <p className="light-description">
            Ekološka zvučna izolacija za suhe ili mokre estrihe
          </p>
          <ul>
            <li>Izolacija od udarne buke od drvenih vlakana</li>
            <li>Izolacija za betonske ili drvene podove</li>
            <li>Prikladno za suhe ili mokre estrihe</li>
            <li>Brzo i jednostavno za polaganje</li>
            <li>Ekološki prihvatljiv, može se reciklirati</li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-ecosilent">
        <div className="title">
          <h2>
            STEICO<i>ecosilent</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/5/1/csm_Product_Image_Total_STEICOunderfloor_RGB_01.tif_web_0696d96d45.jpg"
            alt="steico standard nature"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/underlay/impact-sound-insulation/steicoecosilent#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/underlay/impact-sound-insulation/steicoecosilent#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">Podloga za laminat i parket</p>
          <p className="light-description">
            Podloga za laminat i parket otporna na pritisak od prirodnih drvenih
            vlakana
          </p>
          <ul>
            <li>Pouzdana zaštita od padajućih predmeta</li>
            <li>Postiže ravnu završnu površinu</li>
            <li>Idealno za sustave podnog grijanja</li>
            <li>
              Visoka tlačna otpornost od 15 t/m2 – štiti od loma spojeva na klik
              sustavima
            </li>
            <li>Izdržljiv zahvaljujući robusnoj strukturi vlakana</li>
            <li>Brzo i jednostavno za postavljanje i rukovanje</li>
            <li>Doprinosi zdravoj unutarnjoj klimi</li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-flex036">
        <div className="title">
          <h2>
            STEICO<i>flex 036</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/6/7/csm_Product_Image_Total_STEICOflex_036_RGB.tif_web_25e3679ec8.jpg"
            alt="steico standard nature"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/insulation-between-studs/flexible-thermal-insulation/steicoflex-036#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/insulation-between-studs/flexible-thermal-insulation/steicoflex-036#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">
            Fleksibilna toplinska izolacija od drva
          </p>
          <p className="light-description">
            Ekološki prihvatljiv izolacijski sustav od prirodnih drvenih vlakana
          </p>
          <ul>
            <li>Izvrsna izolacijska svojstva zimi</li>
            <li>Izvrsna zaštita od topline ljeti</li>
            <li>Paropropustan za zdravu unutarnju okolinu</li>
            <li>
              Proizvedeno od svježeg mekog drva - održiva zaštita klime kroz
              skladištenje CO2
            </li>
            <li>Trenje se uklapa u susjedne komponente</li>
            <li>podržava ekološki prihvatljivo životno okruženje</li>
            <li>
              Ekološki i ekološki prihvatljiv, u potpunosti se može reciklirati
            </li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-internal">
        <div className="title">
          <h2>
            STEICO<i>internal</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/7/0/csm_Product_Image_Total_STEICOinternal_RGB.tif_web_f33374b9b9.jpg"
            alt="steico standard nature"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/insulation-between-studs/flexible-thermal-insulation/steicoflex-036#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/insulation-between-studs/flexible-thermal-insulation/steicoflex-036#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">
            Unutarnja izolacija od drvenih vlakana
          </p>
          <p className="light-description">
            Ekološka izolacijska ploča za unutarnju izolaciju obnove zidanih i
            tradicionalnih drvenih konstrukcija
          </p>
          <ul>
            <li>
              Ekološki prihvatljiva unutarnja izolacija od prirodnog mekog drva
            </li>
            <li>
              Idealan za obnovu zidanih i tradicionalnih drvenih konstrukcija
            </li>
            <li>
              Izvrsna kontrola kondenzacije – napredna izvedba korištenjem
              inteligentne građevinske fizike
            </li>
            <li>Može se koristiti bez dodatne parne brane</li>
            <li>Vodena para otvorena za zdravu unutarnju klimu</li>
            <li>Ekološki i reciklirajući bez utjecaja na okoliš</li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-universal-black">
        <div className="title">
          <h2>
            STEICO<i>universal black</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/1/7/csm_Product_Image_Total_STEICOuniversal_black_RGB.tif_web_33b277cd9e.jpg"
            alt="steico universal black"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/ventilated-facade-insulation-systems/curtain-wall-with-joints/steicouniversal-black#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/ventilated-facade-insulation-systems/curtain-wall-with-joints/steicouniversal-black#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">
            Bitumenom impregniran za otvorene obloge
          </p>
          <p className="light-description">
            Crna zidna ploča za zavjese s spojevima
          </p>
          <ul>
            <li>Bitumenizirana zidna ploča za otvorene sustave oblaganja</li>
            <li>Zaštita od vremenskih uvjeta bez membrane</li>
            <li>Proizvedeno mokrim postupkom</li>
            <li>ca. 260 kg/m3. λD 0,050</li>
          </ul>
        </div>
      </div>

      <div className="devider"></div>

      <div className="steico-item" id="steico-universal">
        <div className="title">
          <h2>
            STEICO<i>universal</i>
          </h2>
        </div>
        <div className="left">
          <img
            src="https://www.steico.com/fileadmin/_processed_/0/f/csm_Product_Image_Total_STEICOuniversal_RGB_01.tif_web_a1e492fa0a.jpg"
            alt="steico universal"
          />
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/insulation-systems-for-roofs/sarking-and-sheathing-boards/steicouniversal#characteristics"
          >
            Tehnički list
          </a>
          <a
            target="_blank"
            href="https://www.steico.com/en/products/insulation/insulation-systems-for-roofs/sarking-and-sheathing-boards/steicouniversal#dimensions"
          >
            Dimenzije
          </a>
        </div>
        <div className="middle">
          <p className="short-description">
            Ploča za oblaganje i za kosi krov i za zidne konstrukcije
          </p>
          <p className="light-description">Izolacijska ploča za novogradnju</p>
          <ul>
            <li>Ekološki, proizvodnja bez dodatnih ljepila</li>
            <li>Izvrsna zaštita od topline ljeti</li>
            <li>Smanjuje toplinske mostove</li>
            <li>
              Može se koristiti zajedno sa STEICO zračno ubrizganom izolacijom
              od 35 mm debljine
            </li>
            <li>
              Nije potrebna dodatna podložna membrana za nagib krova od ≥ 16°
            </li>
            <li>Ekološki prihvatljiv i može se reciklirati poput drveta</li>
          </ul>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Ekocell - Steico proizvodi</title>;
