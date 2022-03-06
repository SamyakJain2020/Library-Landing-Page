const categories = {
  kids: [
    0,
    {
      name: "ABC",
      imageLink: "images/1.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/2.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/3.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/4.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/5.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/6.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/7.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/8.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/9.jpeg",
      price: 100,
      isFree: true,
    },
  ],
  raomance: [
    0,
    {
      name: "ABC",
      imageLink: "images/1.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/2.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/3.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/4.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/5.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/6.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/7.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/8.jpeg",
      price: 100,
      isFree: true,
    },
    {
      name: "ABC",
      imageLink: "images/9.jpeg",
      price: 100,
      isFree: true,
    },
  ],
};

function createSliderComponent(category) {
  // should not add always
  if (document.getElementById(category)) {
    return;
  }
  const totalSlides = categories[category].length - 1;
  //   const bodyEl = document.getElementsByTagName("body")[0];
  const bodyEl = document.getElementById("sam");
  const carouselEl = document.createElement("div");

  carouselEl.className = "carousel";
  carouselEl.id = category;

  bodyEl.appendChild(carouselEl);

  // for adding images inside it.
  let innerHtml = "";
  for (let i = 1; i < categories[category].length; i++) {
    innerHtml += `<div class="carousel__item ${
      i < 4 ? "carousel__item--visible" : "carousel__item--hidden"
    }">
            <img src="${categories[category][i].imageLink}" />
       </div>`;
  }

  // for adding button inside it
  innerHtml += `<div class="carousel__actions">
            <button id="${
              category + "__" + "carousel__button--prev"
            }"  aria-label="Previous slide"><</button>
            <button id="${
              category + "__" + "carousel__button--next"
            }"  aria-label="Next slide">></button>
        </div>`;
  carouselEl.innerHTML = innerHtml;

  document
    .getElementById(`${category + "__" + "carousel__button--next"}`)
    .addEventListener("click", () => {
      next(category, totalSlides);
    });
  document
    .getElementById(`${category + "__" + "carousel__button--prev"}`)
    .addEventListener("click", () => {
      prev(category, totalSlides);
    });
} // createSliderComponent

// register events
const next = (category, totalSlides) => {
  if (categories[category][0] + 3 < totalSlides) {
    _moveToNextSlide(category);
  }
};

const prev = (category) => {
  if (categories[category][0] - 1 > -1) {
    _moveToPrevSlide(category);
  }
};

function _updateSlidePosition(hSlide, vSlide, slides) {
  slides[hSlide].classList.remove("carousel__item--visible");
  slides[hSlide].classList.add("carousel__item--hidden");
  slides[vSlide].classList.add("carousel__item--visible");
}

const _moveToNextSlide = (category) => {
  const slides = document.getElementById(category).getElementsByTagName("div");
  const totalSlides = slides.length - 1;
  let hSlide = categories[category][0];
  _updateSlidePosition(
    hSlide,
    (categories[category][0] + 3) % totalSlides,
    slides
  );
  categories[category][0]++;
};

/* [0 [1 2] 3] 4 5 6*/

function _moveToPrevSlide(category) {
  const slides = document.getElementById(category).getElementsByTagName("div");
  const totalSlides = slides.length - 1;
  let hSlide = categories[category][0] + 2;
  _updateSlidePosition(hSlide, categories[category][0] - 1, slides);
  categories[category][0]--;
}

for (let category in categories) {
  createSliderComponent(category);
}
