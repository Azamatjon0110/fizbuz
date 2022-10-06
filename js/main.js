
var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".form-control");
var elContent = document.querySelector(".js-value");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  var inputValue = Number(elInput.value);
  if (inputValue % 3 == 0 && inputValue % 5 == 0){
    elContent.textContent = "FizzBuzz";
  }else if(inputValue % 3 == 0){
    elContent.textContent = "Fizz";
  }else if(inputValue % 5 == 0){
    elContent.textContent = "Buzz"
  }else{
    elContent.textContent = `${inputValue}`;
  }
  elInput.textContent = "";
});


var elForm = document.querySelector(".form-box")

var userMoney = document.querySelector(".user-money");
var selectValue = document.querySelector(".form-select");

var inputMoney = document.querySelector(".input-money");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var course = userMoney.value;
  var sum = course*selectValue.value;
  inputMoney.textContent = `${sum}`;
});

// var enterMoney = Number(prompt("Enter money value"));
var course = enterMoney / 10975;
var fare = 500;
var hotel = 250;
var museum = 120 * 12345 / 10975;
var allCost = fare + hotel + museum;

if (course >= allCost){
  console.log("Oq yo'l, Alisher");
}
else{
  console.log("Alisher ozgina sabr qilishingiz kerak ekan");
}
