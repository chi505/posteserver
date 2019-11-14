import express from "express";
import * as _ from "underscore";
import * as actions from "./actions";
import { Fighter } from "./Fighter";
import * as guards from "./guards";

function showState(fighter1: Fighter, fighter2: Fighter): string {
    let retval: string = "";

    retval = fighter1.toString() + "\n" + fighter2.toString();
    guards.Poste.all_poste.forEach((element) => {
    retval += element.toString();
    });
    const agentAction: actions.Action = _.sample(fighter1.knownActions);
    const patientAction: actions.Action = _.sample(fighter2.knownActions);
    retval += fighter1.name + ": " + agentAction.name  + "\n";
    retval += fighter2.name + ": " + patientAction.name  + "\n";

    retval += actions.resolveAction(agentAction, patientAction);
    return retval;
}

const Alice = new Fighter("Alice");
const Bob = new Fighter ("Bob");
console.log(guards.Poste.all_poste);

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( showState(Alice, Bob));
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:noconsole
    console.log( `server started at http://localhost:${ port }` );
} );
