/**
 * @requires gsap
 * @requires CustomEase
 */
document.addEventListener("DOMContentLoaded", () => {
    const titlesWrapper = document.querySelector(".slider-title-wrapper");
    const titles = titlesWrapper.querySelectorAll("h1");
    const heroImage = document.querySelector(".hero-image img");
    let currentTitleIndex = 0;

    // Array of image URLs and alt texts corresponding to each title
    const images = [
        {
            src: "https://stephendavidentertainment.github.io/sdesite/images/landing/WyattEarpCowboyWar.jpg",
            alt: "Wyatt Earp & The Cowboy War"
        },
        {
            src: "https://stephendavidentertainment.github.io/sdesite/images/landing/banner.jpg",
            alt: "Roman Empire hero shot"
        },
        {
            src: "https://stephendavidentertainment.github.io/website/assets/images/men_who_built_america.jpg",
            alt: "The Men Who Built America"
        },
        {
            src: "https://stephendavidentertainment.github.io/website/assets/images/sons_of_liberty.jpg",
            alt: "Sons of Liberty"
        },
        {
            src: "https://stephendavidentertainment.github.io/website/assets/images/roman_empire.jpg",
            alt: "Roman Empire"
        },
        {
            src: "https://stephendavidentertainment.github.io/website/assets/images/world_wars.jpg",
            alt: "The World Wars"
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

    function updateTitle() {
        const currentTitle = titles[currentTitleIndex];
        const nextTitleIndex = (currentTitleIndex + 1) % titles.length;
        const nextTitle = titles[nextTitleIndex];

        // Animate out the current title and hero image
        gsap.to([currentTitle, heroImage], {
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: () => {
                currentTitle.style.display = "none";
                currentTitle.classList.remove("active");

                // Update the hero image and alt text
                heroImage.src = images[nextTitleIndex].src;
                heroImage.alt = images[nextTitleIndex].alt;

                // Animate in the next title and hero image
                nextTitle.style.display = "block";
                gsap.fromTo([nextTitle, heroImage], { opacity: 0 }, {
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

    // Call updateTitle every 3 seconds
    setInterval(updateTitle, 3000);
});