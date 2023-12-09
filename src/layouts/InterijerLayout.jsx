import React, {useEffect} from "react";
import "../style/article.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function LayoutInterijer({ title, children }) {
  useEffect(() => {
    document.querySelector("body").style.overflow = "auto";
  }, [])
  
  return (
    <>
      <Navigation />
      <div className="article-wrapper">
        <div className="article interijer">
          <div className="title-holder">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="content-holder">{children}</div>
      </div>
      <Footer type="articleFooter" />
    </>
  );
}
