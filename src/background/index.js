let previousTime = new Date().getTime();

window.addEventListener('mousemove', (event) => {
  const time = new Date().getTime();
  chrome.storage.local.set({[time]: { x: event.clientX, y: event.clientY }});
  chrome.storage.local.get(null, function(result) {console.log(result)});
}, false);