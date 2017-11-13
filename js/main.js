$(function() {
  $('.info').on('click', '.info-head', function(e) {
    $(e.target).next().toggle();
  });
  $('#banner').parallax();
});
