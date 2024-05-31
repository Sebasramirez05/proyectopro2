function verificarCaptcha(event) {
    let response = grecaptcha.getResponse();
    if (response.length === 0) {
        console.log("Por favor, complete el captcha.");
        event.preventDefault();
    }
}
document.getElementById("form").addEventListener("submit", verificarCaptcha);