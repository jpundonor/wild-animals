import fetchData from "./fetchData.js";
import Lion from "./Animals/Lion.js";
import Wolf from "./Animals/Wolf.js";
import Bear from "./Animals/Bear.js";
import Snake from "./Animals/Snake.js";
import Eagle from "./Animals/Eagle.js";

let data;
const selectAnimal = document.getElementById("animal");

// Get data
const getData = async () => {
  data = await fetchData();
}

// Load data -- IIFE
(() => {
  getData();
})();

// Create Animal
const createAnimal = () => {
  const age = document.getElementById("edad").value;
  const comments = document.getElementById("comentarios").value;
  const result = data.animales.find((a) => a.name == selectAnimal.value);

  let AnimalClass;
  switch (animal.value) {
    case "Leon":
      AnimalClass = Lion;

      break;
    case "Lobo":
      AnimalClass = Wolf;

      break;
    case "Oso":
      AnimalClass = Bear;

      break;
    case "Serpiente":
      AnimalClass = Snake;

      break;
    case "Aguila":
      AnimalClass = Eagle;

      break;
    default:
      break;
  }
  const newAnimal = new AnimalClass(
    result.name,
    age,
    result.imagen,
    comments,
    result.sonido
  );

  addAnimalToTable(newAnimal);
};

// Get image of animal
const getImage = async (animalImage) => {
  const dataImage = await fetchData();
  const img = dataImage.animales.find((a) => a.imagen == animalImage);
  return `./assets/imgs/${img.imagen}`;
};

// Event to change image of animal
selectAnimal.addEventListener("change", async (event) => {
  const nameSelected = event.target.value;
  const animal = data.animales.find((a) => a.name == nameSelected);
  const previewImg = document.getElementById("preview");
  const img = document.createElement("img");
  if (animal) {
    img.src = await getImage(animal.imagen);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "fill";
    previewImg.replaceChildren(img);
  }
});

// Add animal to table
const addAnimalToTable = (animal) => {
  const animalTable = document.getElementById("Animales");

  const card = document.createElement("div");
  card.className = "card m-2";
  card.style.width = "10rem";
  card.style.height = "15rem";

  // Create img of animal
  const img = document.createElement("img");
  img.src = `./assets/imgs/${animal.getImg()}`;
  img.className = "card-img-top";
  img.style.height = "100%";

  // Create button sound
  const button = document.createElement("button");
  button.className = "btn btn-secondary";

  // Create img of button
  const imgButton = document.createElement("img");
  imgButton.src = "./assets/imgs/audio.svg";
  imgButton.style.width = "20px";

  // Create audio element
  const audio = document.createElement("audio");
  audio.id = animal.getSound();

  // Event to play sound
  button.onclick = () => {
    getSoundAnimal(animal.getSound());
  };

  // Event to open modal
  img.onclick = () => {
    openModal(animal);
  };

  // Append elements
  button.appendChild(imgButton);
  card.appendChild(img);
  card.appendChild(button);
  card.appendChild(audio);
  animalTable.appendChild(card);
};

// Play sound of animal
const getSoundAnimal = (audio) => {
  const sound = new Audio(`./assets/sounds/${audio}`);
  sound.play();
};

// Validate form
const validateForm = () => {
  let animal = document.getElementById("animal");
  let age = document.getElementById("edad");
  let comments = document.getElementById("comentarios");

  if (
    animal.selectedIndex === 0 ||
    age.selectedIndex === 0 ||
    comments.value === ""
  ) {
    alert("Todos los campos son obligatorios");
  } else {
    createAnimal();
    animal.selectedIndex = 0;
    age.selectedIndex = 0;
    comments.value = "";
  }
};

const submit = document.getElementById("btnRegistrar");
submit.addEventListener("click", () => {
  validateForm();
});

const openModal = (animal) => {
  const modal = document.getElementById("exampleModal");
  const modalBody = document.querySelector("#exampleModal .modal-body");

  // Create div of modal
  const div = document.createElement("div");
  div.className = "text-center text-light";

  // Create img of animal
  const img = document.createElement("img");
  img.src = `./assets/imgs/${animal.getImg()}`;
  img.className = "img-fluid";
  
  // Create age of animal
  const age = document.createElement("p");
  age.textContent = animal.getAge();

  // Create title comments
  const span = document.createElement("span");
  span.textContent = "Comentarios";

  // Create comments of animal
  const p = document.createElement("p");
  p.textContent = animal.comments;

  // Append elements
  modalBody.replaceChildren(div);
  div.appendChild(img);
  div.appendChild(age);
  div.appendChild(span);
  div.appendChild(p);

  // Create modal
  const modalElement = new bootstrap.Modal(modal);
  modalElement.show();

};
