$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var favfoodInput = $("input#favfood").val();
    var musicInput= $("input#music").val();
    var catdogInput = $("input:radio[name=catdog]:checked").val();
    var birthdayInput = $("input#birthday").val();
    var hometownInput = $("input#hometown").val();
    var favoriteColorInput = $("#color").val();

    $(".person1").text(person1Input);
    $(".favfood").text(favfoodInput);
    $(".music").text(musicInput);
    $(".catdog").text(catdogInput);
    $(".birthday").text(birthdayInput);
    $(".hometown").text(hometownInput);
    $(".color").color(colorInput);

    $("#story").show();

    event.preventDefault();
  });
});
