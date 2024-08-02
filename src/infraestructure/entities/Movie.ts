import { Actor } from "./Actor";
import { Rating } from "./Rating";
import { Category } from "./Category";

export interface Movie {
    readonly id: string;

    title: string;
    description: string;
    banner: string;
    year: string;
    actors: Actor[];
    category: Category[];
    ratings: Rating[];
    classification: number
}