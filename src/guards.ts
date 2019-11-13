import { tcs } from "./tcs";

//this is basically a config file

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

type Guard =  {
    readonly name: string,
                readonly weight: Weightedness,
                readonly side: Sidedness, 
                readonly level: Level,
                readonly pointpos: PointPosition
}

export class Poste {
    constructor(readonly name: string,
                readonly weight: Weightedness,
                readonly side: Sidedness, 
                readonly level: Level,
                readonly pointpos: PointPosition)
                {Poste.all_poste.push(this);};
    static all_poste: Poste[] = [];
    toString(): string {
        return this.name + ": " + 
                this.weight + ", " +
                this.side + ", " + 
                this.level + ", " + 
                this.pointpos + "\n";
    }
}

type PosteAlias = Poste;

export let dummyPoste: Guard = {name: "dummy", weight: 'front-weighted', side: 'offside', level: 'high-line', pointpos: 'di-donna'};

export class PosteDiDonna extends Poste {
    constructor(weight: Weightedness, side: Sidedness){
        super(tcs(side)+ " " + tcs(weight) + " Di-Donna", weight, side, 'high-line', 'di-donna');
    }
}

export class BackweightedPosteDiDonna extends PosteDiDonna {
    constructor(side: Sidedness){super('back-weighted', side);}
}

export const DominantSidePosteLonge = new Poste('Poste Longe','front-weighted', 'dominant', 'middle', 'on-line');

export const OffsidePosteLonge = new Poste('Poste Longe Offside', 'front-weighted','offside','middle','on-line');

export const PosteFrontale = new Poste('Frontale','front-weighted','center', 'high-line', 'on-line');

export const DominantBackweightedPosteDiDonna = new BackweightedPosteDiDonna('dominant');

export const OffsideBackweightedPosteDiDonna = new BackweightedPosteDiDonna('offside');

export const PosteTuttePortaDiFerro = new Poste('Tutte Porta Di Ferro',
    'front-weighted',
     'dominant',
      'low-line',
      'off-line');

