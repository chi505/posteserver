import { sample } from "underscore";
import * as actions from "./actions";
import { Poste }  from "./guards";
import { Person } from "./person";

export class Fighter extends Person {

    public currentGuard: Poste;
    public readonly legalPoste: Map<string,Poste>;
    public readonly knownActions: actions.Action[];
    constructor({ name, the_nth }: { name: string; the_nth: number; }) {
        super(name, the_nth)
        this.legalPoste = Poste.all_poste;
        this.currentGuard = sample(this.legalPoste);
        this.knownActions = actions.all_actions;
    }
    public toString(): string {
        return this.name + " " + this.the_nth + ": " + this.currentGuard.toString() + "\n";
    }
    public die(): Fighter { return new Fighter({ name: this.name, the_nth: this.the_nth + 1 }); }
}
