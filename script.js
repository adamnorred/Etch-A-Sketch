const gridContainerSelector = document.querySelector(".container-main-grid");
// check in console if there is proper grid element count
const check = gridContainerSelector.childElementCount;
const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-value");

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

slider.addEventListener("input", function () {
  sliderText.value = this.value;
  removeGridChildNodes();
  makeGrid(this.value);
});

sliderText.addEventListener("input", function () {
  if (sliderText.value >= 1 && sliderText.value < 101) {
    slider.value = this.value;
    removeGridChildNodes();
    makeGrid(this.value);
  } else {
    removeGridChildNodes();
  }
});
