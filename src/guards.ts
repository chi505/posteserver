let GuardTypes: PointForwardGuard | ForwardWeightedGuard | BackWeightedGuard;
export {GuardTypes};

export interface Guard{
    name: string;
}

export interface PointForwardGuard extends Guard{
    thrust() : void;
}

export interface ForwardWeightedGuard extends Guard{
    shiftWeight(): void;
}
export interface BackWeightedGuard extends Guard{
    shiftWeight(): void;
}

export interface DominantSideGuard extends Guard{}

export let BackWeightedDominantSidePostaDiDonna: BackWeightedGuard & DominantSideGuard = {
    name: "Dominant Posta Di Donna", 
    shiftWeight() {console.log("weight shifted");}
}

