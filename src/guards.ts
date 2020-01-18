import { type } from "os";
import { tcs } from "./tcs";

// this is basically a config file

export type FW = "front-weighted";
export type BW = "back-weighted";
export type Weightedness = FW | BW;

export type R = "dominant";
export type L = "offside";
export type C = "center";
export type Sidedness = R | L | C;

export type HI = "high-line";
export type LO = "low-line";
export type MID = "middle";
export type Level = HI | LO | MID;

export type PointPosition = "on-line" | "off-line" | "di-donna";

export type Attribute = Weightedness | Sidedness | Level | PointPosition

interface Dictionary<T> {[key: string]: T;};

export class Poste {

    public static all_poste: Map<string, Poste> = new Map<string,Poste>();        

    public static attributeSets: Map<Attribute, Poste[]>

    constructor(readonly name: string,
                readonly weight: Weightedness,
                readonly side: Sidedness,
                readonly level: Level,
                readonly pointpos: PointPosition) {
                     {
                        Poste.all_poste.set(name, this);
                        for (const attribute of [weight, side, level, pointpos]){
                            Poste.attributeSets.set(attribute, Poste.attributeSets.get(attribute).concat(this))
                        }
                        // tslint:disable-next-line:no-console
                        console.log("Added Poste " + this.toString());
                    }
                }
    public toString(): string {
        return this.name + ": " +
                this.weight + ", " +
                this.side + ", " +
                this.level + ", " +
                this.pointpos + "\n";
    }
}

let registrar: Poste;

export class PosteDiDonna extends Poste {
    constructor(weight: Weightedness, side: Sidedness) {
        super(tcs(side) + " " + tcs(weight) + " Di-Donna", weight, side, "high-line", "di-donna");
    }
}

export class BackweightedPosteDiDonna extends PosteDiDonna {
    constructor(side: Sidedness) {super("back-weighted", side); }
}

export class ForwardweightedPosteDiDonna extends PosteDiDonna {
    constructor(side: Sidedness) {super("front-weighted", side); }
}

export class PosteLonge extends Poste {
    public pointpos: "on-line";
    public level: MID;
    public weight: FW;
    constructor(name: string, side: Sidedness) {
        super(name, "front-weighted", side, "low-line", "on-line");
    }
}

const longe: PosteLonge = new PosteLonge("dummy", "center");
const longe2: Poste = new PosteLonge("dummy", "center");

console.log(longe.level);
console.log(longe2.level);

export class DominantSidePosteLonge extends PosteLonge {
    public name: "Poste Longe";
    public side: "dominant";
    constructor(){super("Poste Longe", "dominant");}
}

registrar = new DominantSidePosteLonge();

export class OffsidePosteLonge extends PosteLonge {
    name: "Offside Longe";
    side: 'offside';
    constructor(){super("Offside Longe", "offside");}
}

registrar = new OffsidePosteLonge();


export const PosteFrontale = new Poste("Frontale", "front-weighted", "center", "high-line", "on-line");

export class DominantBackweightedPosteDiDonna extends BackweightedPosteDiDonna {
    constructor() {
        super("dominant");
    }
}

export const OffsideBackweightedPosteDiDonna = new BackweightedPosteDiDonna("offside");

export const DominantForwardweightedPosteDiDonna = new ForwardweightedPosteDiDonna("dominant");

export const OffsideForwardweightedPosteDiDonna = new ForwardweightedPosteDiDonna("offside");

export interface IsDiDonna extends Poste {pointpos: "di-donna"; }

export class PosteDiFerro extends Poste{
    weight: "front-weighted"
    level:  "low-line"
    line:  "off-line"
    constructor(name:string, side:Sidedness){
        super(name, "front-weighted", side, "low-line", "off-line")
    }
}

export class PosteTuttePorteDiFerro extends PosteDiFerro {
    name: "Tutte Porte Di Ferro"
    side: R

}

export class PostePorteDiFerroMezzano extends PosteDiFerro {
    name: "Porte Di Ferro Mezzano"
    side: L
}