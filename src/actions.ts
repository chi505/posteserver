import * as guards from "./guards";

export function resolveAction(agentAction: Action, patientAction: Action): "Agent wins." | "Patient wins." | "No change." | "Two dead idiots." {
    if (agentAction.kind === "parry") {return "No change."; }
    if (agentAction.kind === "thrust" && patientAction.kind === "thrust") {return "Two dead idiots."; }
    if (patientAction.canCounter(agentAction)) {
        return "Patient wins.";
    }
    return "Agent wins.";
}

export interface Action {
    initialGuard: guards.Poste;
    kind: "cut" | "thrust" | "parry";
    name?: string;
    terminalGuard: guards.Poste;
    medialGuard?: guards.Poste;
    canCounter?: (action: Action) => boolean;
}

export let all_actions: Action[] = [];

export let MandritoFendente: Action = {
    initialGuard: guards.DominantBackweightedPosteDiDonna,
    kind: "cut",
    name: "Mandrito Fendente",
    terminalGuard: guards.DominantSidePosteLonge,
    canCounter: (action: Action) => action !== MandritoFalso
};
all_actions.push(MandritoFendente);

export let CoverteInFrontale: Action = {
    initialGuard: guards.DominantBackweightedPosteDiDonna,
    kind: "parry",
    name: "Coverte in Frontale",
    terminalGuard: guards.PosteFrontale,
    canCounter: (action: Action) => [MandritoFendente, MandritoFalso].includes(action)
};
export let MandritoFalso: Action = {
    initialGuard: guards.OffsideBackweightedPosteDiDonna,
    kind: "cut",
    name: "Mandrito Falso",
    terminalGuard: guards.OffsidePosteLonge,
    canCounter: (action: Action) => action !== MandritoFendente
};
all_actions.push(CoverteInFrontale);
all_actions.push(MandritoFalso);
