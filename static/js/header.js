// Sub nav open

const header = document.querySelector("header");

const menuItem = document.querySelectorAll(".menu__item"),
  subMenu = document.querySelectorAll(".menu__sub"),
  subMenuBg = document.querySelector(".menu__sub_bg");

const effect = document.querySelectorAll(".line-blue");

function handleBlock() {
  subMenuBg.style.display = "block";
  subMenu.forEach(function (subMenu) {
    subMenu.style.display = "block";
  });
}

function handleNone() {
  subMenuBg.style.display = "none";
  subMenu.forEach(function (subMenu) {
    subMenu.style.display = "none";
  });
}

function handleLeave(e) {
  if (e) {
    handleNone();
  }
}

function handleEffect(e) {
  effect.forEach(function (blueLine) {
    if (e.target.dataset.index === blueLine.dataset.index) {
      blueLine.style.display = "block";
    }
  });
}

function handleDelEffect(e) {
  effect.forEach(function (blueLine) {
    if (e.target.dataset.index === blueLine.dataset.index) {
      blueLine.style.display = "none";
    }
  });
}

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("mouseenter", handleBlock);
  menuItem.addEventListener("mouseenter", handleEffect);
  menuItem.addEventListener("mouseleave", handleDelEffect);
});

header.addEventListener("mouseleave", handleLeave);

// Modal nav

const mainNavModalBtn = document.querySelector(
  ".main-nav__button a:nth-child(2)"
);

const modalBg = document.querySelector(".modal-bg"),
  modalNav = document.querySelector(".modal-nav"),
  modalNavClose = modalNav.querySelector(".modal-nav__close");

const handleClick = () => {
  modalBg.style.display = "block";
  modalNav.style.display = "block";
  handleNone();
  menuItem.forEach(function (menuItem) {
    menuItem.removeEventListener("mouseenter", handleBlock);
  });
};

const handleClose = () => {
  modalBg.style.display = "none";
  modalNav.style.display = "none";
  menuItem.forEach(function (menuItem) {
    menuItem.addEventListener("mouseenter", handleBlock);
  });
};

mainNavModalBtn.addEventListener("click", handleClick);
modalNavClose.addEventListener("click", handleClose);
modalBg.addEventListener("click", handleClose);
