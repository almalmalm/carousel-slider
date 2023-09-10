// Carousel v3

const slider = document.querySelector('.carousel__slider');
const arrowLeft = document.querySelector('.carousel__arrow_left');
const arrowRight = document.querySelector('.carousel__arrow_right');

const btnParents = document.querySelector('.carousel__controls ul');

let sliderIndex = 0;

function setIndex() {
  document.querySelector('.carousel__controls .active').classList.remove('active');
  slider.style.transform = `translate(${sliderIndex * -20}%)`;
}

document.querySelectorAll('.carousel__controls li').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    sliderIndex = index;
    if (sliderIndex < 1) {
      arrowLeft.classList.add('unactive');
    }
    if (sliderIndex > 3) {
      arrowRight.classList.add('unactive');
    }
    if (sliderIndex > 0) {
      arrowLeft.classList.remove('unactive');
    }
    if (sliderIndex < 4) {
      arrowRight.classList.remove('unactive');
    }
    setIndex();
    btn.classList.add('active');
  });
});

arrowLeft.addEventListener('click', () => {
  sliderIndex = sliderIndex > 0 ? sliderIndex - 1 : 0;
  if (sliderIndex < 1) {
    arrowLeft.classList.add('unactive');
  }
  if (sliderIndex > 0) {
    arrowLeft.classList.remove('unactive');
  }
  if (sliderIndex < 4) {
    arrowRight.classList.remove('unactive');
  }
  setIndex();
  btnParents.children[sliderIndex].classList.add('active');
});

arrowRight.addEventListener('click', () => {
  sliderIndex = sliderIndex < 4 ? sliderIndex + 1 : 4;
  console.log(sliderIndex);
  if (sliderIndex > 3) {
    arrowRight.classList.add('unactive');
  }
  if (sliderIndex > 0) {
    arrowLeft.classList.remove('unactive');
  }
  if (sliderIndex < 4) {
    arrowRight.classList.remove('unactive');
  }
  setIndex();
  btnParents.children[sliderIndex].classList.add('active');
});

// Carousel v3
