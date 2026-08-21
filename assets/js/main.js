const container = document.querySelector(".container");
        const image = document.querySelector(".profile-img");

        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) / 25;
            const moveY = (y - rect.height / 2) / 25;

            image.style.transform = `translateY(60px) translate(${moveX}px, ${moveY}px)`;
        });

        container.addEventListener("mouseleave", () => {
            image.style.transform = "translateY(60px)";
        });
