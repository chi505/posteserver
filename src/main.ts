import * as guards from './guards';
import { Fighter } from './Fighter';
import * as actions from './actions';
import * as _ from 'underscore';

function showState(divName: string, fighter1: Fighter, fighter2:Fighter) {
    const elt = document.getElementById(divName);

    elt.innerText = fighter1.toString() + "\n" + fighter2.toString();
    guards.Poste.all_poste.forEach(element => {
    elt.innerText += element.toString();        
    });
    let agentAction: actions.Action = _.sample(fighter1.knownActions);
    let patientAction: actions.Action = _.sample(fighter2.knownActions);
    elt.innerText += fighter1.name +": "+agentAction.name  + "\n";
    elt.innerText += fighter2.name +": "+patientAction.name  + "\n";

    elt.innerText += actions.resolveAction(agentAction, patientAction);
}

let Alice = new Fighter('Alice');
let Bob = new Fighter ('Bob');

showState('greeting', Alice, Bob);
console.log(guards.Poste.all_poste)