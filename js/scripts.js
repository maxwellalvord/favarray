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
  
  const ul = document.getElementById('one');

  for (i = 0; i <= newArray.length; i++) {
    const li = document.createElement("li"); // create li element.

    li.innerHTML = newArray[i]; // assigning text to li using array value.

    ul.appendChild(li); // append li to ul.
  }


load();
  });
});

