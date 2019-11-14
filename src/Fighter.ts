import { sample } from "underscore";
import * as actions from "./actions";
import * as guards from "./guards";

export class Fighter {

    public currentGuard: guards.Poste;
    public legalPoste: guards.Poste[];
    public knownActions: actions.Action[];
    constructor(readonly name: string) {
        this.legalPoste = guards.Poste.all_poste;
        this.currentGuard = sample(this.legalPoste);
        this.knownActions = actions.all_actions;
    }
    public toString(): string {
        return this.name + ": " + this.currentGuard.toString() + "\n";
    }
}
