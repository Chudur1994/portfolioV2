const makeProjectEl = project => {
  const projectEl = document.createElement("div");
  projectEl.classList.add("project");

  const image = document.createElement("div");
  image.classList.add("image");
  image.style.backgroundImage = `url(${project.image})`;
  projectEl.appendChild(image);

  const name = document.createElement("p");
  name.textContent = project.name;
  projectEl.appendChild(name);

  const link = document.createElement("a");
  link.classList.add("visit");
  link.href = project.url;
  link.textContent = "Visit";
  projectEl.appendChild(link);

  projectEl.addEventListener("click", function(e) {
    e.preventDefault();
  });

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

const updateSideNav = (navLink, sideNavElements) => {
  sideNavElements.forEach(function(navLink) {
    navLink.classList.remove("active");
  });
  // add active to clicked item
  navLink.classList.add("active");
};

// handles navigation events
const addEventListenerNav = (navLink, targetEl, sideNavElements) => {
  navLink.forEach(function(link) {
    link.addEventListener("click", e => {
      e.preventDefault();

      // if the clicked link is a side nav link...
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
