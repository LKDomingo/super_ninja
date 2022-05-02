class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log('Name: ' + this.name)
        console.log('Health: ' + this.health)
        console.log('Strength: ' + this.strength)
        console.log('Speed: ' + this.speed)
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();

// /////////////////////////////////////
// Sensei class
// /////////////////////////////////////

class Sensei extends Ninja {
    // constructor parameters contain any new attributes passed to super
    constructor(name, wisdom = 10) {
        // super parameters are parameters of the parent class.
        super(name, 200, 10, 10)
        this.wisdom = wisdom;
    }
    speakWisdom() {
        this.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();