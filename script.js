const counter = document.querySelector(".count"),
  buttons = document.querySelector(".buttons");

result = (e) => {
  if (e.target.classList.contains("add")) {
    counter.innerHTML++;
    changeColor();
  } else if (e.target.classList.contains("subtract")) {
    counter.innerHTML--;
    changeColor();
  } else {
    counter.innerHTML = 0;
    changeColor();
  }
};

changeColor = () => {
  if (counter.innerHTML > 0) {
    counter.style.color = "purple";
  } else if (counter.innerHTML < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "white";
  }
};

buttons.addEventListener("click", result);
