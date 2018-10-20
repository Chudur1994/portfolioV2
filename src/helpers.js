const makeProjectEl = project => {
  const projectEl = document.createElement("div");
  projectEl.classList.add("project");

  const image = document.createElement("img");
  image.src = project.image;
  projectEl.appendChild(image);

  const name = document.createElement("p");
  name.textContent = project.name;
  projectEl.appendChild(name);

  return projectEl;
};

const updateBtnView = (clickedButton, c1, otherButton, c2) => {
  clickedButton.style.color = c1; // color
  clickedButton.style.background = "#e8e8e8"; // white
  clickedButton.style.boxShadow = `0px 0px 10px 2px ${c1}`; // color box shadow

  otherButton.style.color = "#e8e8e8"; // white
  otherButton.style.background = c2; // color
  otherButton.style.boxShadow = "5px 5px 10px -4px rgba(0, 0, 0, 0.75)"; // regular box shadow
};
