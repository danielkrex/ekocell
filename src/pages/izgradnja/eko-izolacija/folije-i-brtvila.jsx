import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import { ekoIzolacijaMenu } from "../../../content/pages-izgradnja";

import BrtvilaImage from "../../../assets/images/parne-ovire-in-zapore.jpg"

import BrtvilaProd1 from "../../../assets/images/ekocell-folije-1.png";
import BrtvilaProd2 from "../../../assets/images/ekocell-folije-2.png";
import BrtvilaProd3 from "../../../assets/images/ekocell-folije-3.png";

import BrtvilaProdPdf1 from "../../../assets/pdf/ISOCELL--Eko-natur-dampfbremse-Technical-Info.si.pdf"
import BrtvilaProdPdf2 from "../../../assets/pdf/ISOCELL--Airstop-dampfbremse-Technical-Info.si.pdf"
import BrtvilaProdPdf3 from "../../../assets/pdf/ISOCELL--Airstop-1500-Technical-Info.si.pdf"

const DrveneKuce = () => {
    useLayoutEffect(() => { }, []);

    return (
        <Layout title="Folije i Brtvila">
            <SubMenu data={ekoIzolacijaMenu} />
            <h1 className="headline">Folije i Brtvila</h1>
            <div className="content-one-column">
                <p>
                    Svi znamo da hladan zrak može zadržati mnogo manje vlage od toplog zraka. To najviše dolazi do izražaja ljeti, kada izvadimo hladno piće iz hladnjaka i na njemu se nakupe kapljice vode – kondenzat. To je zbog kontakta toplog vanjskog zraka s hladnom bocom koja hladi zrak i uklanja višak vlage iz njega. Promatramo li zimi presjek vanjskog zida ili krova, s unutarnje strane objekta imamo normalnu temperaturu stanovanja, a s vanjske je znatno niža, a samim time niža je i vlažnost zraka.
                </p>
                <p>
                    U prirodi je pravilo da se sve izjednačava, tj. odakle ima više nečega ide tamo gdje ga ima manje, tj. i toplina i vlaga zraka prodiru iz toplog u hladno. Zbog postupnog hlađenja toplog vlažnog zraka dok prolazi kroz strukturu, u nekom će trenutku doći do onoga što je poznato kao zasićenost vlagom i početi kondenzirati.
                </p>
                <p>
                    Ovaj fizikalni fenomen razlog je za dva različita pristupa gradnji: difuzijsko zatvorenu i difuzijsko otvorenu gradnju. Ljudi su od davnina gradili prirodnim materijalima koji su u pravilu više ili manje paropropusni. Ali sve do sredine prošlog stoljeća nije bilo zahtjeva za energetskom učinkovitošću u građevinarstvu, budući da cijena energije (obično drva za ogrjev) nije bila visoka.
                </p>
            </div>
            <div className="content-two-column pbig">
                <div className="column">
                    <p className="end">
                        Međutim, urbanizacijom stanovništva i poskupljenjem energenata to se promijenilo te su se počele ugrađivati sve veće količine odnosno debljine izolacije. Budući da nije bilo iskustva i znanja o difuzijski otvorenim konstrukcijama s puno izolacije, poslao je novi standard za jednostavno postavljanje parne brane s unutarnje strane konstrukcije, poput PVC folije. Parna brana u potpunosti onemogućuje prolaz vlage u konstrukciju i problem kondenzacije je riješen. Ovo rješenje, međutim, sa sobom je donijelo i negativnu posljedicu - ugradnjom parne brane značajno se promijenila ili pogoršala kvaliteta stanovanja i životna klima jer više nije bilo nakupljanja vlage u zidovima koja bi regulirala vlagu. u sobi.
                        <br /><br />
                        Tek je krajem 20. stoljeća građevinska struka dovoljno istražila ovu vrstu gradnje i postavila nove standarde da sa sigurnošću možemo projektirati difuzijsko otvorene, visokoizolirane konstrukcije. Da bi ovakva konstrukcija dobro funkcionirala nije potrebna parna brana već parna brana. Razlika između jednih i drugih je, kao što se već iz riječi vidi: barijera u potpunosti onemogućuje prolaz, dok je prepreka samo prepreka, tj. propušta kontrolirano. Pojednostavljeno pravilo za određivanje parne brane u građevinarstvu je da je odnos otpora prolazu vodene pare (Sd vrijednost) između unutarnje i vanjske obloge 5 prema 1.
                    </p>
                </div>
                <div className="column">
                    <img src={BrtvilaImage} alt="brtvila ekocell" />
                </div>
            </div>

            <h3>Proizvodi u ponudi</h3>
            <div className="productHolder">
                <h3>EKO NATUR parna brana</h3>
                <img src={BrtvilaProd1} alt="EKO NATUR" />
                <div>
                    <h4>Tehničke specifikacije</h4>
                    <ul>
                        <li>Deklarirana Sd-vrijednost: 6,45 m</li>
                        <li>Težina: cca. 180 g/m2</li>
                        <li>Debljina: 0,25 mm</li>
                        <li>Otpornost na daljnje kidanje: 80-100N</li>
                        <li>Maksimalna vlačna čvrstoća: 480N / 50mm</li>
                        <li>Format: širina role 1 m, dužina 50 m, ukupno 50 m2</li>
                        <li>Korišteni materijali: celulozni flis spojen na sloj kraft papira; intermedijarna membrana otporna na trganje</li>
                    </ul>
                    <a
                        className="downloadBtn"
                        target="_blank"
                        href={BrtvilaProdPdf1}
                    >
                        Tehnički list
                    </a>
                </div>
            </div>


            <div className="productHolder">
                <h3>AIR STOP parna brana</h3>
                <img src={BrtvilaProd2} alt="EKO NATUR" />
                <div>
                    <h4>Tehničke specifikacije</h4>
                    <ul>
                        <li>Deklarirana Sd-vrijednost: 18m</li>
                        <li>Težina: cca. 90 g/m2</li>
                        <li>Debljina: 0,2 mm</li>
                        <li>Istezanje: 30%</li>
                        <li>Otpornost na daljnje kidanje: 250 N</li>
                        <li>Maksimalna vlačna čvrstoća: 200 N/50 mm</li>
                        <li>Format: širina role 1,5 m, dužina 50 m, ukupna 75 m2</li>
                    </ul>
                    <a
                        className="downloadBtn"
                        target="_blank"
                        href={BrtvilaProdPdf2}
                    >
                        Tehnički list
                    </a>
                </div>
            </div>


            <div className="productHolder">
                <h3>AIRSTOP-1500 parna brana</h3>
                <img src={BrtvilaProd3} alt="EKO NATUR" />
                <div>
                    <h4>Tehničke specifikacije</h4>
                    <ul>
                        <li>Deklarirana Sd-vrijednost: 1500 m</li>
                        <li>Težina: cca. 270 g/m2</li>
                        <li>Debljina: 0,8 mm</li>
                        <li>Istezanje: 20%</li>
                        <li>Otpornost na daljnje kidanje: cca. 440 N</li>
                        <li>Maksimalna vlačna čvrstoća: cca. 440 N / 50 mm</li>
                        <li>Korišteni materijali: LDPE spojna folija s navlakom od flisa</li>
                        <li>Format: rola širine 1,5 m, dužine 50 m, ukupne površine 75 m2</li>
                    </ul>
                    <a
                        className="downloadBtn"
                        target="_blank"
                        href={BrtvilaProdPdf3}
                    >
                        Tehnički list
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
