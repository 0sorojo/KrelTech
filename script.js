"use strict";

//original

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

let receipt = document.querySelector(".summary-page");

let pay = document.querySelector(".payment-page");

let receiptSend = document.querySelector(".receipt-send-page");

let receiptPage = document.querySelector(".receipt-page");

let itemList = document.querySelector(".item-list");

let grid = document.querySelector(".grid");

let receiveReceipt = document.querySelector(".receive-receipt");

let subTotalParagraph = document.querySelector(".subtotal-amt");
let subTotalParagraphReceipt = document.querySelector(".subtotal-amt-rcpt");
let subTotalParagraphCart = document.querySelector(".subtotal-amt-cart");

let taxParagraph = document.querySelector(".tax-amt");
let taxParagraphReceipt = document.querySelector(".tax-amt-rcpt");
let taxParagraphCart = document.querySelector(".tax-amt-cart");

let totalParagraph = document.querySelector(".totalDue-amt");
let totalParagraphReceipt = document.querySelector(".totalDue-amt-rcpt");
let totalParagraphCart = document.querySelector(".totalDue-amt-cart");
let totalParagraphBigMoneyTotal = document.querySelector(".your-total-is-num");

let changeParagraphBigMoney = document.querySelector(".your-change-is-num");
let changeParagraphReceipt = document.querySelector(".your-change-is-rcpt");

let cashTenderedForm = document.querySelector(".amount-of-money-tendered");

let itemListReceipt = document.querySelector(".item-list-receipt");

let totalDue = 0;
let tax = 0;
let subTotal = 0;
let tenderReceived = 0;
let change = 0;

const subTotalCalculator = (array) => {
  subTotal = 0;
  array.forEach((plant) => {
    subTotal += plant.cost;
  });
  return subTotal;
};

let taxValue = 0;
let totalDueValue = 0;
const totalCalculator = (subTotal) => {
  tax = subTotal * 0.06;
  taxValue = tax.toFixed(2);
  totalDue = subTotal + tax;
  totalDueValue = totalDue.toFixed(2);
  taxParagraph.innerText = `$${taxValue}`;
  totalParagraph.innerText = `$${totalDueValue}`;
  taxParagraphReceipt.innerText = `$${taxValue}`;
  totalParagraphReceipt.innerText = `$${totalDueValue}`;
  taxParagraphCart.innerText = `$${taxValue}`;
  totalParagraphCart.innerText = `$${totalDueValue}`;
  totalParagraphBigMoneyTotal.innerText = `$${totalDueValue}`;
};

let changeAmount = 0;

document.querySelectorAll(".money-btn").forEach((item) => {
  item.addEventListener("click", () => {
    tenderReceived = 0;
    let amount = Number(item.getAttribute("data-amt"));
    tenderReceived += amount;
    change = tenderReceived - totalDue;
    changeAmount = change.toFixed(2);
    changeParagraphBigMoney.innerText = `$${changeAmount}`;
    changeParagraphReceipt.innerText = `$${changeAmount}`;
  });
});

cashTenderedForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(cashTenderedForm);
  let cashtendered = data.get("cash");
  change = cashtendered - totalDue;
  changeAmount = change.toFixed(2);
  changeParagraphBigMoney.innerText = `$${changeAmount}`;
  changeParagraphReceipt.innerText = `$${changeAmount}`;
  cashTenderedForm.reset();
});

const populateCart = (array) => {
  itemList.innerHTML = "";
  for (let object of array) {
    let line = document.createElement("div");
    line.classList.add("object", "lato");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = object.name;
    let costParagraph = document.createElement("p");
    costParagraph.innerText = `$${object.cost}.00`;
    line.append(nameParagraph, costParagraph);
    itemList.append(line);
  }
};

const populateReceipt = (array) => {
  itemListReceipt.innerHTML = "";
  for (let receiptobject of array) {
    let lineReceipt = document.createElement("div");
    lineReceipt.classList.add("receiptobject", "lato");
    let nameParagraphReceipt = document.createElement("p");
    nameParagraphReceipt.innerText = receiptobject.name;
    let costParagraphReceipt = document.createElement("p");
    costParagraphReceipt.innerText = `$${receiptobject.cost}.00`;
    lineReceipt.append(nameParagraphReceipt, costParagraphReceipt);
    itemListReceipt.append(lineReceipt);
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
  plantName.classList.add("test");
  plantName.setAttribute("data-index", index);
  let plantPrice = document.createElement("p");
  plantPrice.classList.add("plant-price", "lato");
  plantPrice.innerText = `$${product.cost}`;
  plantPrice.classList.add("test");
  plantPrice.setAttribute("data-index", index);
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
    populateCart(cartArray);
    console.log(cartArray);
    let subtotal = subTotalCalculator(cartArray);
    subTotalParagraph.innerText = `$${subtotal}.00`;
    subTotalParagraphReceipt.innerText = `$${subtotal}.00`;
    subTotalParagraphCart.innerText = `$${subtotal}.00`;
    totalCalculator(subtotal);
    populateReceipt(cartArray);
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

let payNow = document.querySelector(".paynow");
payNow.addEventListener("click", () => {
  pay.classList.remove("hide");
});

let continueShoppingButton = document.querySelector(".continue-shopping");
continueShoppingButton.addEventListener("click", () => {
  receipt.classList.add("hide");
});

let submitPaymentButton = document.querySelector(".submit-payment");
submitPaymentButton.addEventListener("click", () => {
  event.preventDefault();
  change = 0;
  changeAmount = change.toFixed(2);
  changeParagraphBigMoney.innerText = `$${changeAmount}`;
  changeParagraphReceipt.innerText = `$${changeAmount}`;
  receiptSend.classList.remove("hide");
});

receiveReceipt.addEventListener("click", (e) => {
  if (e.target.classList.contains("receive")) {
    e.preventDefault();
    receiptPage.classList.remove("hide");
  }
});

let resetButtons = document.querySelectorAll(".reset");
resetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.reload();
  });
});

let receiptButton = document.querySelector(".to-receipt");
receiptButton.addEventListener("click", () => {
  receiptSend.classList.remove("hide");
});
