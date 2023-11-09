import { BsFillLockFill, BsBank2 } from 'react-icons/bs'
import { SiAwsorganizations, SiShopify } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc';

import { OfferProps } from '@types';
import style from './body.module.scss';
import { Offer } from './offer';


export function Body1(): JSX.Element {
    const cards: Array<OfferProps> = [
        {
            src: 'https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/64ff27e583a110113ff5c019_Frame%2048095480.png',
            title: 'Crypto investing made simple',
            description: 'Our easy-to-use platform allows you to manage your cryptocurrency portfolio in one convenient place.',
        },

        {
            src: 'https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/64ff27e533673d684f463ea2_Frame%2048095479.png',
            title: 'Balance your risk and reward',
            description: 'Take the emotions out of the equation. Stay consistent over time using our long-term investment strategies.',
        },

        {
            src: 'https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/64ff27e5aa83c5044b00c4bc_Frame%2048095478.png',
            title: 'Intelligent crypto management',
            description: 'Our automation tools aim to keep your portfolio balanced and risk-adjusted by ensuring your assets are appropriately allocated over time.',
        },

        {
            src: 'https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/64ff27e5c9bd00e70efe8ff2_Frame%2048095481.png',
            title: 'Keep your account safe and secure',
            description: 'Path uses multi-layer security technology to protect your data.',
        },
    ];

    return (
        <div className={ style.container }>
            <div className={ style.header }>
                <div className={ style.header_container }>
                    <div className={ style.icon }>
                        <BsFillLockFill
                            color='rgb(92,175,97)'
                            size={"40px"}
                        />
                    </div>
                    <div className={ style.content }>
                        <h4>Path is a registered investment advisor.</h4>
                        <p>As a registered and regulated crypto robo-investment advisor, our responsibility is to keep our clients’ best interests at heart.</p>
                    </div>
                </div>
            </div>

            <div className={ style.feature }>
                <div className={ style.title }>Featured in</div>
                <div className={ style.members }>
                    <div>
                        <SiAwsorganizations 
                            size={"40px"} 
                        />
                    </div>

                    <div>
                        <FcGoogle 
                            size={"40px"} 
                        />
                    </div>

                    <div>
                        <SiShopify 
                            size={"40px"}
                        />
                    </div>

                    <div>
                        <BsBank2 
                            size={"40px"}
                        />
                    </div>
                </div>
            </div>

            <div className={ style.offers }>
                <div className={ style.content }>
                    {
                        cards.map(el => {
                            return (
                                <div 
                                    className={style.el}
                                    key={el.title}
                                    >
                                        <Offer
                                            src={el.src}
                                            title={el.title}
                                            description={el.description}
                                        />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
