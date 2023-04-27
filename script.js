const gridContainerSelector = document.querySelector(".container-main-grid");
const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-value");
const numX = document.querySelectorAll(".num");

function makeGrid(number) {
  for (let element = 0; element < number * number; element++) {
    const gridElementDom = document.createElement("div");
    gridElementDom.classList.add("grid-element");
    gridElementDom.style.height = `calc(${100 / number}%)`;
    gridElementDom.style.width = `calc(${100 / number}%)`;
    gridContainerSelector.appendChild(gridElementDom);
    listenForMOver();
  }
}

function removeGridChildNodes() {
  gridContainerSelector.replaceChildren();
}

function listenForMOver() {
  const allGridElements = document.querySelectorAll(".grid-element");
  allGridElements.forEach((gridEle) => {
    gridEle.addEventListener("mouseover", () => {
      gridEle.style.backgroundColor = "black";
    });
  });
}

makeGrid(1);

slider.addEventListener("input", function () {
  sliderText.value = this.value;
  numX.forEach(function (num) {
    num.textContent = sliderText.value;
  });
  removeGridChildNodes();
  makeGrid(this.value);
});

sliderText.addEventListener("input", function () {
  if (sliderText.value >= 1 && sliderText.value <= 100) {
    slider.value = this.value;
    numX.forEach(function (num) {
      num.textContent = slider.value;
    });
    removeGridChildNodes();
    makeGrid(this.value);
  } else {
    numX.forEach(function (num) {
      num.textContent = 0;
    });
    removeGridChildNodes();
  }
});
