const projectList = document.querySelector("#list"); // holds list of project elements
const completedBtn = document.querySelector(".buttons-completed");
const incompleteBtn = document.querySelector(".buttons-incomplete");
const socialEl = document.querySelector("#social"); // social buttons
const contactEl = document.querySelector("#contact");
const introEl = document.querySelector("#intro"); // intro section
const projectEl = document.querySelector("#projects"); // project section
const toProjects = document.querySelector(".toProjects");

// nav elements
const navIntro = document.querySelectorAll(".nav-intro");
const navProject = document.querySelectorAll(".nav-project");
const navContact = document.querySelectorAll(".nav-contact");
const hiddenEmail = document.querySelector(".hiddenEmail");

// side nav elements
const sideNav = document.querySelector("#side-nav");
const sideNavElements = document.querySelectorAll("#side-nav a");
const introLink = document.querySelector(".side-nav-intro");
const projectLink = document.querySelector(".side-nav-projects");
const contactLink = document.querySelector(".side-nav-contact");

// featured project
const featuredProject = document.querySelector(".featured-project");

const completedProjectElements = []; // holds array of completed project elements to display
const incompleteProjectElements = []; // incomplete project elements

featuredProject.addEventListener("click", function(e) {
  e.preventDefault();
  window.open("https://chudur1994.github.io/pokestoreV2/", "_blank");
});

init();

// load projects and create elements to use later
function initData() {
  projects.completed.forEach(project => {
    completedProjectElements.push(makeProjectEl(project));
  });

  projects.incomplete.forEach(project => {
    incompleteProjectElements.push(makeProjectEl(project));
  });
}

// append projects to DOM
function loadData(projectsArr) {
  projectsArr.forEach(function(project, index) {
    projectList.appendChild(project);
    setTimeout(() => {
      project.classList.add("active");
    }, index * 50);
  });
}

function init() {
  initData(); // load up data
  loadData(completedProjectElements); // initially add completed projects to the DOM
  showSideNav();

  // navigation event listeners
  addEventListenerNav(navIntro, introEl, sideNavElements);
  addEventListenerNav(navProject, projectEl, sideNavElements);
  addEventListenerNav(navContact, contactEl, sideNavElements);
}

// push project elements out of screen
function resetProjects(projectsArr) {
  projectsArr.forEach(function(projectEl) {
    projectEl.classList.remove("active");
  });
}

completedBtn.addEventListener("click", function(e) {
  e.preventDefault();
  updateBtnView(this, "#2ebf91", incompleteBtn, "#8360c3");
  projectList.innerHTML = "";
  resetProjects(completedProjectElements);
  loadData(completedProjectElements);
});

incompleteBtn.addEventListener("click", function(e) {
  e.preventDefault();
  updateBtnView(this, "#8360c3", completedBtn, "#2ebf91");
  projectList.innerHTML = "";
  resetProjects(incompleteProjectElements);
  loadData(incompleteProjectElements);
});

document.addEventListener("scroll", () => {
  stickySocial();
  showSideNav();
});

// TODO
function stickySocial() {}

function showSideNav() {
  // bottom position of intro section
  let positionFromTop = document.querySelector("#intro").getBoundingClientRect()
    .bottom;

  // show side nav
  if (positionFromTop <= 0) {
    sideNav.classList.remove("disabled");
  } else {
    sideNav.classList.add("disabled");
  }
}

hiddenEmail.addEventListener("click", function() {
  contactEl.scrollIntoView({
    behavior: "smooth"
  });
});

hiddenEmail.addEventListener("mouseover", function() {
  this.textContent = "uxb6317@rit.edu";
  this.style.color = "rgba(211, 97, 53, 1)"; // orange
});

hiddenEmail.addEventListener("mouseout", function() {
  this.textContent = "contact me!";
  this.style.color = "rgba(40, 43, 40, 1)"; // black
});

toProjects.addEventListener("click", () => {
  projectEl.scrollIntoView({
    behavior: "smooth"
  });
});
