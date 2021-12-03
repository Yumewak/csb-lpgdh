function dados() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  document
    .querySelectorAll(".imgd")[0]
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelectorAll(".imgd")[1]
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").innerHTML = "Sigifredo Won";
  }
  if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner").innerHTML = "Salvatore Won";
  }
  if (randomNumber1 === randomNumber2) {
    document.querySelector(".winner").innerHTML = "Draw";
  }
}
