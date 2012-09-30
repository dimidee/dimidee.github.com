$(document).ready(function() {
  $("#impress").on("click", function(event){
    $('#target').load("impress.html");
  });
  $("#gallery").on("click", function(event){
    $('#pic').attr("src","img/dimi_05.jpg");
  });
});
