export default function Footer() {
  return (
    <footer className="mt-5">
        <div className="d-flex justify-content-around color-text">
           <a href="https://aurorecreationweb.fr" className="phoneAurore">
                <img
                        className="phone h-auto me-3"
                        src="./assets/telephone-aurore-creation-web.png"
                        alt="portable d aurore creation web"
                />
            </a>
            <div>
                <div>
                <p className="google fw-bold text-center pb-3">
                    Les avis de mes clients sur Google à
                     <span className="color fw-bold color-logo">
                     &nbsp;Aurore Création Web
                    </span>
                </p>
                </div>
                <ul className="list-unstyled contact d-flex flex-wrap justify-content-center socialNetworks">
                    <li className="d-flex row justify-content-center mb-1">
                        <img className="imgFooter1"
                        src="./assets/icon/github-aurore-ramos.png"
                        alt="telephone pour contacter aurore ramos"
                        />
                        <a
                        href="https://github.com/Chaplin16?tab=repositories"
                        className="fw-bold color-text text-decoration-none text-center"
                        >
                        Github repositories
                        </a>
                    </li>
                    <li className="d-flex row justify-content-center mt-1">
                        <img className="imgFooter"
                        src="./assets/icon/linkedin-aurore-ramos.png"
                        alt="linkedin pour le profil d'aurore ramos"
                        />
                        <a
                        href="https://www.linkedin.com/in/aurore-creation-web/"
                        className="fw-bold color-text text-decoration-none text-center"
                        >
                        Linkedin
                        </a>
                    </li>
                    <li className="d-flex row justify-content-center">
                        <img className="imgFooter2"
                    
                        src="./assets/icon/aurore-creation-web-logo.png"
                        alt="logo d'aurore création web"
                        />
                        <a
                        href="https://aurorecreationweb.fr"
                        className="fw-bold color-text text-decoration-none text-center"
                        >
                        Aurore Création Web
                        </a>
                    </li>
                    <li className="fw-bold d-flex row justify-content-center">
                        <img className="imgFooter3"
                    
                        src="./assets/icon/telephone.png"
                        alt="logo d'aurore création web"
                        />
                        <span className="text-center">06.77.80.98.69</span>
                    </li>  
                </ul>
           </div>
            <img
                className="imgAurore rounded shadow d-none"
                src="./assets/aurore-creation-web.jpeg"
                alt="aurore au travail"
            /> 
        </div>
        <div>
            <div className="flag d-flex justify-content-center mb-5">
                <img className="imgFooter"
                    src="./assets/flag-english.png"
                    alt="anglais technique lu et ecrit"
                   
                />
                <img src="./assets/flag-french.png" alt="langue maternelle" />
            </div>
        </div>
    </footer>
  );
}
