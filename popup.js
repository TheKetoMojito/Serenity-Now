//var options = ['Home','Work','School'];
/*
var options = {
    "Home": "Home",

}*/

function bindHTMLActions() {
    $("#settings-btn").click(function (e){
        settings_clicked();
    });
}

function settings_clicked() {
    chrome.tabs.create({
        url: chrome.extension.getURL('settings.html')
    });
    self.destroy();
}

$(document).ready(function () {
    bindHTMLActions();
});