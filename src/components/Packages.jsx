
import React from "react";
import "./Packages.css";

const packages = [
  {
    name: "BASIC",
    price: "Rs. 2,00,000/-",
    subtitle: "Two-day wedding coverage",
    description:
      "A beautifully balanced wedding collection designed to preserve the colour, emotion and energy of your two-day celebration.",
    days: [
      {
        title: "DAY ONE | MEHNDI & SANGEET",
        text: "A dedicated 4+2 professional team captures the colour, warmth and energy of your Mehndi and Sangeet through story video, story stills, cinematic sequences and candid photography. From intricate bridal details and family portraits to performances, laughter and emotional exchanges, we build a vivid visual narrative of the evening.",
      },
      {
        title: "DAY TWO | WEDDING DAY",
        text: "Our expanded 5+3 professional team documents the complete wedding day with story video, story stills, cinematic filmmaking, candid photography and drone coverage. We thoughtfully preserve bridal and groom preparations, rituals, décor, family interactions, couple portraits and the scale of your celebration with graceful, unobtrusive coverage.",
      },
    ],
    deliverables: [
      "Unlimited still-image coverage and complete data archive",
      "Two premium Canvera photobooks - 30+50 sheets, leather-pad finish",
      "Complete edited wedding video delivered on a pen drive",
      "One signature wedding teaser film",
      "Two curated Instagram reels",
      "One premium LED couple photo frame",
      "Custom WhatsApp e-invitation",
      "Edited photographs delivered through a face-recognition gallery",
    ],
  },
  {
    name: "PRO",
    price: "Rs. 3,00,000/-",
    subtitle: "Two-day elevated wedding coverage",
    description:
      "An elevated two-day experience with a larger creative team, enhanced filmmaking and greater coverage across every important wedding moment.",
    days: [
      {
        title: "DAY ONE | MEHNDI & SANGEET",
        text: "A dedicated 4+2 professional team captures the colour, warmth and energy of your Mehndi and Sangeet through story video, story stills, cinematic sequences and candid photography. We document bridal artistry, décor, performances, guest interactions and every spontaneous moment that gives the celebration its distinctive personality.",
      },
      {
        title: "DAY TWO | WEDDING DAY",
        text: "Our elevated 6+4 professional team creates a comprehensive wedding-day record through story video, story stills, cinematic filmmaking, gimbal movements, candid photography and drone coverage. With wider team strength, we cover parallel moments seamlessly - preparations, rituals, couple portraits, family emotions, venue grandeur and the celebrations unfolding around you.",
      },
    ],
    deliverables: [
      "Unlimited still-image coverage and complete data archive",
      "Two premium Canvera photobooks - 50+50 sheets, leather-pad finish",
      "Complete edited wedding video delivered on a pen drive",
      "One signature wedding teaser film",
      "Four curated Instagram reels",
      "Two premium LED couple photo frames",
      "Custom WhatsApp e-invitation",
      "Edited photographs delivered through a face-recognition gallery",
    ],
  },
  {
    name: "ADVANCED",
    price: "Rs. 4,00,000/-",
    subtitle: "Three-day signature wedding experience",
    description:
      "Our most comprehensive collection, crafted for celebrations where every chapter deserves its own visual identity.",
    days: [
      {
        title: "DAY ONE | MEHNDI & SANGEET",
        text: "A dedicated 4+2 photography and film team preserves the artistry, performances, décor and genuine moments between loved ones with a rich, editorial sensibility.",
      },
      {
        title: "DAY TWO | ENGAGEMENT",
        text: "A 4+2 photography and film team gives your engagement ceremony its own distinct visual identity through story video, story stills, cinematic filmmaking and candid photography. The coverage includes ring-exchange moments, couple portraits, family celebrations, décor details and natural interactions that make this chapter feel intimate and complete.",
      },
      {
        title: "DAY THREE | WEDDING DAY",
        text: "Our elevated 6+4 professional team creates a comprehensive wedding-day record through story video, story stills, cinematic filmmaking, gimbal movements, candid photography and drone coverage. With wider team strength, we cover parallel moments seamlessly - preparations, rituals, couple portraits, family emotions, venue grandeur and the celebrations unfolding around you.",
      },
    ],
    deliverables: [
      "Unlimited still-image coverage and complete data archive",
      "Three premium Canvera photobooks - 30+50+50 sheets, leather-pad finish",
      "Complete edited wedding video delivered on a pen drive",
      "One signature wedding teaser film",
      "Six curated Instagram reels",
      "Two premium LED couple photo frames",
      "Custom WhatsApp e-invitation",
      "Edited photographs delivered through a face-recognition gallery",
      "Two premium acrylic photo frames",
    ],
  },
];

const WHATSAPP_NUMBER = "919919099495";

const openWhatsApp = (packageName = "") => {
  const message = packageName
    ? `Hi! I'd like to enquire about the ${packageName} Collection from Gautam Bijlani Photography.`
    : "Hi! I'd like to enquire about your wedding photography packages.";

  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(link, "_blank", "noopener,noreferrer");
};

const Packages = () => {
  return (
    <main className="packagesPage">


      {/* INTRO */}
      <section className="packagesIntro">
     
      </section>

      {/* PACKAGE CARDS */}
      <section className="collectionSection">
        <div className="sectionHeading">
          <p className="sectionEyebrow">CHOOSE YOUR SIGNATURE COLLECTION</p>
        </div>

        <div className="packageGrid">
          {packages.map((pkg) => (
            <article
              className={`packageCard ${
                pkg.name === "PRO" ? "featuredPackage" : ""
              }`}
              key={pkg.name}
            >
              {pkg.name === "PRO" && (
                <div className="featuredLabel">MOST POPULAR</div>
              )}

              <div className="packageCardTop">
                <p className="packageNumber">
                  {pkg.name === "BASIC"
                    ? "01"
                    : pkg.name === "PRO"
                    ? "02"
                    : "03"}
                </p>

                <h3>{pkg.name}</h3>

                <p className="packageSubtitle">{pkg.subtitle}</p>

                <div className="packagePrice">{pkg.price}</div>

                <p className="packageShortDescription">
                  {pkg.description}
                </p>
              </div>

              <button
                className="packageButton"
                onClick={() => openWhatsApp(pkg.name)}
              >
                ENQUIRE NOW
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="equipmentSection">
        <div className="equipmentContent">
          <p className="sectionEyebrow">OUR APPROACH</p>

          <h2>
            PREMIUM EQUIPMENT.
            <br />
            <span>TIMELESS RESULTS.</span>
          </h2>

          <p>
            Every package includes premium full-frame still cameras, 4K
            mirrorless video systems, portable lighting, ring lights, Godox
            studio lights and RGB effect lights for a polished, cinematic
            finish.
          </p>
        </div>
      </section>

      {/* DETAILED PACKAGES */}
      <section className="detailsSection">
        <div className="detailsHeader">
          <p className="sectionEyebrow">THE COLLECTIONS</p>
          <h2>EVERY MOMENT, <span>THOUGHTFULLY PRESERVED.</span></h2>
        </div>

        {packages.map((pkg, index) => (
          <article className="detailPackage" key={pkg.name}>

            <div className="detailPackageHeader">
              <div>
                <p className="detailNumber">0{index + 1}</p>
                <h3>{pkg.name} COLLECTION</h3>
                <p>{pkg.subtitle}</p>
              </div>

              <div className="detailPrice">
                <span>COLLECTION INVESTMENT</span>
                <strong>{pkg.price}</strong>
              </div>
            </div>

            <div className="detailContent">

              <div className="eventCoverage">
                <h4>EVENT COVERAGE</h4>

                {pkg.days.map((day) => (
                  <div className="dayBlock" key={day.title}>
                    <h5>{day.title}</h5>
                    <p>{day.text}</p>
                  </div>
                ))}
              </div>

              <div className="deliverables">
                <h4>SIGNATURE DELIVERABLES</h4>

                <ul>
                  {pkg.deliverables.map((item) => (
                    <li key={item}>
                      <span>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="bookingBox">
              <div>
                <h4>BOOKING & DELIVERY</h4>
                <p>
                  A 50% booking advance secures your dates and production
                  team. The remaining balance is due on or before the wedding
                  day. Final edited deliverables are shared after full payment
                  clearance.
                </p>
              </div>

              <button
                onClick={() => openWhatsApp(pkg.name)}
                className="detailBookButton"
              >
                BOOK THIS COLLECTION
              </button>
            </div>

          </article>
        ))}
      </section>

      {/* CONTACT */}
      <section className="packageContact">
        <p className="sectionEyebrow">LET'S CREATE SOMETHING TIMELESS</p>

        <h2>
          YOUR STORY
          <br />
          <span>DESERVES TO BE REMEMBERED.</span>
        </h2>

        <p>
          Dates are limited. Get in touch with us to discuss your celebration,
          availability and the collection that best fits your wedding.
        </p>

        <button onClick={() => openWhatsApp()}>
          START A CONVERSATION
        </button>

        <div className="contactDetails">
          <span>9919099495</span>
          <span>gautambijlaniphotoflash@gmail.com</span>
          <span>gbijlani7@gmail.com</span>
          <span>Instagram: @gautambijlaniphotography_08</span>
        </div>
      </section>

    </main>
  );
};

export default Packages;

/* =========================================
   PACKAGES PAGE
========================================= */
