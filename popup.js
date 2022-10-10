function get_current_url() {
    var tab = chrome.tabs.query({
        queryInfo: {
            active: true,
            currentWindow: true,
        }
    })

    console.log('tab url:', tab.url)

    var url = document.querySelector('#url');
    url.textContent = 'URL here';
}

document.onload = function () {
    var url = document.getElementById('url');
    url.textContent = 'URL here';

    var block = document.querySelector("#block");
    block.addEventListener('click', get_current_url);
}