const certiItem = document.querySelectorAll(".certification__item");
const certiFullImg = document.querySelectorAll(
  ".certification__item img:last-child"
);

const certiOverlay = document.querySelector(".certification__overlay"),
  certiOverlayClose = certiOverlay.querySelector("i");

const TRANSITION_SPEED = 500;

const clickCerti = (e) => {
  const nextSibling = e.target.nextSibling;
  nextSibling.classList.add("clicked");
  nextSibling.style.display = "block";
  certiOverlay.style.display = "block";
  nextSibling.style.transition = `${TRANSITION_SPEED}ms`;
  certiOverlay.style.transition = `${TRANSITION_SPEED}ms`;
  setTimeout(() => {
    nextSibling.style.opacity = "1";
    certiOverlay.style.opacity = "1";
  }, 20);
};

const certiDelay = (i) => {
  setTimeout(() => {
    certiFullImg[i].style.display = "none";
  }, TRANSITION_SPEED);
};

const closeCerti = () => {
  for (i = 0; i < certiFullImg.length; i++) {
    if (certiFullImg[i].classList.contains("clicked")) {
      certiFullImg[i].classList.remove("clicked");
      certiFullImg[i].style.opacity = "0";
      certiDelay(i);
    }
  }
  certiOverlay.style.opacity = "0";
  setTimeout(() => {
    certiOverlay.style.display = "none";
  }, TRANSITION_SPEED);
};

const init = () => {
  certiItem.forEach((item) => {
    item.addEventListener("click", clickCerti);
  });
  certiOverlayClose.addEventListener("click", closeCerti);
};

init();
