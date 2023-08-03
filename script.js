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

	setStyleProperty('--duration', params.get('duration'));
	setStyleProperty('--bgclr', params.get('bgclr'));
	setStyleProperty('--bgstart', params.get('bgstart'));
	setStyleProperty('--bgfinish', params.get('bgfinish'));

	if(getComputedStyle(document.documentElement).getPropertyValue('--bgfinish') === 'white')
	{
		progressBar0.style.color = "black";
	}

	const percent = params.get('percent');
	if(percent != null)
	{
		progressBar0.setAttribute('data-percent', percent);
	}
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

