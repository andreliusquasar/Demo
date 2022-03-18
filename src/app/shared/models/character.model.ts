export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IAtribute;
    location: IAtribute;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface IAtribute {
    name: string;
    url: string;
}
  