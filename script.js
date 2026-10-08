const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ─────────────────────────────
// Smooth navigation
// ─────────────────────────────

$("#start").onclick = () => {
  $("#s2").scrollIntoView({
    behavior: "smooth"
  });
};

$("#reveal").onclick = () => {
  $("#s5").scrollIntoView({
    behavior: "smooth"
  });
};

// ─────────────────────────────
// Reading progress bar
// ─────────────────────────────

const progress = $("#progress");

window.addEventListener(
  "scroll",
  () => {
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const percent =
      pageHeight > 0
        ? (window.scrollY / pageHeight) * 100
        : 0;

    progress.style.width = percent + "%";
  },
  { passive: true }
);

// ─────────────────────────────
// Interactive detail messages
// ─────────────────────────────

const modal = $("#modal");
const modalText = $("#modalText");

$$(".detail").forEach((item) => {
  item.addEventListener("click", () => {
    modalText.textContent = item.dataset.text;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

// ─────────────────────────────
// Close modal
// ─────────────────────────────

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

$("#close").onclick = closeModal;

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// ─────────────────────────────
// Small notification
// ─────────────────────────────

let toastTimer;

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ─────────────────────────────
// Confession responses
// ─────────────────────────────

$("#talk").onclick = () => {
  showToast("No pressure. If you want to talk, I'm here. 🙂");
};

$("#later").onclick = () => {
  showToast("Take your time. Whatever you feel is okay. 🌙");
};

// ─────────────────────────────
// Back to beginning
// ─────────────────────────────

$("#again").onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
