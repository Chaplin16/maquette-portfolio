export default function CardHobbies(props) {
  return (
    <main>        
            <div className="card m-2 mb-5">
            
              <h3 className="card-title text-center pt-3">{props.hobbies.title}</h3>
              <div className="card-body">
                  {props.hobbies.image.map((photo,index) => [
                      <img key= {index} src={photo.src} alt={photo.alt} />
                  ])}
                    
                </div>
            </div>
    </main>
  );

}
