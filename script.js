const $ = (id) => document.getElementById(id);

window.addEventListener("load", () => {
  setTimeout(() => $("loading").classList.add("hide"), 500);
  setupReveal();
  setupProgress();
  setupCursorHeart();
  startFloatingHearts();
});

$("verificationForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = $("name").value.trim();
  if (!name) return;

  $("verifyBtn").classList.add("loading");
  $("verifyBtn").innerHTML = "<span>VERIFYING...</span><span>•••</span>";

  await new Promise(resolve => setTimeout(resolve, 1300));

  $("herName").textContent = name;
  $("finalName").textContent = name;

  $("documentPage").classList.remove("active");
  $("documentPage").classList.add("hidden");
  $("birthdayPage").classList.remove("hidden");

  window.scrollTo({top: 0, behavior: "instant"});
  launchConfetti();
  startMusic();
  setupReveal();
});

function goTo(id) {
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function launchConfetti() {
  const container = $("confetti");
  const colors = ["#d85b78","#f3b5c4","#e9c46a","#90be6d","#8ecae6","#ffffff"];

  for (let i = 0; i < 110; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 1.2 + "s";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (5 + Math.random()*7) + "px";
    piece.style.height = (8 + Math.random()*10) + "px";
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (entry.target.id === "finale" && !entry.target.dataset.typed) {
          entry.target.dataset.typed = "true";
          typeMessage();
        }
      }
    });
  }, {threshold: 0.16});

  items.forEach(item => observer.observe(item));
}

function typeMessage() {
  const text = "I hope today reminds you just how special you are. Thank you for every laugh, every conversation, every memory and every little moment. I hope this next chapter brings you everything your heart deserves. Happy birthday ❤️";
  const target = $("typewriter");
  target.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    target.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, 25);
}

function setupProgress() {
  window.addEventListener("scroll", () => {
    const birthday = $("birthdayPage");
    if (birthday.classList.contains("hidden")) return;

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    $("progress").style.width = percent + "%";
  });
}

function setupCursorHeart() {
  const heart = $("cursor-heart");
  if (!window.matchMedia("(pointer:fine)").matches) return;

  document.addEventListener("mousemove", e => {
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.opacity = "0.65";
  });

  document.addEventListener("mouseleave", () => heart.style.opacity = "0");
}

let heartTimer;
function startFloatingHearts() {
  clearInterval(heartTimer);
  heartTimer = setInterval(() => {
    if ($("birthdayPage").classList.contains("hidden")) return;

    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > .5 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (10 + Math.random()*18) + "px";
    heart.style.animationDuration = (7 + Math.random()*7) + "s";
    heart.style.opacity = .15 + Math.random()*.35;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 15000);
  }, 1300);
}

const music = $("music");
const musicToggle = $("musicToggle");

musicToggle.addEventListener("click", () => {
  if (music.paused) startMusic();
  else {
    music.pause();
    musicToggle.classList.remove("playing");
    musicToggle.innerHTML = "♫ <span>Music</span>";
  }
});

function startMusic() {
  // Browsers may block autoplay; the button still lets her start it.
  music.play().then(() => {
    musicToggle.classList.add("playing");
    musicToggle.innerHTML = "♫ <span>Playing</span>";
  }).catch(() => {});
}

function replayExperience() {
  window.scrollTo({top:0, behavior:"smooth"});
}
