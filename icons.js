const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setIcon);

function setIcon() {
    const choice = select.value;

    switch (choice) {
        case "banana":
            para.textContent =
            "You have chosen the banana icon!";
            break;
        case "apple":
            para.textContent =
            "You have chosen the apple icon!";
            break;
        case "strawberry":
            para.textContent =
            "You have chosen the strawberry icon!";
            break;
        default:
            para.textContent = "";
    }
}