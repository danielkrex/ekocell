import React, { useLayoutEffect, useRef } from "react";
import "../../style/typography.scss";
import "../../style/main.scss";
import "../../style/page.scss";
import Navigation from "../../components/Navigation";
import ScrollPage from "scrollpage-js";
import Welcome from "../../components/views/Welcome";
import ArticleSection from "../../components/views/ArticleSection";
import ContactUs from "../../components/ContactUs";
import {
  welcome,
  interijer,
  interijerIdeja,
  interijerIzvedba,
  interijerKljuc,
  interijerStrucnoSavjetovanje,
} from "../../content/pages-interijer";

const IndexPage = () => {
  const bkgRef = useRef();
  const scrollTop = useRef();

  const scrollPage = () => {
    return new ScrollPage("#main-page", {
      menu: "ul.subMenu",
      animation: "easeInCubic",
      time: 700,
    }).onScroll((e) => {
      if (e.nextPageName === "welcome") {
        bkgRef.current.style.filter = "blur(0px)";
        bkgRef.current.style.webkitFilter = "blur(0px)";
      } else {
        bkgRef.current.style.filter = "blur(6px)";
        bkgRef.current.style.webkitFilter = "blur(6px)";
      }
    });
  };

  useLayoutEffect(() => {
    scrollPage();
  }, []);

  return (
    <main>
      <Navigation />
      <div className="bkgHolder interior" ref={bkgRef}></div>
      <div id="main-page">
        <Welcome
          id="welcome"
          data={welcome}
          type="interior"
          highlight="#C58B57"
        />
        <ArticleSection
          id="interijer"
          pos={{ padding: "left", offset: Math.random() * 100 }}
          data={interijer}
          type="interior"
        />
        <ArticleSection
          id="dizajn-interijera"
          pos={{ padding: "right", offset: Math.random() * 100 }}
          data={interijerIdeja}
          type="interior"
        />
        <ArticleSection
          id="planiranje-prostora"
          pos={{ padding: "left", offset: Math.random() * 100 }}
          data={interijerIzvedba}
          type="interior"
        />
        <ArticleSection
          id="interijer-boja"
          pos={{ padding: "right", offset: Math.random() * 100 }}
          data={interijerKljuc}
          type="interior"
        />
        <ArticleSection
          id="interijer-boja"
          pos={{ padding: "right", offset: Math.random() * 100 }}
          data={interijerStrucnoSavjetovanje}
          type="interior"
        />
        <ContactUs type="interijer" />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
