const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Open the story
$("#start").addEventListener("click", () => {
  $("#story").scrollIntoView({
    behavior: "smooth"
  });
});

// Story navigation buttons
$$(".next").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Little Things cards
const modal = $("#modal");
const modalText = $("#modalText");

$$(".note").forEach((card) => {
  card.addEventListener("click", () => {
    modalText.textContent = card.dataset.note;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

// Close popup
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

$("#close").addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close popup with Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Reveal confession
$("#reveal").addEventListener("click", () => {
  $("#confession").scrollIntoView({
    behavior: "smooth"
  });
});

// Small notification
let toastTimer;

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// Response buttons
$("#talk").addEventListener("click", () => {
  showToast(
    "No pressure at all — if you want to talk, I'm here. 😊"
  );
});

$("#later").addEventListener("click", () => {
  showToast(
    "Take your time. Whatever you feel is okay. 🌙"
  );
});

// Restart the website
$("#restart").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
