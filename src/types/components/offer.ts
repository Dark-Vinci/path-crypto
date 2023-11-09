import { BaseProp } from "../default";

export interface OfferProps extends BaseProp {
    readonly src: string;
    readonly title: string;
    readonly description: string;
}