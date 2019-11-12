import { sample } from 'underscore';
import * as guards from './guards';
import * as actions from './actions';

export class Fighter {
    constructor(readonly name: string) {
        this.legalPoste = guards.Poste.all_poste;
        this.currentGuard = sample(this.legalPoste);
    }
    
    currentGuard: guards.Poste;
    legalPoste: guards.Poste[];
    knownActions: actions.Action[];
    toString(): string {
        return this.name + ": " + this.currentGuard.toString() + "\n";
    }
    ;
}
