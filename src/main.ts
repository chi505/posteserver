import * as guards from './guards';
import {sample} from 'underscore';

function showState(divName: string, fighter1: Fighter, fighter2:Fighter) {
    const elt = document.getElementById(divName);

    elt.innerText = fighter1.toString() + "\n" + fighter2.toString();
    guards.Poste.all_poste.forEach(element => {
    elt.innerText += element.toString();        
    });
}

class Fighter {
    constructor(readonly name: string)
        {
            this.legalPoste = guards.Poste.all_poste;
            this.currentGuard = sample(this.legalPoste);
        };
    currentGuard: guards.Poste;
    legalPoste: guards.Poste[];
    toString(): string{
        return this.name + ": " + this.currentGuard.toString() + "\n"
    };
}

let Alice = new Fighter('Alice');
let Bob = new Fighter ('Bob');

showState('greeting', Alice, Bob);
console.log(guards.Poste.all_poste)