window.addEventListener("load", (event) => {
    const progressBar = document.getElementById("progressbar");
    const percentValue = progressBar.getAttribute("data-percent");
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
