"use strict";

var projectList = document.querySelector("#list"); // holds list of project elementw

var completedBtn = document.querySelector(".buttons-completed");
var incompleteBtn = document.querySelector(".buttons-incomplete");
var socialEl = document.querySelector("#social"); // social buttons

var contactEl = document.querySelector("#contact");
var introEl = document.querySelector("#intro"); // intro section

var projectEl = document.querySelector("#projects"); // project section

var toProjects = document.querySelector(".toProjects"); // nav elements

var sideNav = document.querySelector("#side-nav");
var sideNavElements = document.querySelectorAll("#side-nav a");
var navIntro = document.querySelectorAll(".nav-intro");
var navProject = document.querySelectorAll(".nav-project");
var navContact = document.querySelectorAll(".nav-contact");
var hiddenEmail = document.querySelector(".hiddenEmail"); // side nav elements

var introLink = document.querySelector(".side-nav-intro");
var projectLink = document.querySelector(".side-nav-projects");
var contactLink = document.querySelector(".side-nav-contact");
var completedProjectElements = []; // holds array of completed project elements to display

var incompleteProjectElements = []; // incomplete project elements

init(); // load projects and create elements to use later

function initData() {
  projects.completed.forEach(function (project) {
    completedProjectElements.push(makeProjectEl(project));
  });
  projects.incomplete.forEach(function (project) {
    incompleteProjectElements.push(makeProjectEl(project));
  });
} // append projects to DOM


function loadData(projectsArr) {
  projectsArr.forEach(function (project, index) {
    projectList.appendChild(project);
    setTimeout(function () {
      project.classList.add("active");
    }, index * 50);
  });
}

function init() {
  initData(); // load up data

  loadData(completedProjectElements); // initially add completed projects to the DOM

  showSideNav(); // navigation event listeners

  addEventListenerNav(navIntro, introEl, sideNavElements);
  addEventListenerNav(navProject, projectEl, sideNavElements);
  addEventListenerNav(navContact, contactEl, sideNavElements);
} // push project elements out of screen


function resetProjects(projectsArr) {
  projectsArr.forEach(function (projectEl) {
    projectEl.classList.remove("active");
  });
}

completedBtn.addEventListener("click", function (e) {
  e.preventDefault();
  updateBtnView(this, "#2ebf91", incompleteBtn, "#8360c3");
  projectList.innerHTML = "";
  resetProjects(completedProjectElements);
  loadData(completedProjectElements);
});
incompleteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  updateBtnView(this, "#8360c3", completedBtn, "#2ebf91");
  projectList.innerHTML = "";
  resetProjects(incompleteProjectElements);
  loadData(incompleteProjectElements);
});
document.addEventListener("scroll", function () {
  stickySocial();
  showSideNav(); // updateSideNavBasedOnScroll("#intro", introLink, sideNavElements);
  // updateSideNavBasedOnScroll("#projects", projectLink, sideNavElements);
  // updateSideNavBasedOnScroll("#contact", contactLink, sideNavElements);
}); // Messes up sidenav style activation, needs more work
// function updateSideNavBasedOnScroll(selector, sideNavLink, sideNavElements) {
//   const element = document.querySelector(selector);
//   const contentPositionFromTop = element.getBoundingClientRect().top;
//   const docTopPosition = document.body.scrollTop;
//   const elementHeight = element.offsetHeight;
//   // TODO: MORE CALCULATIONS TO COMPENSATE FOR THE SMALL HEIGHT OF THE CONTACT
//   // as of now, the sidenav link for contact won't activate because the page isn't
//   // long enough for the contact section's top to be less than 0
//   if (
//     contentPositionFromTop <= docTopPosition &&
//     contentPositionFromTop + elementHeight > docTopPosition
//   ) {
//     updateSideNav(sideNavLink, sideNavElements);
//   }
// }
// TODO

function stickySocial() {}

function showSideNav() {
  // bottom position of intro section
  var positionFromTop = document.querySelector("#intro").getBoundingClientRect().bottom; // show side nav

  if (positionFromTop <= 0) {
    sideNav.classList.remove("disabled");
  } else {
    sideNav.classList.add("disabled");
  }
}

hiddenEmail.addEventListener("click", function () {
  contactEl.scrollIntoView({
    behavior: "smooth"
  });
});
hiddenEmail.addEventListener("mouseover", function () {
  this.textContent = "uxb6317@rit.edu";
  this.style.color = "rgba(211, 97, 53, 1)"; // orange
});
hiddenEmail.addEventListener("mouseout", function () {
  this.textContent = "contact me!";
  this.style.color = "rgba(40, 43, 40, 1)"; // black
});
toProjects.addEventListener("click", function () {
  projectEl.scrollIntoView({
    behavior: "smooth"
  });
});