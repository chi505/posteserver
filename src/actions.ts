import * as guards from './guards';

export function resolveAction(agentAction: Action, patientAction: Action): 'Agent wins.' | 'Patient wins.' | 'No change.' | 'Two dead idiots.' {
    if (agentAction.kind === 'parry') {return 'No change.';}
    if (agentAction.kind === 'thrust' && patientAction.kind === 'thrust'){return 'Two dead idiots.';};
    if (patientAction.canCounter(agentAction)){
        return 'Patient wins.';
    }
    return 'Agent wins.';
}

export interface Action  {
    kind: 'cut' | 'thrust' | 'parry';
    name?: string;
    initialGuard: guards.Poste;
    terminalGuard: guards.Poste;
    medialGuard?: guards.Poste;
    canCounter?: (action: Action)=>boolean;
};

export let all_actions: Action[] = [];

export let MandritoFendente: Action = {
    kind: 'cut',
    name: 'Mandrito Fendente',
    initialGuard: guards.DominantBackweightedPosteDiDonna,
    terminalGuard: guards.DominantSidePosteLonge,
    canCounter: (action: Action)=>{return action !== MandritoFalso;}
};
all_actions.push(MandritoFendente);

export let CoverteInFrontale: Action = {
    kind: 'parry',
    name: 'Coverte in Frontale',
    initialGuard: guards.DominantBackweightedPosteDiDonna,
    terminalGuard: guards.PosteFrontale,
    canCounter: (action: Action)=>{return [MandritoFendente, MandritoFalso].includes(action)}
}
export let MandritoFalso: Action = {
    kind: 'cut',
    name: 'Mandrito Falso',
    initialGuard: guards.OffsideBackweightedPosteDiDonna,
    terminalGuard: guards.OffsidePosteLonge,
    canCounter: (action: Action)=>{return action !== MandritoFendente;}
}
all_actions.push(CoverteInFrontale);
all_actions.push(MandritoFalso)
