main();

function main() {
    let winningBalance = victoryAndLossCalculator(150, 5);
    let level = playerLevel(winningBalance);
    console.log(`O Herói tem de saldo de **${winningBalance}** vitórias e está no nível de **${level}**`);
}

function victoryAndLossCalculator(victory, loss) {
    let winningBalance = victory - loss;
    return winningBalance;
}

function playerLevel(winningBalance) {
    if(winningBalance < 10) {
        return "Ferro";
    }  else if (winningBalance > 10 && winningBalance <= 20) {
        return "Bronze";
    } else if (winningBalance > 20 && winningBalance <= 50) {
        return "Prata";
    } else if (winningBalance > 50 && winningBalance <= 80) {
        return "Ouro";
    } else if (winningBalance > 80 && winningBalance <= 90) {
        return "Diamante";
    } else if (winningBalance > 90 && winningBalance <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}


