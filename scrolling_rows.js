$('#controlR').click(function() {
  event.preventDefault();
  $('#content').animate({
    marginLeft: "-=400px"
  }, "fast");
});

$('#controlL').click(function() {
  event.preventDefault();
  $('#content').animate({
    marginLeft: "+=400px"
  }, "fast");
});

chapters = document.querySelectorAll('.chapter')
w = (chapters.length * 400) + (chapters.length * 10)
$('#content').css('width',  w)
