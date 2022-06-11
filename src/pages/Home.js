import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Text from "../components/Text";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Images from "../components/Images";
import arrayArrow from "../components/ArrayArrow";
import Arrow from "../components/CardArrow";
import Helmet from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://portfolio-brown-omega-58.vercel.app/" />
        <title>Portfolio d'Aurore RAMOS codé en React</title>
        <meta name="author" content=" Aurore Creation Web" />
        <meta name="description" content="Portfolio et cv pour trouver un stage de developpeur web en front-end, back-end ou full-stack en télétravail. Passionnée de code, je veux juste coder, apprendre et découvrir" />
        <meta property="og:site_name" content="Portfolio d'Aurore RAMOS"/>
        <meta property="og:type" content="site web" />
        <meta property="og:url" content="https://portfolio-brown-omega-58.vercel.app/" />
/>
        <meta property="og:title" content="Portfolio d'Aurore RAMOS"/>
        <meta property="og:description" content="Portfolio et cv pour trouver un stage de developpeur web en front-end, back-end ou full-stack en télétravail. Passionnée de code, je veux juste coder, apprendre et découvrir" />
        <meta property="og:image" content="https://aurorecreationweb.fr/images/aurore-creation-web-site-internet.png"/>
      </Helmet>
      <Sidebar />
      <Header />
      <Text />
      <h2 className="title">Quelques sites vitrines en JS, Bootstrap, Sass</h2>
      <Carousel images={Images.vitrine} />
      <h2 className="title">
        Quelques sites avec un CMS, wordPress, Jimdo, Prestashop
      </h2>
      <Carousel images={Images.cms} />
      <h2 className="title">Blog et projets fictifs </h2>
      <Carousel images={Images.projects} />
      <Footer />
      <Arrow arrayArrow={arrayArrow.training} />
    </>
  );
}
