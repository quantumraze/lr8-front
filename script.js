let playerName = prompt("Введіть ваше ім'я:");

while (playerName === null || playerName.trim() === "") 
{
    playerName = prompt("Помилка! Введіть ваше ім'я:");
}

playerName = playerName.trim();
document.getElementById("playerName").textContent = playerName;

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

let playerNumber = document.getElementById("playerNumber");
let computerNumber = document.getElementById("computerNumber");
let message = document.getElementById("message");

let spinButton = document.getElementById("spinButton");
let restartButton = document.getElementById("restartButton");

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function playGame() {

    if (gameOver) 
    {
        return;
    }

    let user = randomNumber();
    let computer = randomNumber();

    playerNumber.textContent = user;
    computerNumber.textContent = computer;

    if (user > computer) 
    {

        playerScore++;
        message.textContent = "Раунд виграв " + playerName + "!";

    } else if (computer > user) 
    {

        computerScore++;
        message.textContent = "Раунд виграв комп'ютер!";

    } else 
    {

        message.textContent = "Нічия!";

    }

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    if (playerScore === 3) 
    {

        message.textContent = "Бабка тобі капець - 21.123.12312343453.34535.";
        gameOver = true;
        spinButton.disabled = true;

    } else if (computerScore === 3) 
    {

        message.textContent = "Ви без будинку вітаю!";
        gameOver = true;
        spinButton.disabled = true;

    }
}

function restartGame() {

    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;

    playerNumber.textContent = "?";
    computerNumber.textContent = "?";

    message.textContent = "Нова гра! Натисніть SPIN.";

    spinButton.disabled = false;
}

spinButton.addEventListener("click", playGame);
restartButton.addEventListener("click", restartGame);