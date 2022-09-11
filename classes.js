class Unit {
    constructor(name, civilization, attack) {
        this.name = name;
        this.civilization = civilization;
        this.attack = attack;
    }

    get allProperties(){
        return 
    }
}

class Cavalry extends Unit {
    constructor(name, civilization, attack, speed) {
        super(name, civilization, attack);
        this.speed = speed;
    }
}

class Archer extends Unit {
    constructor(name, civilization, attack, rangedAttack) {
        super(name, civilization, attack);
        this.rangedAttack = rangedAttack;
    }
}

let militia = new Unit("Militia", "British", 5);
let lightCavalry = new Cavalry("Light Cavalry", "British", 6, 1.5);
let archer = new Archer("Archer", "Goths", 4, 6);

console.log(militia, lightCavalry, archer);

const unitCompare = (unit1, unit2) => {
    if (unit1.attack > unit2.attack) {
        return `${unit1.name} wins!`;  
    } else {
        return `${unit2.name} is the better unit!`;
    }
}

console.log(unitCompare(militia, archer))