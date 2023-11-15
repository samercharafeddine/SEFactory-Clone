const tabsContainer = document.querySelector(".tabs-conntainer");
const tabsList = tabsContainer.querySelector(".tabs-title");
const tabbuttons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs-panel-content > div");

tabbuttons.forEach((tab, index) => {
  if (index == 0) {
  } else {
    tabPanels[index].setAttribute("hidden");
  }
});
