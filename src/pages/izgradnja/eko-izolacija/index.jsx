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
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e01749719f4e85646/STEICO_Installation_instructions_Facade_insulation_en_i.pdf"
              className="steico"
            >
              Steico <span>protect</span>
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e0174960f58cb1943/STEICOduo_dry_en_i.pdf"
              className="steico"
            >
              Steico <span>duo dry</span>
            </a>
            <a
              target="_blank"
              href="https://lotus.soprema.fr/www/reftechsop.nsf/($AllByUNID)/82B86054C2D1FABAC12588320023C11A/$File/TDS-NE-INSEU0039.a-EN%20ISOLAIR%20MULTI.pdf"
            >
              Pavatex Isolair Multi
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e0174960f8d140710/STEICOspecial-dry_en_i.pdf"
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
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e01749c602cbf7c94/STEICOstandard_nature_en_i.pdf"
              className="steico"
            >
              Steico <span>base</span>
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e017496e8a94062e9/STEICOfloor_en_i.pdf"
              className="steico"
            >
              Steico <span>floor</span>
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e017496e8dc5949b5/STEICOtherm_SD_en_i.pdf"
              className="steico"
            >
              Steico <span>therm</span>
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/en/products/insulation/underlay/impact-sound-insulation/steicoecosilent"
              className="steico"
            >
              Steico <span>eco silent</span>
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e0174971a1e7421e2/STEICOprotect_dry_en_i.pdf"
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
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097ea4b73a017f3070aba80c80/STEICOflex_036_en_i.pdf"
              className="steico"
            >
              Steico <span>flex 036</span>
            </a>
            <a
              target="_blank"
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
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e01749c3c49bb7b91/STEICOinternal_en_i.pdf.pdf"
              className="steico"
            >
              Steico <span>internal</span>
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b69b84b29d4a01850610a21e5fbf/STEICOinternal_en_i.pdf.pdf"
              className="steico"
            >
              Steico <span>install</span>
            </a>
          </div>
        </div>
        <div className="eko-box">
          <img src={VFasadeBkg} alt="Ekocell eco izolacije" />
          <h2 className="headline">IZOLACIJSKE PLOČE ZA VENTILIRANE FASADE</h2>
          <div className="eko-links">
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e017496484efc6d66/STEICOuniversal_black_en_i.pdf"
              className="steico"
            >
              Steico <span>universal black</span>
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e0174960fa32d31d3/STEICOuniversal_en_i.pdf"
              className="steico"
            >
              Steico <span>universal</span>
            </a>
            <a
              target="_blank"
              href="/izgradnja/eko-izolacija"
              className="steico"
            >
              Agepan THD
            </a>
            <a
              target="_blank"
              href="https://www.steico.com/fileadmin/user_upload/importer/downloads/4028b6097384810e0174960f8d140710/STEICOspecial-dry_en_i.pdf"
              className="steico"
            >
              Steico <span>special dry</span>
            </a>
            <a
              target="_blank"
              href="https://www.egger.com/get_download/60c10c02-ddbf-49ba-98a8-0c621c4f9efb/Flyer_DHF_2_pages.pdf"
              className="steico"
            >
              Egger DHF
            </a>
          </div>
        </div>
      </div>

      <div className="devider"></div>

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

      <div className="devider"></div>

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

      <div className="devider"></div>

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

      <div className="devider"></div>

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
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
