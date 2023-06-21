const btn = document.querySelector("button");
      btn.addEventListener("click", function () {
        chrome.tabs.query({ active: true }, function (tabs) {
            var tab = tabs[0];
            tab_title = tab.title;
            chrome.tabs.executeScript(tab.id,
                {
                    file:
                        'script.js'
                });
        })
});