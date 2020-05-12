const moveTopBtn = document.querySelector(".move-top");
const moveTopBtnImg = moveTopBtn.querySelector("img");

let i = 0;

function goTop() {
  const currentScrollHeight = window.scrollY;
  setTimeout(function () {
    document.documentElement.scrollTop = currentScrollHeight - i;
    const speed = 1;
    i += speed;
    if (i < currentScrollHeight) {
      goTop();
    }
  }, 1);
}

function handleScroll() {
  const totalScrollHeight = document.documentElement.scrollHeight;
  if (document.documentElement.scrollTop === 0) {
    i = 0;
  }
  if (window.scrollY > (totalScrollHeight * 50) / 100) {
    moveTopBtnImg.style.opacity = 1;
  } else {
    moveTopBtnImg.style.opacity = 0;
  }
}

moveTopBtn.addEventListener("click", goTop);
document.addEventListener("scroll", handleScroll);
