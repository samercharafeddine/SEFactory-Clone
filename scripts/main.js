// Heading title animation

const hero_text = document.querySelector(".typed-text");

const words = ["SOFTWARE ENGINEER?", "DATA ENGINEER?", "UI/UX DESIGNER?"];

let wordIndex = 0;
let wordItirator = 0;
let isTyping = true;

const time = setInterval(() => {
  const currentWord = words[wordIndex];
  hero_text.innerHTML = currentWord.slice(0, wordItirator);

  if (wordItirator === currentWord.length && isTyping) {
    isTyping = false;
    wordItirator--;
  } else if (wordItirator === 0 && !isTyping) {
    isTyping = true;
    wordIndex = (wordIndex + 1) % words.length;
  }

  if (isTyping) {
    wordItirator++;
  } else {
    wordItirator--;
  }
}, 100);

// Tabs Section

const tabsContainer = document.querySelector(".tabs-container");
const tabsList = document.querySelector(".tabs-title");
const tabbuttons = tabsList.querySelectorAll("a");
const tabPanels = document.querySelectorAll(".program-tab-content");

tabbuttons.forEach((tab, index) => {
  if (index == 0) {
  } else {
    tabPanels[index].style.display = "none";
  }
});

tabsContainer.addEventListener("click", (event) => {
  const clicked = event.target.closest("a");
  if (!clicked) return;
  event.preventDefault();
  switchTab(clicked);
});

const switchTab = (newTab) => {
  const activeTabId = newTab.getAttribute("href");
  const activeTab = tabsContainer.querySelector(activeTabId);
  tabPanels.forEach((panel) => {
    panel.style.display = "none";
  });
  activeTab.style.display = "flex";
};

// Testimonial Section
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonials-slide");

const showTestimonial = (index) => {
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "none";
  });

  testimonials[index].style.display = "flex";

  const dots = document.querySelectorAll(".slider-dot");
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[index].classList.add("active");
};

showTestimonial(currentIndex);

const currentSlide = (index) => {
  currentIndex = index;
  showTestimonial(currentIndex);
};
