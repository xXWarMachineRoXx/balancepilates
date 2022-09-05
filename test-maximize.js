function onLoad(){
    chrome.windows.get(windowId, function(chromeWindow) {
        // "normal", "minimized", "maximized" or "fullscreen"
        alert('Window is ' + chromeWindow.state);
    });
}