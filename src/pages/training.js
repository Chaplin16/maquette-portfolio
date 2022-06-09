import CardTraining from "../components/CardTraining";
import training from "../components/ArrayTraining";
import arrayArrow from "../components/ArrayArrow";
import Arrow from "../components/Arrow";


export default function Training(props) {
  return (
    <>
      <h2 className="text-center pt-5 display-3">Formation</h2>
      <CardTraining training={training.certificate} />
      <h2 className="text-center pt-5 display-3">Expérience</h2>
      <CardTraining training={training.job} />
      <div className="d-flex justify-content-center ">
        <Arrow arrayArrow={arrayArrow.home}/>
        <Arrow arrayArrow={arrayArrow.hobbies}/>
      </div>
    </>
  );
}
