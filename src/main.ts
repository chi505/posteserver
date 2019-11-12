import * as guards from './guards';
import {sample} from 'underscore';

function showState(divName: string, fighter1: Fighter, fighter2:Fighter) {
    const elt = document.getElementById(divName);

    elt.innerText += guards.Poste.all_poste.length
    elt.innerText += fighter1.name + " is fighting " + fighter2.name + "\n";
    let poste: guards.Poste = fighter1.currentGuard;
    elt.innerText += poste.weight;
    
    elt.innerText += fighter2.currentGuard.level;
}

class Fighter {
    constructor(readonly name: string)
        {
            this.legalPoste = guards.Poste.all_poste;
            this.currentGuard = sample(this.legalPoste);
        };
    currentGuard: guards.Poste;
    legalPoste: guards.Poste[];
}

let Alice = new Fighter('Alice');
let Bob = new Fighter ('Bob');

showState('greeting', Alice, Bob);
console.log(guards.Poste.all_poste)