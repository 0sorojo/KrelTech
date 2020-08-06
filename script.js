"use strict";

let products = [
  {
    name: "Spikey Plant",
    cost: 12,
    img: "assets/images/plantImgEdited1PNG.png",
    altText: "Spikey Plant",
  },
  {
    name: "Panda Plant",
    cost: 15,
    img: "assets/images/plantImgEdited2PNG.png",
    altText: "Panda Plant",
  },
  {
    name: "Mini Snake Plant",
    cost: 12,
    img: "assets/images/plantImgEdited3PNG.png",
    altText: "Mini Snake Plant",
  },
  {
    name: "Sedum Clavatum",
    cost: 12,
    img: "assets/images/plantImgEdited4PNG.png",
    altText: "Mini Snake Plant",
  },
  {
    name: "Rubber Plant",
    cost: 18,
    img: "assets/images/plantImgEdited5PNG.png",
    altText: "Rubber Plant",
  },
  {
    name: "Heartleaf Philo",
    cost: 30,
    img: "assets/images/plantImgEdited6PNG.png",
    altText: "Heartleaf Philo",
  },
  {
    name: "Succulent Trio",
    cost: 20,
    img: "assets/images/plantImgEdited7PNG.png",
    altText: "Succulent Trio",
  },
  {
    name: "Purple Beauty",
    cost: 10,
    img: "assets/images/plantImgEdited8PNG.png",
    altText: "Purple Beauty",
  },
  {
    name: "Cactus",
    cost: 18,
    img: "assets/images/plantImgEdited9PNG.png",
    altText: "Cactus",
  },
  {
    name: "Kiwi Aeonium",
    cost: 15,
    img: "assets/images/plantImgEdited10PNG.png",
    altText: "Kiwi Aeonium",
  },
  {
    name: "Aloe Plant",
    cost: 12,
    img: "assets/images/plantImgEdited11PNG.png",
    altText: "Aloe Plant",
  },
  {
    name: "Pink Jelly Bean",
    cost: 15,
    img: "assets/images/plantImgEdited12PNG.png",
    altText: "Pink Jelly Bean",
  },
];
let grid = document.querySelector(".grid");

console.log(products);

products.forEach((product) => {
  let plantContainer = document.createElement("div");
  plantContainer.classList.add("plants");

  let imageContainer = document.createElement("div");

  imageContainer.classList.add("img");

  plantContainer.append(imageContainer);

  let image = document.createElement("img");
  imageContainer.append(image);
  image.setAttribute("src", product.img);
  image.setAttribute("alt", product.altText);

  let detail = document.createElement("div");
  detail.innerText = product.name;
  detail.classList.add("detail");

  let plantName = document.createElement("p");
  plantName.classList.add("plant-name", "lato");
  plantName.innerText = product.name;
  let plantPrice = document.createElement("p");
  plantPrice.classList.add("plant-price", "lato");
  plantPrice.innerText = product.cost;
  detail.append(plantPrice);
  plantContainer.append(detail);
  grid.append(plantContainer);
});
