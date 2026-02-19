export interface Character {
    id:       ID;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin: {
        name: string;
        url:  string;
    };
    location: {
        name: string;
        url:  string;
    };
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}


/* Real type, to use on the APP */
export type ID = string | number
export type CharacterPreview = PickcerReadOnly<Character, 'name' | 'image' | 'id'>
/*------------------------------*/

/* Practice Types */

export type CharacterNormalReadonly = Readonly<Character>
export type CharacterNormalPicker = Pick<Character, 'created' | 'episode'>

export type CharacterMyPicker = MyPick<Character, 'name' | 'id'>

/* T is the interface or objet that Picker recieve */
/* K is like take the keys of T */

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

export type PickcerReadOnly<T, K extends keyof T> = {
    readonly [P in K]: T[P]
}

/* Make a research about the difference between "in" and in keyOf */

export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}