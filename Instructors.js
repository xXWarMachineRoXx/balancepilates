const instructors = [
  ["Tommy clark","Yoga Dance","./assets/images/instructors/Tommy-Clark.png"],
  ["Ella Claire","Yoga Dance","./assets/images/instructors/Ella-Claire.png"],
  ["Montomegery Zo","Pilates Master","./assets/images/instructors/Montogommery-zo.png"],
  ["Jane White","Balance Pilates Teacher","./assets/images/instructors/Jane-White.png"],
  
];

function onLoad() {
  let currentCardsPerSlide = 4;

  function getCardsPerSlide(width) {
      if (width < 767) {
          // XS
          return 1;
      }

      if (width < 991) {
          // SM
          return 2;
      }

      if (width < 1199) {
          // MD
          return 3;
      }
      if (width < 1199) {
        // MD
        return 3;
      }
      if(width<1440){
        return 4;
      }
   

      return currentCardsPerSlide;
  }

  function createCard(index) {
      const instructor = document.createElement("div");
    //   instructor.style.width = "18rem";
      instructor.classList.add("instructor");

      instructor.innerHTML = `  <div class="instructor-body card">
                          <div class="instructor-image">
                              <img src =${instructors[index][2]}></img>
                          </div>
                          <h4 class="instructor-title my-3 ">${instructors[index][0]}</h4>
                          <p class="instructor-text ">${instructors[index][1]}</p>
                          
                      </div>`;

      return instructor;
  }

  function generateCarousel() {
      const row = document.getElementById("recipeCarousel");

      row.innerHTML = "";

      const carousel = document.createElement("div");
      carousel.id = `Instructors`;
      carousel.classList.add("carousel", "slide","p-3");
      carousel.dataset.bsRide = true;

      const carouselIndicators = document.createElement("div");
      carouselIndicators.classList.add("carousel-indicators");

      const carouselInner = document.createElement("div");
      carouselInner.classList.add("carousel-inner");

      const buttonPrev = document.createElement("button");
      buttonPrev.classList.add("carousel-control-prev");
      buttonPrev.dataset.bsTarget = `#${carousel.id}`;
      buttonPrev.dataset.bsSlide = "prev";
      buttonPrev.setAttribute("type", "button");

      buttonPrev.innerHTML = `<span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>`;

      const buttonNext = document.createElement("button");
      buttonNext.classList.add("carousel-control-next");
      buttonNext.dataset.bsTarget = `#${carousel.id}`;
      buttonNext.dataset.bsSlide = "next";
      buttonNext.setAttribute("type", "button");

      buttonNext.innerHTML = `<span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>`;

      carousel.append(
          carouselIndicators,
          carouselInner,
          buttonPrev,
          buttonNext
      );

      const numberOfSlides = instructors.length / currentCardsPerSlide;

      for (let index = 0; index < numberOfSlides; index++) {
          // Create indicators for slide
          const button = document.createElement("button");
          button.dataset.bsTarget = "#carouselExampleIndicators";
          button.dataset.bsSlideTo = `${index}`;
          if (index === 0) button.classList.add("active");

          // Create slides
          const div = document.createElement("div");
          div.classList.add("carousel-item");
          if (index === 0) div.classList.add("active");

          const cardContainer = document.createElement("div");
          cardContainer.classList.add(
              "d-flex",
              "justify-content-center",
              "py-5"
          );

          for (
              let j = index * currentCardsPerSlide;
              j < (index + 1) * currentCardsPerSlide;
              j++
          ) {
              const instructor = instructors[j];
              if (!instructor) continue;
              cardContainer.append(createCard(j));
              div.append(cardContainer);
              carouselInner.append(div);
              carouselIndicators.append(button);
          }
      }

      row.append(carousel);
      new bootstrap.Carousel(`${carousel.id}`);
  }

  window.addEventListener("resize", () => {
      let cardsPerSlide = getCardsPerSlide(window.innerWidth);
      if (cardsPerSlide !== currentCardsPerSlide) {
          currentCardsPerSlide = cardsPerSlide;
          generateCarousel();
      }
  });

  currentCardsPerSlide = getCardsPerSlide(window.innerWidth);
  generateCarousel();
}

document.body.onload = onLoad();

