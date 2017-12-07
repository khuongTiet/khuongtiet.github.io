$(function () {
  const rotateIcons = anime({
    targets: '.uicon',
    rotate: {
      value: '1turn'
    }
  });

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > ($('#utility-bar').offset().top + $('#utility-bar').outerHeight())) {
      if (!$('.top-utility-bar').hasClass('side-scroll-utility')){
        rotateIcons.restart();
      }
      $('.top-utility-bar').addClass('side-scroll-utility');
    } else {
      $('.top-utility-bar').removeClass('side-scroll-utility');
      rotateIcons.restart();
    }
  });

  $('.info').on('click', '.info-head', function (e) {
    $(e.target).next().fadeToggle();
  });

  $('.courses').on('click', '.course-name', function (e) {
    $(e.target).next().slideToggle();
  });

  $('.utility-icon').on('click', function (e) {
    $('.utility-icon').removeClass('utility-icon-active');
    $(this).addClass('utility-icon-active');
  });

});
