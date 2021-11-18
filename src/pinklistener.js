chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enabled: false }); // Extension disabled by default
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (enabled) {
      chrome.tabs.sendMessage(tabId, {});
      setTimeout(() => chrome.tabs.sendMessage(tabId, {}), 1000);
    }
  });
});
