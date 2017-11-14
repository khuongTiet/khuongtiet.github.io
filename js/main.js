$(function () {
  $('.info').on('click', '.info-head', function (e) {
    $(e.target).next().fadeToggle();
  });

  $('.courses').on('click', '.course-name', function (e) {
    $(e.target).next().slideToggle();
  })
});
