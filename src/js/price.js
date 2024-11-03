"use strict";

addEventListener("DOMContentLoaded", () => {
  let price = 39.99;
  let weeklyPriceBest = 0.48;
  let weeklyPrice = 6.99;

  let currencySymbol = "$"; 
  let formattedPrice = currencySymbol + price.toFixed(2);
  let formattedWeeklyPriceBest = currencySymbol + weeklyPriceBest.toFixed(2);
  let formattedWeeklyPrice = currencySymbol + weeklyPrice.toFixed(2);

  function handlePrice(item, finalPrice) {
    let priceBlock = document.getElementById(item);
    priceBlock.innerHTML = priceBlock.innerHTML.replace('{{price}}', finalPrice);
  }

  handlePrice('yearly-access-price', formattedPrice);
  handlePrice('weekly-price-best', formattedWeeklyPriceBest);
  handlePrice('weekly-price', formattedWeeklyPrice);
});
