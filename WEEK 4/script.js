// Array of character data
const characters = [
    {
      realName: "Greg",
      image: "images/gecko.jpg",
      gender: "Male",
      alignment: "Good",
      identity: "Secret Identity",
      Superpower:"Strength and Camouflage",
      link: "/gekko.html"

    },
    {
      realName: "Amaya",
      image: "images/owlette.webp",
      gender: "Female",
      alignment: "Good",
      identity: "Secret Identity",
      Superpower:"Flying and Vision",
      link: "/owlette.html"
    },
    {
      realName: "connor",
      image: "images/catboy.jpg",
      gender: "Male",
      alignment: "Good",
      identity: "Secret Identity",
      Superpower:"Superspeed and Hearing",
      link: "/catboy.html"
    }
  ];

  const container = document.querySelector(".characters");

  const createCharacterCards = () => {
    const cards = characters.map ((mask, index) => {
      return

      `<div>
            <img src=${mask.image} alt="image of gekko" width="250" height="320"> <br>
            <button><a href=${mask.link}>View Card</a></button> 
        </div>`
    }).join("")

    container.innerHTML = cards;
  }

  createCharacterCards();



  
  

  