const d = new Date();
const hour = d.getHours();

if (hour < 12) {
  document
    .querySelector(".main-photo")
    .setAttribute("src", "images/morning.png");
  document.querySelector("body").style.color = "#FCDAB7";
  document.querySelector(".top-container").style.backgroundColor = "#133B5C";
  document.querySelector(".middle-container").style.backgroundColor = "#1E5F74";
  document.querySelector(".hr").style.backgroundColor = "#1E5F74";
} else {
  if (hour < 18) {
    document
      .querySelector(".main-photo")
      .setAttribute("src", "images/afternoon.png");
    document.querySelector("body").style.color = "#E0C097";
    document.querySelector(".top-container").style.backgroundColor = "#5C3D2E";
    document.querySelector(".middle-container").style.backgroundColor =
      "#B85C38";
    document.querySelector(".hr").style.backgroundColor = "#B85C38";
  } else {
    document
      .querySelector(".main-photo")
      .setAttribute("src", "images/evening.png");
    document.querySelector("body").style.color = "#E9A6A6";
    document.querySelector(".top-container").style.backgroundColor = "#3F3351";
    document.querySelector(".middle-container").style.backgroundColor =
      "#864879";
    document.querySelector(".hr").style.backgroundColor = "#864879";
  }
}
