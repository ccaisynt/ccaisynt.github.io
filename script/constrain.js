const checkboxes = document.querySelectorAll(".agree");
const startBtn = document.getElementById("startBtn");

function checkAll() {
  let allChecked = true;
  checkboxes.forEach((cb) => {
    if (!cb.checked) allChecked = false;
  });
  startBtn.disabled = !allChecked;
}

checkboxes.forEach((cb) => cb.addEventListener("change", checkAll));

document
  .getElementById("agreementForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    sessionStorage.setItem("agreed", "true");
    window.location.href = "form.html";
  });
