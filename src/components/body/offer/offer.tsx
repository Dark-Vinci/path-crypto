// import React from 'react';
import { OfferProps } from '@types';

import style from './offer.module.scss';

export function Offer(props: OfferProps): JSX.Element {
    return (
        <div className={style.container}>
            <div className={ style.image }>
                <img 
                    src={props.src} 
                    alt={props.title}
                />
            </div>
            
            <div className={ style.words }>
                <div className={ style.title }>
                    { props.title }
                </div>
                <div className={ style.description }>
                    { props.description }
                </div>
            </div>
        </div>
    );
}
