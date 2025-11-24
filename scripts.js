/* Add your JavaScript to this file */
window.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // first (and only) form
    const emailInput = document.querySelector('input[type="email"]');
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop actual submit / page refresh

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent =
        `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
});
