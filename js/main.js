// Select a size function
function selectSize() {
  let select_size = document.getElementById("select-size");
  let size2t = document.getElementById("size2t");
  let size3t = document.getElementById("size3t");
  let size4t = document.getElementById("size4t");
  let size5 = document.getElementById("size5");
  let size6 = document.getElementById("size6");
  let size7 = document.getElementById("size7");
  let sizeS = document.getElementById("sizeS");
  let sizeM = document.getElementById("sizeM");
  let sizeL = document.getElementById("sizeL");
  let sizeXL = document.getElementById("sizeXL");

  select_size.innerHTML = size.innerHTML;
  size.style.backgroundColor = "#10005f";
  size.style.color = "#ffffff";
}
