export function createAlignButtons() {
    // Créer les boutons pour l'alignement
    const alignLeftButton = document.createElement("button");
    alignLeftButton.innerText = "Align Left";
    document.body.appendChild(alignLeftButton);

    const alignRightButton = document.createElement("button");
    alignRightButton.innerText = "Align Right";
    document.body.appendChild(alignRightButton);

    // Ajouter des gestionnaires d'événements pour l'alignement du texte
    alignLeftButton.addEventListener("click", function () {
        const textToChange = document.getElementById("text_to_change");
        if (textToChange) {
            textToChange.style.textAlign = "left";
        }
    });

    alignRightButton.addEventListener("click", function () {
        const textToChange = document.getElementById("text_to_change");
        if (textToChange) {
            textToChange.style.textAlign = "right";
        }
    });
}