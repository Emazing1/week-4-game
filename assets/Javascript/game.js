 $(document).ready(function(){ 

  var userScore = 0;

  var Red =0

  var Blue =1

  var White =2

  var Green =3

  var randomNumber = 19 + Math.floor(Math.random() * 102);
    console.log(randomNumber);

  var red = 1 + Math.floor(Math.random() * 12);
    console.log(red);

  var blue = 1 + Math.floor(Math.random() * 12);
    console.log(blue);

  var white = 1 + Math.floor(Math.random() * 12);
    console.log(white);

  var green = 1 + Math.floor(Math.random() * 12);
    console.log(green);

  $('#randomNo').html(randomNumber);

  $('#yourScore').html(userScore);

  $('#ruby')
  .click(function() {
    var red = valueOne;
    console.log(red);

  });

   $('#sapphire')
  .click(function() {
    var Blue = valueTwo;
    console.log(valueBlue);

  });

   $('#diamond')
  .click(function() {
    var White = valueThree;
    console.log(valueYellow);

  });

  $('#Emerald')
  .click(function() {
    var Green = valueFour;
    console.log(valueGreen);

  });

  

    


})


