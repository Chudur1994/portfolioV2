const projectList = document.querySelector("#list"); // holds list of project elementw
const completedBtn = document.querySelector(".buttons-completed");
const incompleteBtn = document.querySelector(".buttons-incomplete");
const socialEl = document.querySelector("#social"); // social buttons
const contactEl = document.querySelector("#contact");
const introEl = document.querySelector("#intro"); // intro section
const projectEl = document.querySelector("#projects"); // project section

// nav elements
const sideNav = document.querySelector("#side-nav");
const sideNavElements = document.querySelectorAll("#side-nav a");
const navIntro = document.querySelectorAll(".nav-intro");
const navProject = document.querySelectorAll(".nav-project");
const navContact = document.querySelectorAll(".nav-contact");

const completedProjectElements = []; // holds array of completed project elements to display
const incompleteProjectElements = []; // incomplete project elements

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
