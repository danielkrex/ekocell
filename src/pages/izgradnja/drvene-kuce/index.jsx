import React, { useLayoutEffect } from "react";
import Layout from "../../../layouts/IzgradnjaLayout";
import SubMenu from "../../../components/SubMenu";
import ReactCompareImage from "react-compare-image";
import { drveneKuceMenu } from "../../../content/pages-izgradnja";

import ZrakoTrajnost from "../../../assets/images/ekocell-zrakotjesnost.jpeg";
import SustavGrijanjaKuca from "../../../assets/images/ekocell-sustav-grijanja-kuca.jpeg";

import HorvatiBefore from "../../../assets/images/ekocell-kuca-horvati-01.jpg";
import HorvatiAfter from "../../../assets/images/ekocell-kuca-horvati-02.jpg";

const DrveneKuce = () => {
  useLayoutEffect(() => {}, []);

  return (
    <Layout title="Drvene montažne kuće">
      <SubMenu data={drveneKuceMenu} />
      <h1 className="headline">Zašto drvena gradnja?</h1>
      <div className="content-two-column">
        <div className="column">
          <ul>
            <li>
              <h4>Postižemo odličnu mikroklimu u prostoru</h4>
            </li>
            <li>
              <h4>Zaštita građevne konstrukcije</h4>
            </li>
            <li>
              <h4>Uz dobru izvedenost znatna ušteda</h4>
            </li>
            <li>
              <h4>Zaštita od vlage</h4>
            </li>
          </ul>
        </div>
        <div className="column">
          <img src={ZrakoTrajnost} alt="tehnologija" />
        </div>
        <div className="column">
          <p>
            Opredjeljenje za kuću je velika životna odluka. Da bi uistinu jedna
            kuća bila ‘ona prava’, pojedinac utroši puno energije, za otkrivanje
            podataka, ali to otvara više pitanja, možda i nesigurnosti. Dakle,
            potrebno je da dobro razmislite o tome s kime želite surađivati u
            tom važnom životnom projektu. Jedna od početnih dilema koja nastaje
            pri odabiru o izgradnji vlastitog doma je: “Da li izgraditi montažno
            ili klasično?”. Dakle, da li drvo ili cigla / beton.
          </p>
        </div>
        <div className="column">
          <p>
            Budući da ste na našoj stranici, vjerujem da je drvo najprikladniji
            materijal za stvaranje životnog prostora. To je organski materijal
            bez riječi usporedbe koja dotiče naša osjetila i kao takav je
            najbliži čovjeku – diše, miriše, radi, mjenja se…
          </p>
        </div>
      </div>
      <ReactCompareImage leftImage={HorvatiBefore} rightImage={HorvatiAfter} />
      <div className="content-one-column pbig">
        <p>
          Drvo, zajedno s kamenom i opekom koristi se u građevinske svrhe od
          vremena kada se čovjek počeo trajno nastanjivati i od kad su se počela
          pojavljivati prva jednostavna prebivališta. Nakon kratkog vremena,
          došlo je do industrijske revolucije, a time i korištenje novih,
          umjetnih materijala. U novije vrijeme drvo kao prirodni građevinski
          materijal opet je počeo dobivati značajniju ulogu u dizajnu. Sa svojim
          dobrim fizičkim svojstvima u izgradnji te mnogim aspektima, superioran
          je u odnosu na druge upotrebljive srodne materijale. Zbog mnogih
          prednosti u usporedbi s drugim građevinskim materijalima ponovno se
          povećala izgradnja drvenih objekata.želite surađivati u tom važnom
          životnom projektu. Jedna od početnih dilema koja nastaje pri odabiru o
          izgradnji vlastitog doma je: “Da li izgraditi montažno ili klasično?”.
          Dakle, da li drvo ili cigla / beton.
        </p>
      </div>
      <div className="content-two-column pbig end">
        <div className="column">
          <h3>Kvaliteta života</h3>
        </div>
        <div className="column">
          <p>
            Kvaliteta života u drvenoj konstrukciji, ukoliko se pravilno izvede
            i koristi prirodni i paropropusni materijali (tj. oni koji dišu)
            vrlo je visoka. Visoka kvaliteta prirodnih materijala osim života u
            zdravoj mikroklimi omogućuje smanjeni gubitak topline, minimalnu
            potrošnju energije, a time i manje troškove grijanja.
          </p>
          <p>
            A budući da su na kraju sve odluke vezane uglavnom za financije, to
            je svakako važno podataka! Stoga već u početku svakako ima smisla
            razmišljati o budućim troškovima svoje kuće. Niska potrošnja
            energije u montažnim drvenim kućama je i stoga jak argument za puno
            ljudi. To je značajna prednost u dugoročnoj uštedi. Prednost drvenih
            objekata koje svakako vrijedi spomenuti je to da se drvena gradnja
            odnosi na ‘suhu’ gradnju. U zidanom objektu tzv. ‘mokra gradnja’,
            građevinska ljepila u kombinaciji s vodom isparavaju. Vrijeme
            izgradnje se upravo zbog isušivanja zidova i betonskih deka
            povećava; u različitim fazama izgradnje zahtijeva određeni interval.
          </p>
        </div>
        <div className="column">
          <h3>Potres</h3>
        </div>
        <div className="column">
          <p>
            Osim dobre otpornosti na vlagu, jedna od najvažnijih prednosti
            drvene konstrukcije seizmička sigurnost (sigurnost od potresa).
          </p>
          <p>
            Pravilno dizajnirane drvene skeletne kuće puno bolje reagiraju na
            seizmička opterećenja nego zidane, jer drvo zbog svoje elastičnosti
            bolje odgovara na potres tla od klasičnog betona. Ona je
            fleksibilna, u slučaju potresa ne poremećuje drvenu konstrukciju.
            Zbog toga i zbog niske vlastite težine u usporedbi s njenim
            kapacitetom drveta je korisna i za gradnju objekata u područjima sa
            smanjenom nosivosti tla, kao i za potresna područja.
          </p>
        </div>
        <div className="column">
          <h3>Požar</h3>
        </div>
        <div className="column">
          <p>
            Što je s požarom?”, Pitanje je koje se odnosi na mnoge potencijalne
            vlasnike drvenih kuća. Istina je da je drvo organski zapaljiva tvar,
            ali u usporedbi s betonom i čelikom stekne veće požarno opterećenje.
          </p>
          <p>
            Drvo gori polako i ravnomjerno. Brzina gorenja može se precizno
            odrediti – tipična procjena sagorijevanja je od 0,6 mm / min, s
            obzirom na dimenzije drvene konstrukcije. Elementi drva polako
            sagorjevaju od površine prema unutrašnjosti, što sprječava pristup
            kisika drvetu. U požaru zadržava potpuni kapacitet nosivosti te ne
            mijenja oblik, stoga ne uzrokuje prijenos opterećenja na ostale
            strukturne elemente, što je uglavnom uzrok neuspjeha strukture. Osim
            toga pri spaljivanju drveta ne stvaraju se otrovni plinovi, koji su
            vodeći uzrok smrti u požarima.
          </p>
        </div>
        <div className="column">
          <h3>Cijena izgradnje</h3>
        </div>
        <div className="column">
          <p>
            Što je s cijenom? U zidanoj gradnji financiranje se može odvijati
            postepeno, za razliku od drvene gradnje gdje je potrebno imati na
            raspolaganju sva sredstva odmah. Je li to uistinu tako? Apsolutno,
            iako to često čuju, baš taj podatak mnoge ljude nepotrebno odvraća
            od izgradnje drva.
          </p>
          <img src={SustavGrijanjaKuca} alt="Sustav grijanja kuca" />
          <p>
            Ako gledamo realno uspoređivanje skeletne i zidane kuće bez obzira
            na cijenu tijekom faze izgradnje: temelj kuće u skeletnim jeftiniji
            je zbog manje težine. Krov je isti (drveni) u obje kuće, potkrovlje
            je nešto skuplje zbog količine izolacije koju ugrađujemo (govorimo o
            niskoenergetskim potkrovljima). Fasada je u skeletnom cca. 10%
            skuplja. Sam kostur kuće više je izoliran i s minimalnom količinom
            toplinskih mostova (gdje se gubi najviše topline zimi).
          </p>
          <p>
            No, kao što smo već istaknuli – troškove povezane s kućom, ne
            smijemo računati samo u fazi izgradnje. U svakom slučaju, to vrijedi
            s obzirom na omjer početnog ulaganja i očekivanih budućih troškova
            energije. U našem projektu drvene kuće, što je dobar niskoenergetski
            objekat, radi se o značajnim uštedama.
            <br /> Drvena skeletna gradnja preživjela je gotovo tisuću godina i
            još uvijek se smatra modernom. Jezgra je općepoznata i zdrava –
            drvo, zajedno s drugim prirodnim materijalima.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DrveneKuce;

export const Head = () => <title>Drvene Kuće</title>;
