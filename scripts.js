//defaults
let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//DOM decleration
const cookieCounter = document.getElementById('cookie-counter');
const  cookieClicker = document.getElementById('cookie-clicker');
const buyClickPower = document.getElementById('buy-click-power');
const clickPowerPrice = document.getElementById('click-power-price');
const clickPowerLevel = document.getElementById('click-power-level');
const clickPowerMultiple = document.getElementById('click-power-multiple');
const buyGrandma = document.getElementById('buy-grandma');
const grandmaPrice = document.getElementById('grandma-price');
const grandmaLevel = document.getElementById('grandma-level');
const grandmaMultiple = document.getElementById('grandma-multiple');
const buyFacility = document.getElementById('buy-facility');
const facilityPrice = document.getElementById('facility-price');
const facilityLevel = document.getElementById('facility-level');
const  facilityMultiple = document.getElementById('facility-multiple');


//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
cookieCount = cookieCount + clickPower;
 refreshCookieCount();
});


//refresh cookies
const refreshCookieCount = () => {
 cookieCounter.innerHTML = cookieCount;
}
const refreshPowerClick = () => {
clickPowerLevel.innterHTML = clickPowerLevelNumber;
clickPowerPrice.innerHTML = clickPowerPriceAmount;
clickPowerMultiple.innerHTML = clickPower;
}
const  refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower;
  grandmaMultiple.innerHTML = grandmaPower - 10;
}

let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}

buyClickPower.addEventListener("click", function(){
 if(cookieCount >= clickPowerPriceAmount){
   cookieCount -= clickPowerPriceAmount
   refreshCookieCount();
   clickPowerLevelNumber += 1;
   clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
   clickPower += 1;
   refreshPowerClick();
 }


});

buyGrandma.addEventListener("click", function(){

  if(cookieCount >=  grandmaPriceAmount){
    cookieCount += -grandmaPriceAmount;
    clickPowerLevelNumber += 1;
    grandmaPriceAmount *= 1;
    refreshCookieCount()
    grandmaLevelNumber += 1;
    grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    grandmaPower += 10;
    refreshGrandma();



  }
});
let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
    autoGrandma = true
    autoGrandmaStart();
    refreshGrandma();

  });
}
buyFacility.addEventListener("click", function() {

    facilityAuto = false;
    if (cookieCount >= facilityPriceAmount) {
      cookieCount -= facilityPriceAmount;
      facilityLevelNumber += 1;
      facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
      facilityPower += 600;
      facilityAuto = true
      autoFacilityStart();
      refreshCookieCount();
      refreshFacility();



  }
})
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
      cookieCount += facilityPower;
      refreshCookieCount();
    })
};
