"use strict";

$(document).ready(function () {
  let itemsToAnimate = $(".p-partners").find(".animated-text__inner");
  let animateTextScroll = true;

  // Если элемент виден на экране
  function isInViewport(element) {
    let elementTop = $(element).offset().top;
    let elementBottom = elementTop + $(element).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  // Начать анимацию текста
  function startAnimation(items) {
    $(items).each(function () {
      $(this).removeClass("stop-animation");
    });
  }

  // Поставить на паузу анимацию текста
  function stopAnimation(items) {
    $(items).each(function () {
      $(this).addClass("stop-animation");
    });
  }

  // Aнимация текста
  function animateTextOnScroll() {
    let itemVisible = $(".p-partners");

    $(itemsToAnimate).each(function () {
      $(this)
        .addClass("animated-text__inner_animated")
        .addClass("stop-animation");
    });

    $(window).scroll(function () {
      if (isInViewport(itemVisible) && animateTextScroll) {
        setTimeout(
          function () {
            stopAnimation(itemsToAnimate);
          }.bind(startAnimation(itemsToAnimate)),
          200
        );
      } else if (animateTextScroll == false) {
        startAnimation(itemsToAnimate);
      } else {
        stopAnimation(itemsToAnimate);
      }
    });
  }

  animateTextOnScroll();
});
