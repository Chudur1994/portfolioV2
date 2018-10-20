"use strict";

var makeProjectEl = function makeProjectEl(project) {
  var projectEl = document.createElement("div");
  projectEl.classList.add("project");
  var image = document.createElement("img");
  image.src = project.image;
  projectEl.appendChild(image);
  var name = document.createElement("p");
  name.textContent = project.name;
  projectEl.appendChild(name);
  return projectEl;
};

var updateBtnView = function updateBtnView(clickedButton, c1, otherButton, c2) {
  clickedButton.style.color = c1; // color

  clickedButton.style.background = "#e8e8e8"; // white

  clickedButton.style.boxShadow = "0px 0px 10px 2px ".concat(c1); // color box shadow

  otherButton.style.color = "#e8e8e8"; // white

  otherButton.style.background = c2; // color

  otherButton.style.boxShadow = "5px 5px 10px -4px rgba(0, 0, 0, 0.75)"; // regular box shadow
};