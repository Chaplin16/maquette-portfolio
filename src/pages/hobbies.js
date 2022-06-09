import CardHobbies from "../components/CardHobbies";
import hobbies from "../components/ArrayHobbies";

export default function Hobbies() {
  return (
    <div>
        <h2 className="text-center pt-5 display-3">Hobbies</h2>
        <CardHobbies hobbies={hobbies.handiwork}/>
        <CardHobbies hobbies={hobbies.sport} />
    </div>
  )
}
