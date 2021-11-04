export class Person {
    name = null;
    health = 0;

    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}

export function healthStatus (personData) {
    if(personData.hasOwnProperty('name') && personData.hasOwnProperty('health')) {
        switch (true) {
            case (personData.health > 50):
                return 'healthy';
            case (personData.health < 50 && personData.health >= 15):
                return 'wounded';
            default:
                return 'critical';
        }
    } else {
        return 'error';
    }
}