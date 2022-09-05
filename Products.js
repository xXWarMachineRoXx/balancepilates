const cards = [
    ["REFORMER","Lorem Ipsum delor is a sample text for description of product page","assets/images/reformer.png"],
    ["LADDER BARREL","Lorem Ipsum delor is a sample text for description of product page","assets/images/ladder-barrel.png"],
    ["TRAPEZE TABLE","Lorem Ipsum delor is a sample text for description of product page","assets/images/trapeze-table.png"],
    ["WUNDA CHAIR","Lorem Ipsum delor is a sample text for description of product page","assets/images/wunda-chair.png"]   
];

function onLoad() {
let currentCardsPerSlide = 4;
  var A = screen.availWidth;
  var AA = window.outerWidth;

  var B = screen.availHeight;
  var BB = window.outerHeight;

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
      
      
      if (A == AA && B == BB) {
      
        return 4;
    
      }
      return currentCardsPerSlide;
  }

    function createCard(index) {
        const card = document.createElement("div");
        //card.style.width = "18rem";
        card.classList.add("card");

        card.innerHTML = `  <div class="card-body">
                            <div class="card-image my-2">
                                <img src=${cards[index][2]}></img>
                            </div>
                            <h4 class="card-title my-3 ">${cards[index][0]}</h4>
                            <p class="card-text ">${cards[index][1]}</p>
                            <a href="#" class="btn btn-primary">Learn More</a>
                        </div>`;

        return card;
    }

    function generateCarousel() {
        const row = document.getElementById("carousel-row");

        row.innerHTML = "";

        const carousel = document.createElement("div");
        carousel.id = `carouselExampleIndicators`;
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

        const numberOfSlides = cards.length / currentCardsPerSlide;

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
                "w-100",
                "justify-content-center",
                "py-5"
            );

            for (
                let j = index * currentCardsPerSlide;
                j < (index + 1) * currentCardsPerSlide;
                j++
            ) {
                const card = cards[j];
                if (!card) continue;
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

