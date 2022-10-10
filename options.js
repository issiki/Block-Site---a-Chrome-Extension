function save_rules(){
    var rules=document.getElementById('rules').ariaValueMax;

    chrome.storage.sync.set({
        rules,
    },function(){
        // update status to let user know options were saved
        var status=document.getElementById('status');
        status.textContent='saved';
        setTimeout(function(){
            status.textContent='';
        },750);
    })
}

function load_rules(){
    // read data from file
    
}

document.addEventListener('DOMContentLoaded',load_rules);
document.getElementById('save').addEventListener('click',save_rules);