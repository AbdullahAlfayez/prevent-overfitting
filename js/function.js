function addition() {
  var num1 = parseInt(document.getElementById("number1").value);
  var num2 = parseInt(document.getElementById("number2").value);
  var num3 = parseInt(document.getElementById("number3").value);
  var num4 = parseInt(document.getElementById("number4").value);
  var sumOfNumbers = num3 / (num4*(num2+num1));
  event.preventDefault();
  document.getElementById("result").innerHTML = sumOfNumbers;
  alert("Your answer is " + sumOfNumbers);
}