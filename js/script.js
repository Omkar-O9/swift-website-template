document.addEventListener("DOMContentLoaded", function () {

    /* Review platform filter */
    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".review-card");

    filters.forEach(function (button) {
        button.addEventListener("click", function () {

            filters.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            const selected = button.dataset.filter;

            cards.forEach(function (card) {
                const platform = card.dataset.platform;

                if (selected === "all" || platform === selected) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    /* Review screenshot lightbox */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeButton = document.querySelector(".lightbox .close");

    document.querySelectorAll(".screenshot").forEach(function (item) {
        item.addEventListener("click", function () {
            lightboxImg.src = item.dataset.image;
            lightbox.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("show");
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

});
