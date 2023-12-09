import React, { useEffect } from "react";
import "../style/o-nama.scss";
import Navigation from "../components/Navigation";
import onamaImage1 from "../assets/images/ekocell-onama-1.jpg";
import onamaImage2 from "../assets/images/ekocell-onama-2.jpg";
import Footer from "../components/Footer";

const OnamaPage = () => {
  useEffect(() => {
    document.querySelector("body").style.overflow = "auto";
  }, []);

  return (
    <div id="onama">
      <Navigation type="black" />
      <header className="header">
        <div className="image-holder">
          <img src={onamaImage2} alt="ekocell building" />
        </div>
        <div className="title-holder">
          <h1 className="title">O nama</h1>
        </div>
        <div className="image-holder vertical">
          <img src={onamaImage1} alt="ekocell team" />
        </div>
      </header>

      <img src={onamaImage1} alt="ekocell team" className="mobile-image" />
      <div className="onama-holder">
        <div className="information">
          <div className="googleMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.2950041275153!2d15.792159876976374!3d45.80534997108151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765ce0cab0a8739%3A0xe34fa1a5f71acdac!2sEkocell%20d.o.o.!5e0!3m2!1sen!2shr!4v1699549521083!5m2!1sen!2shr"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <h4>Adresa</h4>
              <p>Ul. Hrvatskih branitelja 43 G,</p>
              <p>10431, Sveta Nedelja</p>
            </div>
            <div className="contact-info-item">
              <h4>Kontakt telefon</h4>
              <a href="tel:+385959152692">+385 95 915 2692</a>
            </div>
            <div className="contact-info-item">
              <h4>Email</h4>
              <a href="mailto:info@ekocell.hr">info@ekocell.hr</a>
            </div>
          </div>
        </div>
        <div className="about-us">
          <p>
            S ponosom predstavljamo naše poduzeće, osnovano s ljubavlju i
            strašću prema izgradnji i interijer dizajnu. Smješteni u Svetoj
            Nedelji, srce našeg poduzeća čini bračni par čija je vizija
            pretvoriti svaki prostor u nešto posebno i jedinstveno. Naša strast
            za arhitekturom i dizajnom prenosi se na svaki projekt koji
            preuzmemo diljem Hrvatske.
          </p>
          <br />
          <p>
            Ono što nas izdvaja je predanost visokim standardima kvalitete,
            inovaciji i pažljivom pristupu prema svakom detalju. Ekocell nudi
            sveobuhvatne usluge, od izgradnje, sve do finalnog dodira
            interijera. Naš cilj nije samo stvaranje prostora, već i stvaranje
            iskustva koje odražava individualnost naših klijenata.
          </p>
          <br />
          <p>
            Rad s nama znači partnerstvo temeljeno na povjerenju, suradnji i
            transparentnosti. Naš tim stručnjaka posvećen je ostvarivanju vaših
            snova i vizija, pružajući personaliziran pristup svakom projektu.
            Pozivamo vas da nam se pridružite na putovanju stvaranja prostora
            koji odražava vaš jedinstveni stil i potrebe.
          </p>
          <br />
          <p>
            Uz nas, ne samo da gradite dom, već stvarate životni prostor
            ispunjen toplinom, funkcionalnošću i estetikom. Dozvolite nam da
            vaše ideje pretvorimo u stvarnost i zajedno stvorimo prostor koji će
            odisati karakterom i udobnošću. Vaša budućnost je naša strast, i s
            veseljem radimo na projektima koji ostavljaju trajan dojam.
          </p>
          <p>
            S nama, svaki detalj je pažljivo osmišljen, svaki prostor ima svoju
            priču. Dođite s nama graditi snove i stvarati domove.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OnamaPage;

export const Head = () => <title>Ekocell - O nama</title>;
