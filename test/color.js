export function color() {
    const myButton = document.createElement("button");
    myButton.id = "colorPickerBtn";
    myButton.innerText = "color";

    const myInput = document.createElement("input");
    myInput.id = 'colorPicker';
    myInput.type = 'color';
    myInput.style = 'display: none;';

    const myP = document.getElementById('text_to_change');

    document.body.appendChild(myButton);
    document.body.appendChild(myInput);
    document.body.appendChild(myP);

    myButton.addEventListener("click", function () {
        const colorPickerBtn = document.getElementById("colorPickerBtn");
        const colorPicker = document.getElementById("colorPicker");
        const textToColor = document.getElementById("text_to_change");

        colorPickerBtn.addEventListener("click", function () {
            colorPicker.click();
        });

        colorPicker.addEventListener("input", function () {
            const chosenColor = colorPicker.value;
            textToColor.style.color = chosenColor;
            colorPickerBtn.style.backgroundColor = chosenColor;
        });
    });
}