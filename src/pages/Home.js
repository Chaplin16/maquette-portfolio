import React from "react";
import { HashLink as Link } from 'react-router-hash-link'
import Video from "../components/Video"
import Header from "../components/Header";
import CardPortfolio from "../components/CardPortfolio";
import portfolio from "../components/ArrayPortfolio";
import arrayArrow from "../components/ArrayArrow";
import Text from "../components/Text";
import SoftSkills from "../components/SoftSkills";
import Footer from "../components/Footer";
import Arrow from "../components/CardArrow";
import SlideLanguages from "../components/SlideLanguages";


export default function Home() {
  return (
    <>
      <div className="cardBorder">
          <Video />
          <Header />
          <div className="d-flex justify-content-around my-5">
              <CardPortfolio portfolio={portfolio.vitrineBoostrap} />
              <CardPortfolio portfolio={portfolio.vitrineCMS} />
              <CardPortfolio portfolio={portfolio.personalProject} />
          </div>
          <Text />
          <SoftSkills />
          <Footer />
          <Arrow arrayArrow={arrayArrow.portfolioDown} />
      </div>
          <SlideLanguages />
    </>
  );
}
