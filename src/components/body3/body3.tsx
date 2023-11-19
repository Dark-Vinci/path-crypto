import React from 'react';

import style from './body3.module.scss'
import { uid } from 'uid';

interface Tdata {
    feature: string;
    path: boolean;
    exchanges: boolean;
}

export function Body3(): JSX.Element {
    const tableValues: Array<Tdata> = [
        {feature: 'Do your own research', path: false, exchanges: true },
        {feature: 'Registered Robo-Investment Advisor', path: true, exchanges: false },
        {feature: 'Risk-adjusted portfolios', path: true, exchanges: false },
        {feature: 'Risky leverage trading', path: false, exchanges: true },
        {feature: 'Educational resources', path: true, exchanges: true },
    ];

    return (
        <div className={ style.container }>
            <div className={ style.header }>
                <h3>Path is not a crypto exchange</h3>
            </div>

            <div className={ style.description }>
                <p>As a regulated investment advisor, we provide long-term investment strategies that put your interest ahead of our own</p>
            </div>

            <div className={ style.table }>
                <div className={ style.table_wrapper }>
                    <table>
                        <thead>
                            <tr className={style.head}>
                                <td>Features</td>
                                <td>
                                    <div className={ style.path_logo}></div>
                                    <p>Path</p>
                                </td>
                                <td>Crypto Exchanges</td>
                            </tr>
                        </thead>

                        <tbody className={style.tbody}>
                            {
                                tableValues.map(val => {
                                    return (
                                        <tr key={uid()}>
                                            <td>{ val.feature }</td>
                                            <td><input type="radio" name="" checked={val.path}/></td>
                                            <td><input type="radio" name="" checked={val.exchanges}/></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={ style.last }>
                <div className={ style.wrapper }>
                    <h4>Join 200,000+ on the waitlist for <span>Path</span> Managed Portfolios.</h4>
                </div>
            </div>
        </div>
    );
}
