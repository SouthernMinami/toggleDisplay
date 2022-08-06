const displayNone = (ele) => {
  ele.classList.remove("d-block");
  ele.classList.add("d-none");
}

const displayBlock = (ele) => {
  ele.classList.remove("d-none");
  ele.classList.add("d-block");
}

const toggleDisplay = (ele1, ele2) => {
  if (ele1.classList.contains("d-block")) {
    displayNone(ele1);
    displayBlock(ele2);
  } else {
    displayNone(ele2);
    displayBlock(ele1);
  };
}
