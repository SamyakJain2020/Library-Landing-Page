const categories = {
  Fiction: [
    0,
    {
      name: "The Bad guys",
      imageLink: "https://archive.org/services/img/badguysepisode120000blab",
      price: 100,
      isFree: true,
    },
    {
      name: "We are All Good People Here",
      imageLink: "https://covers.openlibrary.org/b/olid/OL27259293M-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "When the World Was Ours",
      imageLink: "https://covers.openlibrary.org/b/olid/OL32551125M-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "An Orphan’s Wish",
      imageLink: "https://covers.openlibrary.org/b/olid/OL32166612M-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Gone With the Wind",
      imageLink: "https://covers.openlibrary.org/b/olid/OL30148935M-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Mountain sing",
      imageLink: "https://covers.openlibrary.org/b/olid/OL28303508M-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "A thousand ships",
      imageLink: "https://covers.openlibrary.org/b/olid/OL28346189M-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Lost World",
      imageLink: "https://covers.openlibrary.org/b/olid/OL35718441M-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Girl Who Drank the Moon",
      imageLink: "https://covers.openlibrary.org/b/olid/OL26233073M-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Paris apartment",
      imageLink: "https://covers.openlibrary.org/b/olid/OL26233073M-M.jpg",
      price: 100,
      isFree: true,
    },
  ],
  Thriller: [
    0,
    {
      name: "Bazaar of bad dreams",
      imageLink: "https://covers.openlibrary.org/w/id/8362335-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Misery",
      imageLink: "https://covers.openlibrary.org/w/id/8259296-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Cell",
      imageLink: "https://covers.openlibrary.org/w/id/8288254-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Just after Sunset",
      imageLink: "https://covers.openlibrary.org/w/id/8494916-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Bear and the dragon",
      imageLink: "https://covers.openlibrary.org/w/id/9153760-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Insomnia",
      imageLink: "https://covers.openlibrary.org/w/id/7886954-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Under The Dome",
      imageLink: "https://covers.openlibrary.org/w/id/8275695-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Differrent Seasons",
      imageLink: "https://covers.openlibrary.org/b/id/8288253-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The green Mile",
      imageLink: "https://covers.openlibrary.org/b/id/9334655-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Iceberg",
      imageLink: "https://covers.openlibrary.org/b/id/272864-M.jpg",
      price: 100,
      isFree: true,
    },
  ],
  Romance: [
    0,
    {
      name: "Flatmates",
      imageLink: "https://covers.openlibrary.org/b/id/2397058-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Boy of my Dreams",
      imageLink: "https://covers.openlibrary.org/b/id/10735363-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Doorway to Forever",
      imageLink: "https://covers.openlibrary.org/b/id/3061760-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Jane Airhead",
      imageLink: "https://covers.openlibrary.org/b/id/6303063-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "A Soul so Wicked",
      imageLink: "https://covers.openlibrary.org/b/id/8002221-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "A Midsemester Nights Dream",
      imageLink: "https://covers.openlibrary.org/b/id/625611-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Hot Blue Sea",
      imageLink: "https://covers.openlibrary.org/b/id/9708207-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The white swan",
      imageLink: "https://covers.openlibrary.org/b/id/8038311-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Wicked Sacrifice",
      imageLink: "https://covers.openlibrary.org/w/id/764382-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Smitten Book club",
      imageLink: "https://covers.openlibrary.org/w/id/10344070-M.jpg",
      price: 100,
      isFree: true,
    },
  ],
  Kids: [
    0,
    {
      name: "Zoes Jungle",
      imageLink: "https://covers.openlibrary.org/w/id/7887873-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Lexi The firefly Fairy",
      imageLink: "https://covers.openlibrary.org/w/id/9251528-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Sky Camp",
      imageLink: "https://covers.openlibrary.org/w/id/7415249-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Witches supermarket",
      imageLink: "https://covers.openlibrary.org/w/id/8228163-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Skiing for the Prize",
      imageLink: "https://covers.openlibrary.org/w/id/9521942-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Elmer",
      imageLink: "https://covers.openlibrary.org/w/id/2989678-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Harry Potter and the Prisoner of Azkaban",
      imageLink: "https://covers.openlibrary.org/w/id/10580435-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "One small Dog",
      imageLink: "https://covers.openlibrary.org/b/id/1340125-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Just a little music",
      imageLink: "https://covers.openlibrary.org/b/id/8171095-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Wayership Down",
      imageLink: "https://covers.openlibrary.org/b/id/10139238-M.jpg",
      price: 100,
      isFree: true,
    },
  ],
  Textbooks: [
    0,
    {
      name: "Calculus",
      imageLink: "https://covers.openlibrary.org/w/id/602202-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Probability and Statistics",
      imageLink: "https://covers.openlibrary.org/w/id/363989-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Physical Geology",
      imageLink: "https://covers.openlibrary.org/w/id/4247562-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Basic concepts of Chemistry",
      imageLink: "https://covers.openlibrary.org/w/id/302083-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Basic Statistical Analysis",
      imageLink: "https://covers.openlibrary.org/w/id/1145749-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Advance Organic Chemistry",
      imageLink: "Advance Organic Chemistry",
      price: 100,
      isFree: true,
    },
    {
      name: "Astronomy",
      imageLink: "https://covers.openlibrary.org/w/id/1083921-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Analytical Geometry",
      imageLink: "https://covers.openlibrary.org/w/id/9693473-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Elements of Biology",
      imageLink: "https://covers.openlibrary.org/b/id/6493841-M.jpg",
      price: 100,
      isFree: true,
    },
  ],
  Fantasy: [
    0,
    {
      name: "The Hobbit",
      imageLink: "https://covers.openlibrary.org/b/id/8406786-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Around the world in eighty days",
      imageLink: "https://covers.openlibrary.org/b/id/6976035-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Two Towers",
      imageLink: "https://covers.openlibrary.org/b/id/8167231-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Return of the King",
      imageLink: "https://covers.openlibrary.org/b/id/6976035-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Fellowship of the Ring",
      imageLink: "https://covers.openlibrary.org/b/id/8474036-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "Prince Caspian",
      imageLink: "https://covers.openlibrary.org/b/id/45897-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The Secret Agent",
      imageLink: "https://covers.openlibrary.org/b/id/8239401-M.jpg",
      price: 100,
      isFree: true,
    },
    {
      name: "The magicians nephew",
      imageLink: "https://covers.openlibrary.org/b/id/1072931-M.jpg",
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
  innerHtml += `<span class="carousel__category">
  ${category}
  </span>`;
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
