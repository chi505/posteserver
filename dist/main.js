"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _ = __importStar(require("underscore"));
const actions = __importStar(require("./actions"));
const Fighter_1 = require("./Fighter");
const guards = __importStar(require("./guards"));
function showState(fighter1, fighter2) {
    let retval = "";
    retval = fighter1.toString() + "\n" + fighter2.toString();
    guards.Poste.all_poste.forEach((element) => {
        retval += element.toString();
    });
    const agentAction = _.sample(fighter1.knownActions);
    const patientAction = _.sample(fighter2.knownActions);
    retval += fighter1.name + ": " + agentAction.name + "\n";
    retval += fighter2.name + ": " + patientAction.name + "\n";
    retval += actions.resolveAction(agentAction, patientAction);
    return retval;
}
const Alice = new Fighter_1.Fighter("Alice");
const Bob = new Fighter_1.Fighter("Bob");
console.log(guards.Poste.all_poste);
const app = express_1.default();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send(showState(Alice, Bob));
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:noconsole
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=main.js.map