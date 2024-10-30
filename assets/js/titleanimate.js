document.addEventListener("DOMContentLoaded", () => {
    const titlesWrapper = document.querySelector(".slider-title-wrapper");
    const titles = titlesWrapper.querySelectorAll("h1");
    const heroImage = document.querySelector(".hero-image img");
    const laurelsImage = document.querySelector("#laurels");
    let currentTitleIndex = 0;

    // Array of image URLs, alt texts, and laurels images corresponding to each title
    const slides = [
        {
            title: "Wyatt Earp & The Cowboy War",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/WyattEarpCowboyWar.jpg",
            heroAlt: "Wyatt Earp hero image",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/Wyatt_Quotes.webp"
        },
        {
            title: "The Men Who Built America",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/mwba_hero.png",
            heroAlt: "The Men Who Built America",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/MWBA_Laurels.webp"
        },
        {
            title: "Sons of Liberty",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/SonsOfLiberty.jpg",
            heroAlt: "Sons of Liberty",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/Sons_Qoutes.webp"
        },
        {
            title: "Roman Empire",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/banner.jpg",
            heroAlt: "Roman Empire",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/Roman_Qoutes.webp"
        },
        {
            title: "The World Wars",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/WorldWars.jpg",
            heroAlt: "The World Wars",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/WorldWars_Laurels.webp"
        }
    ];

    // Initially hide all titles except the first one
    titles.forEach((title, index) => {
        if (index !== 0) {
            title.style.display = "none";
        } else {
            title.classList.add("active");
        }
    });

    function updateSlide() {
        const currentTitle = titles[currentTitleIndex];
        const nextTitleIndex = (currentTitleIndex + 1) % titles.length;
        const nextTitle = titles[nextTitleIndex];
        const nextSlide = slides[nextTitleIndex];

        // Animate out the current title, hero image, and laurels image
        gsap.to([currentTitle, heroImage, laurelsImage], {
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: () => {
                currentTitle.style.display = "none";
                currentTitle.classList.remove("active");

                // Update the hero image, alt text, and laurels image
                heroImage.src = nextSlide.heroSrc;
                heroImage.alt = nextSlide.heroAlt;
                laurelsImage.src = nextSlide.laurelsSrc;

                // Update the next title text
                nextTitle.textContent = nextSlide.title;

                // Animate in the next title, hero image, and laurels image
                nextTitle.style.display = "block";
                gsap.fromTo([nextTitle, heroImage, laurelsImage], { opacity: 0 }, {
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    onComplete: () => {
                        nextTitle.classList.add("active");
                        currentTitleIndex = nextTitleIndex;
                    }
                });
            }
        });
    }

    // Call updateSlide every 5 seconds
    setInterval(updateSlide, 5000);
});