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

// let cart = [];
let receipt = document.querySelector(".receipt-form");
let itemList = document.querySelector(".item-list");

const populateReceipt = (array) => {
  array.forEach((object) => {
    let line = document.createElement("div");
    line.classList.add("object");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = object.name;
    let qtyParagraph = document.createElement("p");
    qtyParagraph.innerText = 0;
    let costParagraph = document.createElement("p");
    costParagraph.innerText = object.cost;
    line.append(nameParagraph, qtyParagraph, costParagraph);
    itemList.append(line);

    let resetButton2 = document.querySelector(".reset-btn2");
    resetButton2.addEventListener("click", () => {
      console.log("I hear a click!");
      // array = [];
      console.log(array);
      line.remove();
    });
    let resetButton1 = document.querySelector(".reset-btn1");
    resetButton1.addEventListener("click", () => {
      console.log("I hear a click!");
      // array = [];
      console.log(array);
      line.remove();
    });
  });
};

// const populateReceipt = (product) => {
//   let lineItem = document.createElement("div");
//   lineItem.classList.add("lineItem");
//   let nameParagraph = document.createElement("p");
//   nameParagraph.innerText = product.name;
//   nameParagraph.classList.add("item");
//   let costParagraph = document.createElement("p");
//   costParagraph.innerText = product.cost;
//   costParagraph.classList.add("item");
//   lineItem.append(nameParagraph, costParagraph);
//   itemList.append(lineItem);
//   console.log(lineItem);
// };

// console.log(cart);
// const countElement = (array) => {
//   let ItemObject = {
//   name: product.name,
// };
//   for (let i = 0; i < cart.length; i++) {
//     countItemObject[cart[i]] = (countItemObject[cart[i]] || 0) + 1;
//     console.log(countItemObject);
//     let countParagraph = document.createElement("p");
//     countParagraph.innerText = countItemObject[cart[i]];
//     cart.append(countItemObject);
//     console.log(cart);
//   }
//   return countItemObject;
// };

// console.log(countItemObject);
// let deleteButton = document.createElement("button");
// deleteButton.innerText = "X";
// deleteButton.classList.add("delete:");
// deleteButton.setAttribute("data-index", index);

let grid = document.querySelector(".grid");

console.log(products);

let cartArray = [];

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
  detail.classList.add("detail");

  let plantName = document.createElement("p");
  plantName.classList.add("plant-name", "lato");
  plantName.innerText = product.name;
  let plantPrice = document.createElement("p");
  plantPrice.classList.add("plant-price", "lato");
  plantPrice.innerText = `$${product.cost}`;
  detail.append(plantName);
  detail.append(plantPrice);
  plantContainer.append(detail);
  grid.append(plantContainer);

  image.addEventListener("click", () => {
    console.log("i heard a click");
    console.log(product);
    cartArray.push(product);
    // populateReceipt(product);
    console.log(cartArray);
    populateReceipt(cartArray);
  });
});

let reviewCartButton = document.querySelector(".review-cart");
reviewCartButton.addEventListener("click", () => {
  receipt.classList.remove("hide");
  console.log("viewable");
});

let continueShoppingButton = document.querySelector(".continue-shopping");
continueShoppingButton.addEventListener("click", () => {
  receipt.classList.add("hide");
});
