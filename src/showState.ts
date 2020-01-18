import * as _ from "underscore";
import * as actions from "./actions";
import { Fighter } from "./Fighter";
import * as guards from "./guards";
export function showState(fighter1: Fighter, fighter2: Fighter): [string, Fighter, Fighter] {
    let retval: string = "";
    retval = fighter1.toString() + "\n" + fighter2.toString();
    // guards.Poste.all_poste.forEach((element) => {
    //     retval += element.toString();
    // });
    const agentAction: actions.Action = _.sample(fighter1.knownActions);
    const patientAction: actions.Action = _.sample(fighter2.knownActions);
    retval += fighter1.name + ": " + agentAction.name + "\n";
    retval += fighter2.name + ": " + patientAction.name + "\n";
    const resolution = actions.resolveAction(agentAction, patientAction);
    if (resolution === "Agent wins.") {
        fighter2 = fighter2.die();
    } else if (resolution === "Patient wins.") {
        fighter1 = fighter1.die();
    } else if (resolution === "Two dead idiots.") {
        fighter1 = fighter1.die();
        fighter2 = fighter2.die();
    }
    return [retval + resolution, fighter1, fighter2];
}
