import * as guards from "./guards";

export type ActionOutcome =  "Agent wins." | "Patient wins." | "No change." | "Two dead idiots.";

export function resolveAction(agentAction: Action, patientAction: Action): ActionOutcome {
    if (agentAction.kind === "parry" || patientAction.kind === "parry") {return "No change."; }
    if (agentAction.kind === "thrust"){ 
        if (patientAction.kind === "thrust") {
            return "Two dead idiots."; 
        }
        else if (patientAction.canCounter(agentAction)){
            return "Patient wins."
        }
        else {
            return "Agent wins."
        }
    }
    if (patientAction.canCounter(agentAction)) {
        console.log(agentAction.kind)
        return "Patient wins.";
    }
    return "Agent wins.";
}

export interface Action {
    canCounter?: (action: Action) => boolean;
    initialGuard: guards.Poste;
    kind: "cut" | "thrust" | "parry";
    medialGuard?: guards.Poste;
    name?: string;
    terminalGuard: guards.Poste;
}

export let all_actions: Action[] = [];

export let MandritoFendente: Action = {
    canCounter: (action: Action) => action !== MandritoFalso,
    initialGuard: new guards.DominantBackweightedPosteDiDonna(),
    kind: "cut",
    name: "Mandrito Fendente",
    terminalGuard: new guards.DominantSidePosteLonge()
};
all_actions.push(MandritoFendente);

export let CoverteInFrontale: Action = {
    canCounter: (action: Action) => [MandritoFendente, MandritoFalso].includes(action),
    initialGuard: new guards.DominantBackweightedPosteDiDonna(),
    kind: "parry",
    name: "Coverte in Frontale",
    terminalGuard: guards.PosteFrontale,
};
export let MandritoFalso: Action = {
    canCounter: (action: Action) => action !== MandritoFendente,
    initialGuard: guards.OffsideBackweightedPosteDiDonna,
    kind: "cut",
    name: "Mandrito Falso",
    terminalGuard: new guards.OffsidePosteLonge(),
};
all_actions.push(CoverteInFrontale);
all_actions.push(MandritoFalso);

export interface Thrust extends Action {
    initialGuard: Exclude<guards.Poste, guards.PosteLonge>;
    kind: "thrust";
    terminalGuard: guards.PosteLonge;
}

export interface Cut extends Action {
    kind: "cut";
    terminalGuard: {weight: guards.FW} & guards.PosteDiDonna;
}

export function dummyOfCut(cut: Cut): string {
    return cut.terminalGuard.weight;
}

export interface Parry extends Action {
    kind: "parry";
    terminalGuard: guards.Poste & {pointpos: "on-line" | "off-line"};
}

export function dummyOfParry(parry: Parry): void {
    console.log(parry.terminalGuard.level);
}
