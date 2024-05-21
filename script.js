document.addEventListener("DOMContentLoaded", function () {
    const telegramButton = document.getElementById("telegramButton");

    // Verificăm dacă biblioteca Telegram WebApp este disponibilă
    if (window.Telegram.WebApp) {
        console.log("Telegram WebApp is available.");
        telegramButton.addEventListener("click", function () {
            // Trimitem un mesaj la bot
            Telegram.WebApp.sendData("Hello from the WebApp!");
        });
    } else {
        console.log("Telegram WebApp is not available.");
    }
});