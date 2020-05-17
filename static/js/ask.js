const askSelect = document.querySelector(".ask__select");
const askInput = document.querySelectorAll(".input-02");

askSelect.addEventListener("change", () => {
  askInput[1].value = askSelect.options[askSelect.selectedIndex].value;
});
