import CardHobbies from "../components/CardHobbies";
import hobbies from "../components/ArrayHobbies";
import arrayArrow from "../components/ArrayArrow";
import Arrow from "../components/Arrow";

export default function Hobbies() {
  return (
    <div>
      <h2 className="text-center pt-5 display-3">Hobbies</h2>
      <div className="d-flex flex-wrap justify-content-around">
        <CardHobbies hobbies={hobbies.handiwork} />
        <CardHobbies hobbies={hobbies.sport} />
        <CardHobbies hobbies={hobbies.caps} />
      </div>
      <Arrow arrayArrow={arrayArrow.trainingUp}/>
    </div>
  );
}
