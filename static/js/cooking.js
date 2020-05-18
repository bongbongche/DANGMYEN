const cookBtn = document.querySelector(".cooking__btn");
const cookBtnIcon = cookBtn.querySelector("i");
const hidden = document.querySelector(".cooking__hidden");

const handleCookingList = () => {
  if (cookBtnIcon.classList.contains("fa-plus")) {
    cookBtnIcon.classList.remove("fa-plus");
    cookBtnIcon.classList.add("fa-minus");
    hidden.style.height = "300px";
  } else {
    cookBtnIcon.classList.remove("fa-minus");
    cookBtnIcon.classList.add("fa-plus");
    hidden.style.height = "0";
  }
};

cookBtn.addEventListener("click", handleCookingList);
