$(window).on("load", function () {
  $(".preloader").fadeOut();
});

$(document).ready(function () {
  // show and hide search

  $(".open-search").click(function () {
    $(".search").toggleClass("show-search-box");
    $("body").addClass("overflow-hidden")
  });

  $(".search").click(function () {
    $(this).removeClass("show-search-box");
    $("body").removeClass("overflow-hidden");
  });
  $(".search-form").on("click" , function(e){
    e.stopPropagation();
  })

  // **************************************************************************************************

  // to top button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $(window).scrollTop(0);
  });

  //**************************************************************************************************

  // open and close sideBar

  $(".bars").click(function () {
    $("nav").addClass("show-site-menu");
    $("body").addClass("overflow-hidden");
  });

  $(".close-btn").click(function () {
    $("nav").removeClass("show-site-menu");
    $("body").removeClass("overflow-hidden");
  });

  //**************************************************************************************************

  //fixed nav

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 40) {
      $("header").addClass("sticky-header");
    } else {
      $("header").removeClass("sticky-header");
    }
  });

  //**************************************************************************************************

  // Footer mobile nav

  if ($(window).width() < 992) {
    $(".footer-item-title").on("click", function () {
      $(this).siblings(".footer-ul-wrapper").slideToggle(300);
      $(this).toggleClass("rotate-arrow");
      $(".footer-item-title")
        .not(this)
        .siblings(".footer-ul-wrapper")
        .slideUp(300);
      $(".footer-item-title").not(this).removeClass("rotate-arrow");
    });
  }

  // **************************************************************************************************
});
