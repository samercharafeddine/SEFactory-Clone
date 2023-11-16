const tabsContainer = document.querySelector(".tabs-container");
const tabsList = document.querySelector(".tabs-title");
const tabbuttons = tabsList.querySelectorAll("a");
const tabPanels = document.querySelectorAll(".program-tab-content");

tabbuttons.forEach((tab, index) => {
  if (index == 0) {
  } else {
    tabPanels[index].setAttribute("hidden", "");
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
    panel.setAttribute("hidden", true);
  });
  activeTab.removeAttribute("hidden", false);
};
