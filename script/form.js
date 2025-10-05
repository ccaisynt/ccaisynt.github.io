document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  sessionStorage.setItem("answered", "true");
  window.location.href = "result.html";
});
