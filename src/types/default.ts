import { ReactNode } from 'react';

export interface BaseProp {
    children?: ReactNode;
}

export interface Tdata {
    feature: string;
    path: boolean;
    exchanges: boolean;
}
