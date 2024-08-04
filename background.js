chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-fullscreen") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: Fullscreen
      });
    });
  }
});

function Fullscreen() {
  const canvas = document.getElementById('entryCanvas');
  if (canvas) {
    if (document.fullscreenElement === canvas) {
      document.exitFullscreen();
    } else {
      canvas.requestFullscreen();
    }
  }
}
