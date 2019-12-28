let playgame = confirm('Do you want to play a game?'),
    ballNumber,
    startRange = 9,
    userNumber,
    counts = 3,
    currentCount = 0,
    prizes = [100, 50, 25],
    prize = 0,
    prizeCoefficient = 1,
    rightChoice = false; // default: user's wrong choice
if (playgame === false) {
    alert('You did not become a billionaire, but can.');
} else {
    while(playgame) {
        ballNumber = Math.floor(Math.random() * startRange);
        console.log(ballNumber);
        do {
            userNumber = +prompt('Choose a roulette pocket number from 0 to ' + (startRange - 1) +
                        '\nAttempts left: ' + (counts - currentCount) +
                        '\nTotal prize: ' + prize + '$' +
                        '\nPossible prize at current attempt: ' + prizes[currentCount] * prizeCoefficient + '$');
            if (userNumber === ballNumber) {
                rightChoice = true; 
                prize += prizes[currentCount] * prizeCoefficient; // calculates user's prize
                break;
            }
            currentCount += 1;
            rightChoice = false;
        }
        while (currentCount < counts);
        if (currentCount === counts) {
            prize = 0;
        }
        if (rightChoice === true) {
            playgame = confirm('Congratulation, you won! Your prize is: ' + prize + '$. Do you want to continue?');
        } else {
            playgame = false;
        }
        if (playgame) {
            currentCount = 0;
            startRange += 4; // increases number range at 4
            prizeCoefficient *= 2; 
        } else {
            alert('Thank you for your participation. Your prize is: ' + prize + '$.');
            playgame = confirm('Do you want to play a game?'); // returns at start
            currentCount = 0;
            prizeCoefficient = 1;
            prize = 0;
            startRange = 9;
        }
    }
}