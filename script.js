"use strict";
document.addEventListener("DOMContentLoaded", init);

const chart = [];

function init() {
  //Adding fourty different numbers to the array chart
  for (let number = 0; number < 40; number++) {
    chart[number] = getNumberOfCustomers();
  }
  loop();
  displayData();
}

function loop() {
  //The loop takes the 40 different numbers from the array to each bar
  for (let number = 0; number < 40; number++) {
    document.getElementById("bars").getElementsByClassName("bar")[number].style.height = chart[number] + "%";
  }
}

function getNumberOfCustomers() {
  //Makes the random numbers
  const randomNumber = Math.floor(Math.random() * 32);
  console.log(randomNumber);
  return randomNumber;
}

function displayData() {
  //calling two function to timeout
  modifyModel();
  loop();
  setTimeout(displayData, 500);
}

function modifyModel() {
  //adds the new random number by .push
  chart.push(getNumberOfCustomers());
  //Removes the first made random number
  chart.shift();
}
