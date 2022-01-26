// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let clearData = document.getElementById("clearData");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

clearData.addEventListener("click", () => chrome.storage.local.clear())

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.local.get(null, function(result) { 
    const times = Object.entries(result).sort((a, b) => a[0] - b[0]).map(time =>
      ({ time: Number(time[0]), ...time[1]})
    );
    document.write(JSON.stringify(times, null, 2));  
  })
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
