// Temperature converter - simple and clear

document.getElementById("convertBtn").addEventListener("click", function () {

    const tempInput = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultEl = document.getElementById("result");

    resultEl.classList.remove("note");

    // if nothing entered
    if (tempInput.trim() === "") {
        resultEl.innerText = "Please enter a temperature value.";
        return;
    }

    // same unit selected
    if (fromUnit === toUnit) {
        resultEl.innerHTML =
            "<strong>Note:</strong> Both units are the same. No conversion needed.";
        resultEl.classList.add("note");
        return;
    }

    let temperature = parseFloat(tempInput);
    let celsiusValue;
    let finalResult;

    // convert whatever the input is to Celsius first
    switch (fromUnit) {
        case "C":
            celsiusValue = temperature;
            break;
        case "F":
            celsiusValue = (temperature - 32) * 5 / 9;
            break;
        case "K":
            celsiusValue = temperature - 273.15;
            break;
    }

    // convert Celsius to target unit
    switch (toUnit) {
        case "C":
            finalResult = celsiusValue;
            break;
        case "F":
            finalResult = (celsiusValue * 9 / 5) + 32;
            break;
        case "K":
            finalResult = celsiusValue + 273.15;
            break;
    }

    resultEl.innerText =
        `${temperature}° ${fromUnit} = ${finalResult.toFixed(2)}° ${toUnit}`;
});


// info button I
const infoBtn = document.getElementById("infoBtn");
const infoPanel = document.getElementById("infoPanel");

infoBtn.addEventListener("click", function () {

    if (infoPanel.style.display === "block") {
        infoPanel.style.display = "none";
    } else {
        infoPanel.style.display = "block";
    }

});