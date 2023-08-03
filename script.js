const progressBar = document.getElementById("progressbar");

var queryString = window.location.search;
var params = new URLSearchParams(queryString);

const setStyleProperty = (property, value) => {
  if (value != null)
  {
	document.documentElement.style.setProperty(property, value);
  }
};

const progressBar0 = document.querySelector('.progress-bar');

setStyleProperty('--bgclr', params.get('bgclr'));
setStyleProperty('--bgstart', params.get('bgstart'));
setStyleProperty('--bgfinish', params.get('bgfinish'));

if (getComputedStyle(document.documentElement).getPropertyValue('--bgfinish') === 'white')
{
	progressBar0.style.color = "black";
}

setStyleProperty('--duration', params.get('duration'));

const percent = params.get('percent');
if (percent != null)
{
	progressBar0.setAttribute('data-percent', percent);
}

window.addEventListener("load", (event) => {
	const percentValue = progressBar.getAttribute("data-percent");

    const valueWithoutPercent = parseFloat(percentValue.replace("%", ""));
    let interval = setInterval(() => {
    	const computedStyle = getComputedStyle(progressBar);
    	const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    	progressBar.style.setProperty('--width', width + 0.1);
	if(Math.round(width) === Math.round(valueWithoutPercent))
        {
            clearInterval(interval);
        }
    }, 5)
});

