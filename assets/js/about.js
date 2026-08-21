const image = document.querySelector(".about-image img");
    const container = document.querySelector(".about-container");

    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 40;   // smaller = more subtle
        const moveY = (y - rect.height / 2) / 40;

        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    container.addEventListener("mouseleave", () => {
        image.style.transform = "translate(0px, 0px)";
    });
