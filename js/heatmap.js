var citationFrequency = 1,
	heatmap = document.querySelector("#heatmap"),
	numberedPages = document.querySelectorAll(".page_number");

// Get JSON
function reqListener () {
	citationFrequency = JSON.parse(this.responseText);
	for (var prop in numberedPages) {
		if (numberedPages[prop].dataset !== undefined) {
			heatmap.innerHTML += '<span data-tooltip aria-haspopup="true" class="has-tip custom-tip [tip-right] [radius round]" title="' + citationFrequency[numberedPages[prop].dataset.page] + ' citations' + '">' + 'page ' + numberedPages[prop].dataset.page +'</span>';
		}
	}
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("GET", "./casetext-424_us_1-export.json", true);
oReq.send();

// document.addEventListener("click", scrollIntoView);

// function scrollIntoView (event) {
// 	if (event.target.parentElement.id === "heatmap") {
// 		document.querySelector(".page_number").dataset.page event.target.innerText.split(" ")[1]);
// 	}
// }

// for (var prop in citationFrequency) {
// 	heatmap.innerHTML += '<span data-tooltip aria-haspopup="true" class="has-tip custom-tip [tip-right] [radius round]" title="' + citationFrequency[prop] + ' citations' + '">' + 'page ' + prop +'</span>';
// }