const para = document.querySelector("#selection-msg");
const icons = document.querySelectorAll(".icon");
const finishBtn = document.querySelector("#finishBtn");

icons.forEach(icon => {
    icon.addEventListener("click", function() {
        // 1. Remove highlight from all fruits
        icons.forEach(i => i.style.border = "none");

        // 2. Add highlight to the clicked fruit
        this.style.border = "5px solid brown";
        this.style.borderRadius = "15px";

        // 3. Get the name and update the text
        const choice = this.id.replace("-img", "");
        para.textContent = "You have chosen the $;{choice} icon!";
        para.style.fontWeight = "bold";

        // 4. Show the Finish button
        finishBtn.style.display = "flex";
    });
});