const gridContainerSelector = document.querySelector(".container-main-grid");

function makeGrid(number) {
  for (let element = 0; element < number * number; element++) {
    const gridElementDom = document.createElement("div");
    gridElementDom.classList.add("grid-element");
    gridElementDom.style.height = `calc(${100 / number}%)`;
    gridElementDom.style.width = `calc(${100 / number}%)`;
    gridContainerSelector.appendChild(gridElementDom);
  }
}

function removeGridChildNodes() {
  while (gridContainerSelector.hasChildNodes()) {
    gridContainerSelector.removeChild(gridContainerSelector.firstChild);
  }
}

makeGrid(1);

// check in console if there is proper grid element count
const check = gridContainerSelector.childElementCount;

// slider
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");

slider.addEventListener("input", function () {
  sliderValue.value = this.value;
  removeGridChildNodes();
  makeGrid(this.value);
});

sliderValue.addEventListener("input", function () {
  if (sliderValue.value >= 1 && sliderValue.value < 101) {
    slider.value = this.value;
    removeGridChildNodes();
    makeGrid(this.value);
  } else {
    removeGridChildNodes();
  }
});
