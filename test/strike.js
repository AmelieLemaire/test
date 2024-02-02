export function striker() {
    const myButton = document.createElement("button");
    myButton.id = "strikeBtn";
    myButton.innerText = "strike";

    const myP = document.getElementById('text_to_change');

    document.body.appendChild(myButton);
    document.body.appendChild(myP);

    let striked = false;

    myButton.addEventListener("click", function () {
        if (striked === true) {
            myP.style.textDecoration = "none";
            striked = false;
        } else {
            myP.style.textDecoration = "line-through";
            striked = true;
        }
    });
}
