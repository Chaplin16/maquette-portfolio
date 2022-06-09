export default function Arrow(props) {
  return (
    <div>
      {props.arrayArrow.map((item, index) => (
        <div key={index} className="text-center p-4 blocArrow">
          <a href={item.link}>
            <img
              src={item.src}
              alt="fleche pour changer de page"
            />
            <span className="arrow">{item.legend}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
