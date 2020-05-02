const firstSlide = document.querySelector(".carousel__img:first-child");

const SHOWING_CLASS = "showing";

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (!currentSlide) {
    firstSlide.classList.add(SHOWING_CLASS);
  } else {
    const nextSlide = currentSlide.nextElementSibling;
    currentSlide.classList.remove(SHOWING_CLASS);
    if (!nextSlide) {
      firstSlide.classList.add(SHOWING_CLASS);
    } else {
      nextSlide.classList.add(SHOWING_CLASS);
    }
  }
}

slide();
