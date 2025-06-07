function checkInputs() {
    const items = document.querySelectorAll(".item");
    let isValid = true;

    items.forEach((item) => {
        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            isValid = false;
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value.trim() !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }

            if (item.classList.contains("email")) {
                checkEmail();
            }
        });
    });

    return isValid;
}

function checkEmail() {
    const email = document.querySelector(".email");
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/i;

    if (!email.value.trim().match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    if (checkInputs()) {
        sendToWhatsapp();
    }
});

function sendToWhatsapp() {
    const number = "+917384215381";

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const url = `https://wa.me/${number}?text=` +
        `Name: ${encodeURIComponent(name)}%0a` +
        `Email: ${encodeURIComponent(email)}%0a` +
        `Phone Number: ${encodeURIComponent(phonenumber)}%0a` +
        `Subject: ${encodeURIComponent(subject)}%0a` +
        `Message: ${encodeURIComponent(message)}`;

    window.open(url, '_blank').focus();
}
