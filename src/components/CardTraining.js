export default function CardTraining(props) {
  return (
    <div className="d-flex flex-wrap justify-content-around ">
      {props.training.map((item, index) => (
        <div key={index} className="card m-2 mb-5">
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <span className="card-subtitle mb-2 text-muted">{item.date}</span>
            <div className="cardContent">
              <div>
                <span className="card-text">{item.content}</span>
                <ul>
                  {/* {item.li}(li.map((li,index) => (
                      <li key={index}>{li}</li>
                    )))} */}
                  <li>{item.li1}</li>
                  <li>{item.li2}</li>
                  <li>{item.li3}</li>
                  <li>{item.li4}</li>
                </ul>
              </div>
            </div>
          </div>
          <a href={item.link} className="card-link p-2">
            <img src={item.image} alt="{item.alt}" />
          </a>
        </div>
      ))}
    </div>
  );
}
