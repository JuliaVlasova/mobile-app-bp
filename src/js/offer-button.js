"use strict";

addEventListener("DOMContentLoaded", (event) => {
  const offerItems = document.querySelectorAll(".offer-info__item");
  const offerButton = document.querySelector('.offer-button');

  offerItems.forEach((item) => {
    item.addEventListener("click", function () {
      const hrefValue = item.getAttribute('data-href');
      offerButton.setAttribute('href', hrefValue);
      offerItems.forEach((i) => i.classList.remove("offer-info__item_active"));
      this.classList.add("offer-info__item_active");
    });
  });
});

