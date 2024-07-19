const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const resultText = getResult(playerChoice, computerChoice);
        document.getElementById('result-text').innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${resultText}`;
    });
});

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (rules[playerChoice].includes(computerChoice)) {
        return "You won!";
    } else {
        return "You lose!";
    }
}
