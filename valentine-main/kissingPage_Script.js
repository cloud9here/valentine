// Music Controls
const audio = document.getElementById("background-music");

document
  .querySelectorAll(".dancing-couple-gif, .celebration-icons, .message")
  .forEach((el) => {
    el.classList.add("visible");
  });

const urlParams = new URLSearchParams(window.location.search);
const musicEnabled = urlParams.get("musicEnabled") === "true";

if (musicEnabled) {
  // Play music on the next page
  audio.play().catch(() => {});
  document.getElementById("music-text").textContent = "Music: On";

  // Enhance dancing animation
  document.querySelector(".dancing-couple-gif").style.animation =
    "float 3s ease-in-out infinite, dance 2s ease-in-out infinite";
} else {
  document.getElementById("music-text").textContent = "Music: Off";
  audio.pause();

  // Simpler animation without music
  document.querySelector(".dancing-couple-gif").style.animation =
    "float 3s ease-in-out infinite";
}

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    document.getElementById("music-text").textContent = "Music: On";
  } else {
    audio.pause();
    document.getElementById("music-text").textContent = "Music: Off";
  }
}

function toggleMute() {
  audio.muted = !audio.muted;
  document.getElementById("mute-icon").className = audio.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
}

// Heart Rain Effect
function createHeartRain() {
  const heartRain = document.querySelector(".heart-rain");

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fas fa-heart heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 seconds
    heart.style.animationDelay = Math.random() * 2 + "s";

    heartRain.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 5000);
  }

  // Create hearts at intervals
  setInterval(createHeart, 300);

  // Initial hearts
  for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, Math.random() * 1000);
  }
}

// Page Content
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const fromName = urlParams.get("from") || "Prashant";
  const toName = urlParams.get("to") || "Ruby";

  document.title = `${fromName} ❤️ ${toName} | Valentine's Day`;

  document.querySelector(".header_text").innerHTML = `
                Hooray ${toName}!<br>
                You said YES to ${fromName}! <i class="fas fa-heart-circle-check"></i>
            `;

  document.querySelector(".message").innerHTML = `
                <i class="fas fa-star"></i> 
                Dear ${toName}, you've made ${fromName} the happiest person in the world! 
                <i class="fas fa-star"></i><br>
                Let's create beautiful memories together! 
                <i class="fas fa-glass-cheers"></i>
            `;

  // Create confetti
  const container = document.createElement("div");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = Math.random() * 2 + "s";
  }
    container.appendChild(confetti);
  document.body.appendChild(container);

  // Start heart rain
  createHeartRain();

  // Show music prompt immediately
  document.getElementById("musicPrompt").style.display = "flex";
});
