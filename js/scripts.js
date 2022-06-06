$(document).ready(function() {
  $("form#favthings").submit(function(event) {
  event.preventDefault();
  const answer1 = parseInt($("#input1").val())
  const answer2 = $("#input2").val();
  const answer3 = $("#input3").val();
  const answer4 = $("#input4").val();
  
  event.preventDefault();
  let array = [];
  array.push(answer1, answer2, answer3, answer4);
  array.pop();
  let newArray = array;
  

  $(".answer").text(newArray);
  $("#question").show();
  
  console.log(newArray);
  });
});

