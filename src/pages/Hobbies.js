import CardHobbies from "../components/CardHobbies";
import hobbies from "../components/ArrayHobbies";
import arrayArrow from "../components/ArrayArrow";
import Arrow from "../components/CardArrow";

export default function Hobbies() {
  return (
    <div>
      <h2 className="text-center pt-5 display-3">Hobbies</h2>
      <div className="d-flex flex-wrap justify-content-around mb-3">
        <CardHobbies hobbies={hobbies.handiwork} />
        <CardHobbies hobbies={hobbies.sport} />
        <CardHobbies hobbies={hobbies.caps} />
      </div>
      <div className="text-center display-6 ">
        
        <p className="p-3 code mb-5">
          Et bien sûr : <strong>CODER!</strong> 😍
        </p>
        <a href="https://www.youtube.com/watch?v=EUskk3elBA0">
          <img
            src="./assets/video-aurore-creation-web.png"
            alt="vidéo d Aurore Création Web"
            className="pb-5"
          />
        </a>
      </div>
      <Arrow arrayArrow={arrayArrow.trainingUp} />
      <p className="lead text-end ">Site codé avec beaucoup de plaisir en REACT 😀</p>
    </div>
  );
}
