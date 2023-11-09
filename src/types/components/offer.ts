import { BaseProp } from "@types";

export interface OfferProps extends BaseProp {
    readonly src: string;
    readonly title: string;
    readonly description: string;
}