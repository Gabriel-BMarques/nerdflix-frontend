import { Visitor } from "./Visitor";

export interface Rating {
    readonly id: string;

    rate: number;
    description: string;
    visitorId: Visitor[];
}