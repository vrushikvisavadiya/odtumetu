document.getElementById("sidebarToggle").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("sidebarToggle");
  btn.classList.toggle("collapsed-toggle");
  sidebar.classList.toggle("collapsed");
});
