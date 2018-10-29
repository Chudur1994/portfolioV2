"use strict";

var makeProjectEl = function makeProjectEl(project) {
  var projectEl = document.createElement("div");
  projectEl.classList.add("project");
  var image = document.createElement("div");
  image.classList.add("image");
  image.style.backgroundImage = "url(".concat(project.image, ")");
  projectEl.appendChild(image);
  var name = document.createElement("p");
  name.textContent = project.name;
  projectEl.appendChild(name);
  var link = document.createElement("a");
  link.classList.add("visit");
  link.href = project.url;
  link.textContent = "Visit";
  projectEl.appendChild(link);
  projectEl.addEventListener("click", function (e) {
    e.preventDefault();
    window.open(project.url, "_blank");
  });
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

var updateSideNav = function updateSideNav(navLink, sideNavElements) {
  sideNavElements.forEach(function (navLink) {
    navLink.classList.remove("active");
  }); // add active to clicked item

  navLink.classList.add("active");
}; // handles navigation events


var addEventListenerNav = function addEventListenerNav(navLink, targetEl, sideNavElements) {
  navLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // if the clicked link is a side nav link...

      if (e.path.includes(document.querySelector("#side-nav"))) {
        // remove active class from all nav items
        updateSideNav(link, sideNavElements);
      }

      targetEl.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
};