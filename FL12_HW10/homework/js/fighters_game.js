function fighter(properties) {
    let fighterWins = 0,
        fighterLosses = 0,
        deadHp = 0,
        name = properties.name,
        damage = properties.damage,
        strength = properties.strength,
        agility = properties.agility,
        hp = properties.hp,
        startHP = hp;
    return {
        getName: () => name,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => hp,
        addWin: () => fighterWins++,
        addLoss: () => fighterLosses++,
        logCombatHistory: () => console.log(`Name: ${name}, Wins: ${fighterWins}, Losses: ${fighterLosses}`),
        heal(healthPoints) {
            if (hp + healthPoints > startHP) {
                hp = startHP;
            } else {
                hp += healthPoints;
            }
        },
        dealDamage(damage) {
            if (hp <= damage) {
                hp = deadHp;
            } else {
                hp -= damage;
            }
        },
        attack(defender) {
            const CHANCE = 100;
            let successChance = CHANCE - (defender.getStrength() + defender.getAgility());
            let randomChance = Math.floor(Math.random() * (CHANCE + 1));
            if (randomChance < successChance) {
                defender.dealDamage(this.getDamage());
                console.log(`${this.getName()} makes ${damage} to ${defender.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        }
    };
}

function battle(myFighter1, myFighter2) {
    if (myFighter1.getHealth() <= 0) {
        console.log(`${myFighter1.getName()} is dead and can't fight`);
    } else if (myFighter2.getHealth() <= 0) {
        console.log(`${myFighter2.getName()} is dead and can't fight`);
    }
    while (myFighter1.getHealth() > 0 && myFighter2.getHealth() > 0) {
        myFighter1.attack(myFighter2);
        if (myFighter2.getHealth() <= 0) {
            console.log(`${myFighter1.getName()} has won!`);
            myFighter1.addWin();
            myFighter2.addLoss();
            break;
        }
        myFighter2.attack(myFighter1);
        if (myFighter1.getHealth() <= 0) {
            console.log(`${myFighter2.getName()} has won!`);
            myFighter2.addWin();
            myFighter1.addLoss();
            break;
        }
    }
}