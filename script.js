const gridContainerDom = document.querySelector(".container-main-grid");

for (let element = 0; element < 19; element++) {
  const gridElementDom = document.createElement("div");
  gridElementDom.classList.add("grid-element");
  gridContainerDom.appendChild(gridElementDom);
}
