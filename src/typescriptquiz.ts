// keep the types, change the value

// replace 'undefined' with any values in no particular order
// 1) a valid value and make them compile
// 2) try also make it fail

// ==========the commonplace=========
export const num: number = 1;
export const str: string = "1";

export const strs: string[] = ["1"];
export const strs1: Array<string> = ["1"];

export const maybeNumber: number | undefined | null = undefined;
export const empty: {} = { field: 'value'};











// =====strangeness==========

// uncomment this line and try make it compile
export const nah: never = (() => { throw new Error(); })();

export const numerish: number | string = 1;

export const digits: 1 | 2 = 1;

export const wild: 3 | 'three' = 'three';

// maps
export const strDict: Record<string, string> = { 'one' : '1', 'two': '2'};

export const numDict: Record<number, string> = {1 : 'one', 2: 'three ;)'};











// =======mind bend===========

type Food = 'mango' | 'apple' | 'cashew';
type Activity = 'walk' | 'sleep' | 'belly rub';
type Sound = 'oink' | 'meuw';

// interface & type almost inter-exchangeable
interface EatAndSing { voice: Sound, food: Food[] };
interface Active { activity: Activity };

export const pet: EatAndSing & Active = { 'voice': 'meuw', 'food': [ 'apple' ], 'activity': 'belly rub' };

export const pureSinger: Pick<EatAndSing, 'voice' | 'food'> = { 'voice': 'meuw', 'food' : ['apple'] };

type Eater = { food: Exclude<Food, 'mango'>, name: string };

 // try different kinds of Food
export const eater: Eater = { food: 'apple', name: 'jim'};

// change the type below so the Piglet does not have activity 'walk'
type Piglet = { activity: Exclude<Food, 'walk'>, food: Food[] };

// export const piglet: Piglet = { activity: 'walk', food: [ 'mango' ] };






//====== madness==========
type Swap<T> = T extends string ? number : string;

let x : Swap<string> = 1;

// define this function
// type guards // unknown types
// first, replace return type 
export function swap<T extends string | number>(son: T): Swap<T> {
    switch (typeof son) {
        case 'string': return Number(son) as Swap<T>;
        default: return String(son) as Swap<T>;
    }
}

// inspect the types of inni and issi?
export const inni = swap('1');
export const issi = swap(inni);