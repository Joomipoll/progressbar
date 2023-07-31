const progressBar = document.getElementById("progressbar");

function changeStyles(params)
{

	if(params.percent)
	{
		progressBar.setAttribute('data-percent', new percent);
	}

	if(params.duration)
	{
		document.documentElement.style.setProperty('--duration', params.duration);
	}
	
	if(params.bgclr)
	{
		document.documentElement.style.setProperty('--bgclr', params.bgclr);
	}
	
	if(params.bgstart)
	{
		document.documentElement.style.setProperty('--bgstart', params.bgstart);
	}
	
	if(params.bgfinish)
	{
		document.documentElement.style.setProperty('--bgfinish', params.bgfinish);
	}
}

window.addEventListener("load", (event) => {
	const percentValue = progressBar.getAttribute("data-percent");

	var urlParams = new URLSearchParams(window.location.search);
	var params = {};

	urlParams.forEach(function(value, key) {
		params[key] = value;
	});

	changeStyles(params);

    const valueWithoutPercent = parseFloat(percentValue.replace("%", ""));
    let interval = setInterval(() => {
    	const computedStyle = getComputedStyle(progressBar);
    	const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    	progressBar.style.setProperty('--width', width + .1);
        if(Math.round(width * 10) / 10 === valueWithoutPercent)
        {
            clearInterval(interval);
        }
    }, 5)
});

