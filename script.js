/*
  This is just a sample project for my Git crash course. It doesn't do anything.
*/

console.log("Task Tracker Running...");

document.querySelector(".switcher").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.classList.toggle("switch-dark");
});
