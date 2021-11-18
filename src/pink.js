// Initialize pink button
let changeColor = document.getElementById("changeColor");
chrome.storage.sync.get("enabled", ({ enabled }) => {
  if (enabled) {
    changeColor.style.backgroundColor = "#F62459"; // make it pink
  } else {
    changeColor.style.backgroundColor = "#0683ea"; // eww
  }
});
// When the button is clicked toggle the stored "enabled" state
changeColor.addEventListener("click", async () => {
  chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (enabled) {
      chrome.storage.sync.set({ enabled: false }); // disable
      changeColor.style.backgroundColor = "#0683ea"; // eww
    } else {
      chrome.storage.sync.set({ enabled: true }); // enable
      changeColor.style.backgroundColor = "#F62459"; // make it pink
    }
  });
});
