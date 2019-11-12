
export type FW = 'front-weighted';
export type BW = 'back-weighted';

export type Weightedness = FW | BW;

export type R = 'dominant';
export type L = 'offside';
export type C = 'center'

export type Sidedness = R | L | C;

export type HI = 'high-line';
export type LO = 'low-line';
export type MID = 'middle';
export type Level = HI | LO | MID;

export type PointPosition = 'on-line' | 'off-line' | 'di-donna';

export class Poste {
    constructor(readonly weight: Weightedness,
                readonly side: Sidedness, 
                readonly level: Level,
                readonly pointpos: PointPosition)
                {Poste.all_poste.push(this);};
    static all_poste: Poste[] = [];
}

export class PosteDiDonna extends Poste {
    constructor(weight: Weightedness, side: Sidedness){
        super(weight, side, 'high-line', 'di-donna');
    }
}

export class BackweightedPosteDiDonna extends PosteDiDonna {
    constructor(side: Sidedness){super('back-weighted', side);}
}

export let DominantSidePosteLonge = new Poste('front-weighted', 'dominant', 'middle', 'on-line');

export let PosteFrontale = new Poste('front-weighted','center', 'high-line', 'on-line');

export let DominantBackweightedPosteDiDonna = new BackweightedPosteDiDonna('dominant');


export let PosteTuttePortaDiFerro = new Poste(
    'front-weighted',
     'dominant',
      'low-line',
      'off-line');

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
