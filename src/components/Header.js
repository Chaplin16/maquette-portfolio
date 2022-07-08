//barre de porgression avec le titre et le logo sur la video
import "react-bootstrap/ProgressBar";

export default function Header() {

  //barre de porgression
  function Progress() {
    return <div className="progress-bar"></div>;
  }

  return (
    <header>
      <Progress />   
      <div className="header d-flex justify-content-center align-items-center">
        <h1>
          <p>Aurore</p>
          <p>Création</p>
          <p>Web</p>
        </h1>
        <img
          className="logo"
          src="./assets/aurore-creation-web.png"
          alt="logo Aurore Création Web"
        />
      </div>
    </header>
  );
}
