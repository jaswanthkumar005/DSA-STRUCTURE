type Constructor<T = {}> = new (...args: any[]) => T;

function CanFly<T extends Constructor>(Base: T) {
    return class extends Base {
        fly() {
            console.log('Flying');
        }
    };
}

function CanSwim<T extends Constructor>(Base: T) {
    return class extends Base {
        swim() {
            console.log('Swimming');
        }
    };
}

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class BirdFish extends CanSwim(CanFly(Animal)) {}

const birdFish = new BirdFish('Nemo');
birdFish.fly(); // Output: Flying
birdFish.swim(); // Output: Swimming
