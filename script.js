// Generate fireworks
function createFirework() {
    const firework = document.createElement("div");
        firework.classList.add("firework");
            firework.style.left = `${Math.random() * window.innerWidth}px`;
                firework.style.top = `${Math.random() * window.innerHeight}px`;
                    document.querySelector(".fireworks").appendChild(firework);

                        setTimeout(() => {
                                firework.remove();
                                    }, 1500);
                                    }

                                    // Launch fireworks every 500ms
                                    setInterval(createFirework, 500);
                                    