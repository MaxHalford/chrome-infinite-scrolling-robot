function executeScript (tab) {
	chrome.tabs.executeScript(null, {file: "scroll.js"});
}


function main() {
	document.addEventListener('DOMContentLoaded', function () {
    	document.getElementById('alertButton').addEventListener('click', executeScript);
	});
}


main();
