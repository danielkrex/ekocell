import React, { useState } from "react";

function ContactUs(props) {
  return (
    <div className="page contact-wrapper">
      <div className={`contact-form ${props.type ? props.type : ""}`}>
        <h1>Kontaktirajte nas</h1>
        <p>
          EKOCELL vjeruje da svaki klijent zaslužuje kvalitetnu izgradnju
          korištenjem vrhunskih materijala. Naš cilj je premašiti vaša
          očekivanja i stvoriti prostor na koji ćete se moći osloniti godinama.
          Kontaktirajte nas danas kako biste dogovorili konzultaciju i započeli
          svoje putovanje s nama.
        </p>
        <div className="contact-split">
          <div className="map-holder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.2950041275153!2d15.792159876976374!3d45.80534997108151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765ce0cab0a8739%3A0xe34fa1a5f71acdac!2sEkocell%20d.o.o.!5e0!3m2!1sen!2shr!4v1699549521083!5m2!1sen!2shr"
              width="400"
              height="300"
              style={{border: "0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <h4>Ul. Hrvatskih branitelja 43 G,</h4>
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
      </div>
    </div>
  );
}

export default ContactUs;
