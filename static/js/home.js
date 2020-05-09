//Slide DOM

const screen = document.querySelector(".slide__screen");
const screenItems = screen.querySelectorAll(".screen__content");
const screenLen = screen.children.length;

//Buttons DOM

const nextBtn = document.querySelector(".button-next");
const prevBtn = document.querySelector(".button-prev");

//Dots DOM

const dots = document.querySelector(".dots");
const dot = dots.querySelectorAll(".dot");

const SLIDE_SPEED = 500;
const itemWidth = 100 / (screenLen + 2);

//Screen css settings

screen.style.width = `${100 * (screenLen + 2)}%`;
screenItems.forEach(function (item) {
  item.style.width = `${itemWidth}%`;
});
screen.style.transform = `translateX(-${itemWidth}%)`;

//Copy first, last child and Paste back and forth

const firstItem = screen.firstElementChild;
const lastItem = screen.lastElementChild;
const clonedFirst = firstItem.cloneNode(true);
const clonedLast = lastItem.cloneNode(true);

screen.appendChild(clonedFirst);
screen.prepend(clonedLast);

//Set default index and slider status

let currentIndex = 0;
let sliding = false;

//Handle next button

function handleNextBtn() {
  if (!sliding) {
    sliding = true;
    if (currentIndex <= screenLen) {
      screen.style.transition = `${SLIDE_SPEED}ms`;
      screen.style.transform = `translateX(-${
        itemWidth * (currentIndex + 2)
      }%)`;
      dot[currentIndex].classList.remove("dot-active");
      currentIndex++;
      if (currentIndex !== screenLen)
        dot[currentIndex].classList.add("dot-active");
    }
    if (currentIndex === screenLen) {
      setTimeout(function () {
        screen.style.transition = "0ms";
        screen.style.transform = `translateX(-${itemWidth}%)`;
      }, SLIDE_SPEED);
      currentIndex = 0;
      dot[currentIndex].classList.add("dot-active");
    }
    console.log(currentIndex);
    preventClicks();
  }
}

//Handle previous button

function handlePrevBtn() {
  if (!sliding) {
    sliding = true;
    if (currentIndex <= screenLen) {
      screen.style.transition = `${SLIDE_SPEED}ms`;
      screen.style.transform = `translateX(-${itemWidth * currentIndex}%)`;
      dot[currentIndex].classList.remove("dot-active");
      currentIndex--;
      if (currentIndex !== -1) dot[currentIndex].classList.add("dot-active");
    }
    if (currentIndex === -1) {
      setTimeout(function () {
        screen.style.transition = "0ms";
        screen.style.transform = `translateX(-${itemWidth * screenLen}%)`;
      }, SLIDE_SPEED);
      currentIndex = 3;
      dot[currentIndex].classList.add("dot-active");
    }
    console.log(currentIndex);
    preventClicks();
  }
}

//Set function about slider status

function preventClicks() {
  setTimeout(function () {
    sliding = false;
  }, SLIDE_SPEED);
}

//Handle pagination

function handleDot(e) {
  const dotIndex = parseInt(e.target.dataset.index, 10);
  screen.style.transition = `${SLIDE_SPEED}ms`;
  screen.style.transform = `translateX(-${itemWidth * (dotIndex + 1)}%)`;
  dot[currentIndex].classList.remove("dot-active");
  currentIndex = dotIndex;
  dot[currentIndex].classList.add("dot-active");
}

function init() {
  //Button click
  nextBtn.addEventListener("click", handleNextBtn);
  prevBtn.addEventListener("click", handlePrevBtn);

  //Dot Click
  dot.forEach((dot) => {
    dot.addEventListener("click", handleDot);
  });
}

init();
