const dropMenu = document.querySelector(".dropMenu").classList;

// Hamburger Menu button
document.querySelector(".menuIconWrapper").onclick = function() {
  document.querySelector(".forMobile").classList.toggle("mobileHamburgerMenu");
  document.querySelector(".menuIcon").classList.toggle("menuIconActive");
  document.querySelector("body").classList.toggle("lock");
  document.querySelector(".navbar.part3").classList.remove("navActive");
  dropMenu.remove("dropActive");
  dropMenu.remove("p3");
};

// Hamburger Menu Category button
document.querySelector(".navbar:nth-child(3)").onclick = function() {
  this.classList.toggle("navActive");
  dropMenu.remove("p3");
  dropMenu.toggle("dropActive");
  document.querySelector(".navSearch").classList.toggle("navSearchActive");
};

const bgBtnLeft = document.getElementsByClassName("bgBtn")[0];
const bgBtnRight = document.getElementsByClassName("bgBtn")[1];
const bgSlide = document.querySelector(".bgSlide");
let imgWidth = document.querySelector(".bgImage").width;
const imgLength = document.getElementsByClassName("bgImage").length;
const bgNumbers = document.getElementsByClassName("bgNumbers");
let childBack = 0;
let selectedImg = 0;
let timer = 0;
autoSlide();

function resetSelectedImageCircle() {
  let current = document.getElementsByClassName("selectedBg");
  current[0].className = current[0].className.replace(" selectedBg", "");
  //   for (let i = 0; i < current.length; i++){
  //     current[i].className = current[i].className.replace(" selectedBg", "");
  //   }
}

function nextButton() {
  childBack = -(selectedImg + 1) * imgWidth;
  if (childBack == -(imgLength * imgWidth)) {
    childBack = 0;
  }
  bgSlide.style.left = childBack + "px";
  resetSelectedImageCircle();
  let index = Math.abs(childBack / imgWidth);
  bgNumbers[index].classList.add("selectedBg");
  selectedImg = Math.round(Math.abs(childBack / imgWidth));
}

// Window Resize
window.addEventListener("resize", () => {
  imgWidth = document.querySelector(".bgImage").width;
  childBack = -imgWidth * selectedImg;
  bgSlide.style.left = childBack + "px";
});

// Auto Slide
function autoSlide() {
  timer = setInterval(() => {
    nextButton();
  }, 5000);
}

// Right Button
bgBtnRight.onclick = function() {
  clearInterval(timer);
  nextButton();
  autoSlide();
};

// Left Button
bgBtnLeft.onclick = function() {
  childBack = -(selectedImg - 1) * imgWidth;
  if (childBack == imgWidth) {
    childBack = 0;
  }
  bgSlide.style.left = childBack + "px";
  resetSelectedImageCircle();
  let index = Math.abs(childBack / imgWidth);
  bgNumbers[index].classList.add("selectedBg");
  selectedImg = Math.round(Math.abs(childBack / imgWidth));
};

// Bottom Slider
for (let i = 0; i < bgNumbers.length; i++) {
  bgNumbers[i].addEventListener("click", function() {
    resetSelectedImageCircle();
    childBack = -([i] * imgWidth);
    selectedImg = Math.round(Math.abs(childBack / imgWidth));
    bgSlide.style.left = -([i] * imgWidth) + "px";
    this.className += " selectedBg"; // bgNumbers[i].classList.add("selectedBg");
    console.log(selectedImg);
  });
}
