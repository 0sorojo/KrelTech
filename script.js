"use strict";

let products = [
  {
    name: "Spikey Plant",
    cost: 12,
    img: "/images/plantImgEdited1PNG.png",
    altText: "Spikey Plant",
  },
  {
    name: "Panda Plant",
    cost: 15,
    img: "/images/plantImgEdited2PNG.png",
    altText: "Panda Plant",
  },
  {
    name: "Mini Snake Plant",
    cost: 12,
    img: "/images/plantImgEdited3PNG.png",
    altText: "Mini Snake Plant",
  },
  {
    name: "Sedum Clavatum",
    cost: 12,
    img: "/images/plantImgEdited4PNG.png",
    altText: "Mini Snake Plant",
  },
  {
    name: "Rubber Plant",
    cost: 18,
    img: "/images/plantImgEdited5PNG.png",
    altText: "Rubber Plant",
  },
  {
    name: "Heartleaf Philo",
    cost: 30,
    img: "/images/plantImgEdited6PNG.png",
    altText: "Heartleaf Philo",
  },
  {
    name: "Mystery Succulent",
    cost: 20,
    img: "/images/plantImgEdited7PNG.png",
    altText: "Mystery Succulent",
  },
  {
    name: "Purple Beauty",
    cost: 10,
    img: "/images/plantImgEdited8PNG.png",
    altText: "Purple Beauty",
  },
  {
    name: "Cactus",
    cost: 18,
    img: "/images/plantImgEdited9PNG.png",
    altText: "Cactus",
  },
  {
    name: "Kiwi Aeonium",
    cost: 15,
    img: "/images/plantImgEdited10PNG.png",
    altText: "Kiwi Aeonium",
  },
  {
    name: "Aloe Plant",
    cost: 12,
    img: "/images/plantImgEdited11PNG.png",
    altText: "Aloe Plant",
  },
  {
    name: "Pink Jelly Bean",
    cost: 15,
    img: "/images/plantImgEdited12PNG.png",
    altText: "Pink Jelly Bean",
  },
];

let cartArray = [];

let receipt = document.querySelector(".receipt-form");
let pay = document.querySelector(".payment-page");
let receiptSend = document.querySelector(".receipt-send-page");
let receiptPage = document.querySelector(".receipt-page");
let itemList = document.querySelector(".item-list");
let subTotalParagraph = document.querySelector(".subtotal-amt");
let grid = document.querySelector(".grid");
let receiveReceipt = document.querySelector(".receive-receipt");
let subTotalParagraphReceipt = document.querySelector(".subtotal-amt-rcpt");
let subTotalParagraphCart = document.querySelector(".subtotal-amt-cart");
let taxParagraphReceipt = document.querySelector(".tax-amt-rcpt");
let taxParagraphCart = document.querySelector(".tax-amt-cart");
let totalParagraphReceipt = document.querySelector(".totalDue-amt-rcpt");
let totalParagraphCart = document.querySelector(".totalDue-amt-cart");
let totalParagraph = document.querySelector(".totalDue-amt");
let taxParagraph = document.querySelector(".tax-amt");
let totalDue = 0;
let tax = 0;
let subTotal = 0;

const subTotalCalculator = (array) => {
  subTotal = 0;
  array.forEach((plant) => {
    subTotal += plant.cost;
  });
  return subTotal;
};

const totalCalculator = (subTotal) => {
  tax = subTotal * 0.06;
  totalDue = subTotal + tax;
  taxParagraph.innerText = `$${tax}`;
  totalParagraph.innerText = `$${totalDue}`;
  taxParagraphReceipt.innerText = `$${tax}`;
  totalParagraphReceipt.innerText = `$${totalDue}`;
  taxParagraphCart.innerText = `$${tax}`;
  totalParagraphCart.innerText = `$${totalDue}`;
};

const populateReceipt = (array) => {
  itemList.innerHTML = "";
  for (let object of array) {
    let line = document.createElement("div");
    line.classList.add("object", "lato");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = object.name;
    let costParagraph = document.createElement("p");
    costParagraph.innerText = object.cost;
    line.append(nameParagraph, costParagraph);
    itemList.append(line);
  }
};

console.log(products);

products.forEach((product, index) => {
  let plantContainer = document.createElement("div");
  plantContainer.classList.add("plants");
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img");
  plantContainer.append(imageContainer);

  let image = document.createElement("img");
  imageContainer.append(image);
  image.classList.add("test");
  image.setAttribute("src", product.img);
  image.setAttribute("alt", product.altText);
  image.setAttribute("data-index", index);

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
});

// target grid

grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("test")) {
    let index = e.target.getAttribute("data-index");
    cartArray.push(products[index]);
    populateReceipt(cartArray);
    console.log(cartArray);
    let subtotal = subTotalCalculator(cartArray);
    subTotalParagraph.innerText = `$${subtotal}.00`;
    subTotalParagraphReceipt.innerText = `$${subtotal}.00`;
    subTotalParagraphCart.innerText = `$${subtotal}.00`;
    totalCalculator(subtotal);
  }
});

let reviewCartButton = document.querySelector(".review-cart");
reviewCartButton.addEventListener("click", () => {
  receipt.classList.remove("hide");
  console.log("viewable");
});

let payButton = document.querySelector(".pay-button");
payButton.addEventListener("click", () => {
  pay.classList.remove("hide");
});

let continueShoppingButton = document.querySelector(".continue-shopping");
continueShoppingButton.addEventListener("click", () => {
  preventDefault();
  receipt.classList.add("hide");
});

let submitPaymentButton = document.querySelector(".submit-payment");
submitPaymentButton.addEventListener("click", () => {
  event.preventDefault();
  receiptSend.classList.remove("hide");
});

receiveReceipt.addEventListener("click", (e) => {
  if (e.target.classList.contains("receive")) {
    receiptPage.classList.remove("hide");
  }
});

let resetButtons = document.querySelectorAll(".reset");
resetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.reload();
  });
});
