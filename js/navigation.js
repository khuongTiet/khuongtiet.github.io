// remove the .html from all links to clean up the url once finished working on a page

document.getElementById("header-content").innerHTML =
'<ul class="topnav" id ="headerTopNav">' +
  '<li><a href="./index.html">Home</a></li>' +
  '<li class="dropdown">' +
    '<a href="javascript:void(0)" class="dropbtn">Projects</a>' +
    '<div class="dropdown-content">' +
      '<a href=./sgsearch>SGSearch</a>' +
      '<a href=./choose>Choose</a>' +
      '<a href=#WIP2>WIP</a>' +
    '</div>' +
  '</li>' +
  '<li><a href=./pdf/Resume.pdf>Resume</a></li>' +
  '<li><a href="./contact.html">Contact</a></li>' +
  '<li style="float:right"><a class="icon" href="https://github.com/khuongTiet"><img src=./img/giticon3.png></a></li>' +
'</ul>';
