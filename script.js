const progressBar = document.getElementById("progressbar");

window.addEventListener("load", (event) => {
	var queryString = window.location.search;
	var params = new URLSearchParams(queryString);

	const setStyleProperty = (property, value) => {
  	if(value != null)
  		{
			document.documentElement.style.setProperty(property, value);
  		}
	};

	const progressBar0 = document.querySelector('#progressbar');

	const duration = params.get('duration');
	setStyleProperty('--duration', duration);
	setStyleProperty('--bgclr', params.get('bgclr'));
	setStyleProperty('--bgstart', params.get('bgstart'));
	setStyleProperty('--bgfinish', params.get('bgfinish'));

	if(getComputedStyle(document.documentElement).getPropertyValue('--bgfinish') === 'white')
	{
		progressBar0.style.color = "black";
	}

	percent = params.get('percent');
	valueWithoutPercent = percent.replace("%", "");
	if(percent != null)
	{
		if(percent <= 0 || percent > 100)
		{
			throw "Invalid value entered";
		} else {
			percent1 = percent.toString();
			percent2 = percent1 + "%";
			progressBar0.setAttribute('data-percent', percent);
		}
	}

	const percentValue = progressBar.getAttribute("data-percent");

    let interval = setInterval(() => {
    	const computedStyle = getComputedStyle(progressBar);
    	const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    	progressBar.style.setProperty('--width', width + parseFloat((duration.replace("s", "") / 10) / 5));
	if(Math.round(width) === Math.round(valueWithoutPercent))
        {
            clearInterval(interval);
        }
    }, 1)
});

