"use strict";

addEventListener("DOMContentLoaded", () => {
  let price = 39.99;
  let weeklyPriceBest = 0.48;
  let weeklyPrice = 6.99;

  let currencySymbol = "$"; 
  let formattedPrice = 'Just ' + currencySymbol + price.toFixed(2) + ' per year';
  let formattedWeeklyPriceBest = currencySymbol + weeklyPriceBest.toFixed(2) + '<br>per week';
  let formattedWeeklyPrice = currencySymbol + weeklyPrice.toFixed(2) + '<br>per week';

  document.getElementById('yearly-access-price').innerHTML = formattedPrice;
  document.getElementById('weekly-price-best').innerHTML = formattedWeeklyPriceBest;
  document.getElementById('weekly-price').innerHTML = formattedWeeklyPrice;
});
