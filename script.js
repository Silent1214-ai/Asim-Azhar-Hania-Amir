document.addEventListener("DOMContentLoaded", () => {
    // Floating hearts animation
    const heartsContainer = document.querySelector(".floating-hearts");
    if (heartsContainer) {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "♥";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 8 + "s"; // 8-10 seconds
            heart.style.opacity = Math.random() * 0.5 + 0.5; // 0.5-1 opacity
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, parseFloat(heart.style.animationDuration) * 1000);
        }, 300);
    }

    // Initialize letters read count
    let lettersReadCount = 0;
    const lettersReadSpan = document.getElementById("letters-read");

    // Initialize promises completed count
    let promisesCompletedCount = 0;
    const allPromisesMessage = document.getElementById("all-promises-message");

    // Confetti effect (simplified for static HTML)
    function triggerConfetti() {
        // In a real scenario, you'd use a library like confetti.js
        // For this simple HTML, we'll just show an alert or a simple animation
        console.log("Confetti time!");
        // alert("🎉 Confetti! 🎉"); // You can uncomment this for a simple visual cue
    }

    // Video message toggle
    const loveVideo = document.getElementById("love-video");
    const videoMessage = document.getElementById("video-message");

    if (loveVideo && videoMessage) {
        loveVideo.addEventListener("play", () => {
            videoMessage.classList.add("hidden");
        });
        loveVideo.addEventListener("pause", () => {
            videoMessage.classList.remove("hidden");
        });
        loveVideo.addEventListener("ended", () => {
            videoMessage.classList.remove("hidden");
        });
    }
});

// Scroll to section function
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

// Toggle letter content
function toggleLetter(card, index) {
    const content = card.querySelector(".letter-content");
    const star = card.querySelector(".star");
    const actionText = card.querySelector(".letter-action");

    if (!card.classList.contains("expanded")) {
        card.classList.add("expanded");
        content.style.maxHeight = content.scrollHeight + "px";
        if (star) star.classList.remove("hidden");
        actionText.textContent = "Click to close";
        
        // Update letters read count
        let currentCount = parseInt(document.getElementById("letters-read").textContent);
        if (!card.dataset.read) {
            currentCount++;
            document.getElementById("letters-read").textContent = currentCount;
            card.dataset.read = "true";
        }
    } else {
        card.classList.remove("expanded");
        content.style.maxHeight = "0";
        if (star) star.classList.add("hidden");
        actionText.textContent = "Click to read my apology";
    }
}

// Toggle timeline item content
function toggleTimelineItem(item, index) {
    const description = item.querySelector(".timeline-description");
    const dot = item.querySelector(".timeline-dot");

    if (!item.classList.contains("expanded")) {
        item.classList.add("expanded");
        description.style.maxHeight = description.scrollHeight + "px";
        dot.classList.add("completed");
    } else {
        item.classList.remove("expanded");
        description.style.maxHeight = "0";
        dot.classList.remove("completed");
    }
}

// Toggle promise item
function togglePromise(item, index) {
    const checkbox = item.querySelector(".promise-checkbox");
    const allPromisesMessage = document.getElementById("all-promises-message");

    if (!item.classList.contains("completed")) {
        item.classList.add("completed");
        promisesCompletedCount++;
        if (promisesCompletedCount === 5) {
            allPromisesMessage.classList.remove("hidden");
            // Trigger confetti or special animation here if desired
        }
    } else {
        item.classList.remove("completed");
        promisesCompletedCount--;
        if (promisesCompletedCount < 5) {
            allPromisesMessage.classList.add("hidden");
        }
    }
}


