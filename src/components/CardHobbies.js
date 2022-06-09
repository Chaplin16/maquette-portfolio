export default function CardHobbies(props) {
  return (
    <main>
        <div className="d-flex flex-wrap justify-content-around ">
            <div className="card m-2 mb-5">
              <h3 className="card-title">Bricolage</h3>
              <div className="card-body">
                  {props.hobbies.map((photo,index) => [
                      <img key= {index} src={photo.src} alt={photo.alt} />
                  ])}
                    
                </div>
            </div>
        </div>
    </main>
  );
}
