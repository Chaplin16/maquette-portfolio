//tableau pour les fleches pour changer de page 
const arrayArrow = {
  home: [
    {
      link: `/`,
      src: "./assets/up-arrow.png",  //fleche qui monte vers 'accueil'
      legend: "Accueil",
    },
  ],
  portfolioUp: [
    {
      link: `/Portfolio`,
      src: "./assets/up-arrow.png",  //fleche qui monte vers 'portfolio'
      legend: "Portfolio",
    },
  ],
  portfolioDown: [
    {
      link: `/Portfolio`,
      src: "./assets/down-arrow.png", //fleche qui descend vers 'portfolio'
      legend: "Portfolio",
    },
  ],
    trainingDown: [
    {
      link: `/Training`,
      src: "./assets/down-arrow.png", //fleche qui descend vers 'experience'
      legend: "Formation/Expérience",
    },
  ],
  hobbies: [
    {
      link: `/Hobbies`,
      src: "./assets/down-arrow.png", // fleche qui descende vers hobbies
      legend: "Hobbies",
    },
  ],
  trainingUp: [
    {
      link: `/Training`,
      src: "./assets/up-arrow.png", //fleche qui monter vers experience
      legend: "Formation/Expérience",
    },
  ]
};

export default arrayArrow;
