import { sayHello } from './greet';

import * as guards from './guards';

function showState(divName: string, fighter1: Fighter, fighter2:Fighter) {
    const elt = document.getElementById(divName);
    elt.innerText = fighter1.name + " is fighting " + fighter2.name;
}

class Fighter {
    constructor(readonly name: string)
        {this.currentGuard = guards.BackWeightedDominantSidePostaDiDonna;};
    currentGuard: guards.Guard;
}

let Alice = new Fighter('Alice');
let Bob = new Fighter ('Bob');

showState('greeting', Alice, Bob);