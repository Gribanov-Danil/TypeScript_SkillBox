interface CanRun {
    run(): void
}

interface CanSwim {
    swim(): void
}


interface CanFly {
    fly(): void
}

enum Planet {
    NIBIRU = "Nibiru",
    EARTH = "Earth",
    CRYPTON = "Crypton"
}


export abstract class AbstractHuman implements CanSwim, CanFly, CanRun {
    private _planet: Planet;
    constructor(planet: Planet){
        this._planet = planet;
    }
    
    run(): void {}

    swim(): void {}

    fly(): void {}
}

export class Earthman extends AbstractHuman {
    constructor(){
        super(Planet.EARTH);
    }

    run(): void {
        console.log("Бегит");
    }

    swim(): void {
        console.log("Пловец");
    }
}

export class Cryptonman extends AbstractHuman{
    constructor(){
        super(Planet.CRYPTON);
    }

    run(): void {
        console.log("Бегит");
    }

    swim(): void {
        console.log("Пловец");
    }

    fly(): void {
        console.log("Лечу");
    }
}

export class Nibiruman extends AbstractHuman{
    constructor(){
        super(Planet.NIBIRU);
    }
    
    run(): void {
        console.log("Бегит");
    }
}

declare function swim(item: CanSwim): void;

let niba = new Nibiruman();
niba.swim();
let man = new Earthman();
man.run();