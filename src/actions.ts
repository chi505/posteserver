import * as guards from './guards';

export interface Action  {
    kind: 'cut' | 'thrust' | 'parry';
    initialGuard: guards.Poste;
    terminalGuard: guards.Poste;
    medialGuard?: guards.Poste;
    canCounter?: Action[];
};

export let MandritoFendente: Action = {
    kind: 'cut',
    initialGuard: guards.DominantBackweightedPosteDiDonna,
    terminalGuard: guards.DominantSidePosteLonge,
};

MandritoFendente.canCounter.push(MandritoFendente);