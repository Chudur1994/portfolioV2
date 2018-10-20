const projectList = document.querySelector("#list");
const completedBtn = document.querySelector(".buttons-completed");
const incompleteBtn = document.querySelector(".buttons-incomplete");
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
}

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
