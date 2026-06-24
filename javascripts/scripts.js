const cartoch1 = document.getElementById('cartoch1');
if (cartoch1) {
  cartoch1.addEventListener('click', () => {
    window.location.href = 'employees.html';
  });
}

const cartoch2 = document.getElementById('cartoch2');
if (cartoch2) {
  cartoch2.addEventListener('click', () => {
    window.location.href = 'poster.html';
  });
}

const cartoch3 = document.getElementById('cartoch3');
if (cartoch3) {
  cartoch3.addEventListener('click', () => {
    window.location.href = 'shop.html';
  });
}

const podrob = document.getElementById('podrob');
if (podrob) {
  podrob.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
}

const modalTitle = document.getElementById("modalTitle");
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");

const bookingForm = document.getElementById("bookingForm");
const bookingStep1 = document.getElementById("bookingStep1");
const bookingStep2 = document.getElementById("bookingStep2");

let selectedEventTitle = "";
let selectedEventDate = "";
let selectedEventTime = "";

function resetModal() {
  if (bookingStep1) {
    bookingStep1.style.display = "block";
  }

  if (bookingStep2) {
    bookingStep2.style.display = "none";
  }

  if (bookingForm) {
    bookingForm.reset();
  }
}

if (modal && closeBtn && modalTitle) {
  const buttons = document.querySelectorAll(".event-card-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".event-card");

      const title = card.querySelector(".event-title").textContent.trim();
      const date = card.querySelector(".afisha-data").textContent.trim();
      const time = card.querySelector(".afisha-time").textContent.trim();

      selectedEventTitle = title;
      selectedEventDate = date;
      selectedEventTime = time;

      modalTitle.textContent = title;

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    resetModal();
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      resetModal();
    }
  });
}

if (bookingForm && bookingStep1 && bookingStep2) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const bookingEventTitle = document.getElementById("bookingEventTitle");
    const bookingResultText = document.getElementById("bookingResultText");

    bookingEventTitle.textContent = selectedEventTitle;
    bookingResultText.innerHTML = `${selectedEventDate}<br>${selectedEventTime}`;

    bookingStep1.style.display = "none";
    bookingStep2.style.display = "block";
  });
}


const images = [
  "./images/book1.svg",
  "./images/book2.svg",
  "./images/book3.svg",
  "./images/book4.svg",
  "./images/book5.svg"
];

let currentIndex = 0;

const leftImage = document.getElementById("leftImage");
const centerImage = document.getElementById("centerImage");
const rightImage = document.getElementById("rightImage");
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");

if (leftImage && centerImage && rightImage && rightArrow && leftArrow) {
  function renderGallery() {
    const leftIndex =
      (currentIndex - 1 + images.length) % images.length;

    const rightIndex =
      (currentIndex + 1) % images.length;

    leftImage.src = images[leftIndex];
    centerImage.src = images[currentIndex];
    rightImage.src = images[rightIndex];
  }

  function animateRight() {
    const centerRect =
      centerImage.getBoundingClientRect();

    const rightRect =
      rightImage.getBoundingClientRect();

    const distance =
      (centerRect.left + centerRect.width / 2) -
      (rightRect.left + rightRect.width / 2);

    leftImage.style.opacity = "0";

    centerImage.style.transform =
      `translateX(${distance}px) scale(0.6)`;

    rightImage.style.transform =
      `translateX(${distance}px) scale(1.9)`;

    setTimeout(() => {
      centerImage.style.transition = "none";
      rightImage.style.transition = "none";

      currentIndex =
        (currentIndex + 1) % images.length;

      renderGallery();

      centerImage.style.transform = "";
      rightImage.style.transform = "";

      void centerImage.offsetWidth;

      centerImage.style.transition =
        "transform 0.5s ease, opacity 0.5s ease";

      rightImage.style.transition =
        "transform 0.5s ease, opacity 0.5s ease";

      leftImage.style.opacity = "0.6";
    }, 500);
  }

  function animateLeft() {
    const centerRect =
      centerImage.getBoundingClientRect();

    const leftRect =
      leftImage.getBoundingClientRect();

    const distance =
      (centerRect.left + centerRect.width / 2) -
      (leftRect.left + leftRect.width / 2);

    rightImage.style.opacity = "0";

    centerImage.style.transform =
      `translateX(${distance}px) scale(0.6)`;

    leftImage.style.transform =
      `translateX(${distance}px) scale(1.9)`;

    setTimeout(() => {
      centerImage.style.transition = "none";
      leftImage.style.transition = "none";

      currentIndex =
        (currentIndex - 1 + images.length) % images.length;

      renderGallery();

      centerImage.style.transform = "";
      leftImage.style.transform = "";

      void centerImage.offsetWidth;

      centerImage.style.transition =
        "transform 0.5s ease, opacity 0.5s ease";

      leftImage.style.transition =
        "transform 0.5s ease, opacity 0.5s ease";

      rightImage.style.opacity = "0.6";
    }, 500);
  }

  rightArrow.addEventListener("click", animateRight);
  leftArrow.addEventListener("click", animateLeft);

  renderGallery();
}