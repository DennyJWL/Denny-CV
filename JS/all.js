$(document).ready(function(){
  // navbar color change
  $(window).on("scroll",function(){
    let scrollDistance = $(window).scrollTop();
    let $navbar = $(".js-navbar");
    let $toggler = $(".js-toggler")
    if(scrollDistance>80){
      $navbar.addClass("navbar--colored");
      $toggler.removeClass("navbar-dark");
      $toggler.addClass("navbar-light")
    }
    else{
      $navbar.removeClass("navbar--colored");
      $toggler.removeClass("navbar-light");
      $toggler.addClass("navbar-dark")
    }
  })

  //wow
  new WOW().init();

})