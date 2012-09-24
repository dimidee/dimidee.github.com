$(document).ready(function() {
  $("#impress").on("click", function(event){
    $('#target').load("impress.html");
  });
  $("#fliesen_a").on("click", function(event){
    $('#pic').attr("src","img/fliesen_a.jpg");
  });
  $("#fliesen_b").on("click", function(event){
    $('#pic').attr("src","img/fliesen_b.jpg");
  });
});
