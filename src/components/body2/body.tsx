import style from './body2.module.scss';

import { PiWarningLight } from 'react-icons/pi'
import { SlWallet } from 'react-icons/sl';
import { BiCandles } from 'react-icons/bi'


export function Body2(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.header }>
                <h3>Ditch your crypto exchange.</h3>
            </div>
            
            <div className={ style.cards }>
                <div className={ style.card_1_container }>
                    <div className={ style.card1 }>
                        <div className={ style.word_content }>
                            <div className={ style.header }>
                                <div className={ style.header_wrapper }>
                                    <p>Let us build your portfolio</p>
                                </div>
                            </div>
                            <div className={ style.description }>
                                <div className={ style.description_wrapper }>
                                    <h3>Automate your investing with Path Managed Portfolios.</h3>
                                </div>
                            </div>

                            <div className={ style.button }>
                                <div className={ style.bb }>
                                    <button disabled>Coming soon</button>
                                </div>
                            </div>

                            <div className={ style.item_list }>
                                <div className={ style.wrapper }>
                                    <ul>
                                        <li>
                                            <div className={ style.icon }>
                                                <SlWallet
                                                    color='rgb(19,222,173)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Get your personalized portfolio</div>
                                        </li>

                                        <li>
                                            <div className={ style.icon }>
                                                <BiCandles
                                                    color='rgb(19,222,173)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Sit back and let us do the work</div>
                                        </li>

                                        <li>
                                            <div className={ style.icon }>
                                                <PiWarningLight
                                                    color='rgb(19,222,173)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Take a risk assessmentahsjskjsk</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={ style.img }>
                            <img 
                                src="https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/6503252bde9516f279572661_image%20228-p-1080.png" 
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="card2"></div>
                <div className="card3"></div>
            </div>
        </div>
    );
}
