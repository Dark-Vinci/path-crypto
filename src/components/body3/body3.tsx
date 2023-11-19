import { uid } from 'uid';

import style from './body3.module.scss'
import { Tdata } from '@types';
import { IoRadioButtonOnSharp, IoRadioButtonOffSharp } from "react-icons/io5";
// import { IoRadioButtonOffSharp } from "react-icons/io5";

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
                        <thead  className={ style.table_header}>
                            <tr className={style.head}>
                                <td>Features</td>
                                <td>
                                    <div className={ style.path_logo}>
                                        <img 
                                            src="https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/6329fe611a33acfb8529f09d_Path-logo.svg" 
                                            alt=""
                                            loading='lazy'
                                        />
                                    </div>
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
                                            <td>
                                                { 
                                                    val.path ? 
                                                        <IoRadioButtonOnSharp 
                                                            color='blue'
                                                            size={'30px'}
                                                        /> : 
                                                        <IoRadioButtonOffSharp 
                                                            color='blue'
                                                            size={'30px'}
                                                        />
                                                }
                                            </td>
                                            <td>
                                                { 
                                                        val.exchanges ? 
                                                            <IoRadioButtonOnSharp 
                                                                color='blue'
                                                                size={'30px'}
                                                            /> : 
                                                            <IoRadioButtonOffSharp 
                                                                color='blue'
                                                                size={'30px'}
                                                            />
                                                }
                                            </td>
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
