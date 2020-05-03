const header = document.querySelector("header");

const itemName = document.querySelectorAll(".item__name"),
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

itemName.forEach(function (itemName) {
  itemName.addEventListener("mouseenter", handleBlock);
  itemName.addEventListener("mouseenter", handleEffect);
  itemName.addEventListener("mouseleave", handleDelEffect);
});

header.addEventListener("mouseleave", handleLeave);
