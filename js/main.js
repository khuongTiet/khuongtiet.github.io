$(function () {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > ($('#utility-bar').offset().top + $('#utility-bar').outerHeight())) {
      $('.top-utility-bar').addClass('side-scroll-utility');
      anime({
        targets: '.utility-icon',
        rotate: '1turn'
      });
    } else {
      $('.top-utility-bar').removeClass('side-scroll-utility');
    }
  });

  $('.info').on('click', '.info-head', function (e) {
    $(e.target).next().fadeToggle();
  });

  $('.courses').on('click', '.course-name', function (e) {
    $(e.target).next().slideToggle();
  })
});
