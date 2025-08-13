const coll = document.querySelectorAll(".collapsible");

coll.forEach(button => {
    const content = button.nextElementSibling;

    button.addEventListener("click", () => {
        const isActive = button.classList.contains("active");
         const indicator = button.querySelector(".btn-indicator");

        if (!isActive) {
            button.classList.add("active");
            indicator.textContent = "−"; 
            content.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0px";
            indicator.textContent = "+";

            content.addEventListener("transitionend", function handler(e) {
                if (e.propertyName === "max-height") { 
                    content.classList.remove("open");
                    button.classList.remove("active"); 
                    content.removeEventListener("transitionend", handler);
                }
            });
        }
    });
});

document.querySelector('.btn-indicator').addEventListener('click', function () {
    this.classList.toggle('active');
});
