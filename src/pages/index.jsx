import React, { useLayoutEffect, useRef } from "react";
import "../style/typography.scss";
import "../style/main.scss";
import Navigation from "../components/Navigation";
import ScrollPage from "scrollpage-js";
import Welcome from "../components/views/Welcome";
import ArticleSection from "../components/views/ArticleSection";
import ContactUs from "../components/ContactUs";
import {
  welcome,
  drveneKuce,
  podnoGrijanje,
  ekoIzolacija,
  strucnoSavjetovanje
} from "../content/pages-izgradnja";

const IndexPage = () => {
  const bkgRef = useRef();

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
      <div className="bkgHolder exterior" ref={bkgRef}></div>
      <div id="main-page">
        <Welcome id="welcome" data={welcome} type="exterior" />
        <ArticleSection
          id={drveneKuce.id}
          pos={{ padding: "left", offset: Math.random() * 100 }}
          data={drveneKuce}
          type="exterior"
        />
        <ArticleSection
          id={ekoIzolacija.id}
          pos={{ padding: "right", offset: Math.random() * 100 }}
          data={ekoIzolacija}
          type="exterior"
        />
        <ArticleSection
          id={podnoGrijanje.id}
          pos={{ padding: "left", offset: Math.random() * 100 }}
          data={podnoGrijanje}
          type="exterior"
        />
        <ArticleSection
          id={strucnoSavjetovanje.id}
          pos={{ padding: "left", offset: Math.random() * 100 }}
          data={strucnoSavjetovanje}
          type="exterior"
        />
        <ContactUs type="izgradnja" />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
