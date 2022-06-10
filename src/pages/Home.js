import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Text from "../components/Text";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Images from "../components/Images";
import arrayArrow from "../components/ArrayArrow";
import Arrow from "../components/CardArrow";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Header />
      <Text />
      <h2 className="title">Quelques sites vitrines en JS, Bootstrap, Sass</h2>
      <Carousel images={Images.vitrine} />
      <h2 className="title">
        Quelques sites avec un CMS, wordPress, Jimdo, Prestashop
      </h2>
      < Carousel images={Images.cms} />
      <h2 className="title">Blog et projets fictifs </h2>
      <Carousel images={Images.projects} />
      <Footer />
      <Arrow arrayArrow={arrayArrow.training}/>
    </>
  );
}
