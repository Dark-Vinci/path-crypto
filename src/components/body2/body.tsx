import style from './body2.module.scss';

import { PiWarningLight } from 'react-icons/pi'
import { SlWallet } from 'react-icons/sl';
import { BiCandles } from 'react-icons/bi'
import { SiConvertio } from "react-icons/si";
import { FaBuysellads } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa6";
import { TbGraph } from "react-icons/tb";
import { MdOutlineAdsClick } from "react-icons/md";


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
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <div className={ style.card_2_container }>
                    <div className={ style.card2 }>
                        <div className={ style.img }>
                            <img 
                                src="https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/64f721438af47250f2c9806f_2.png" 
                                alt=""
                                loading="lazy"
                            />
                        </div>

                        <div className={ style.word_content }>
                            <div className={ style.header }>
                                <div className={ style.header_wrapper }>
                                    <p>Build Your Own Portfolio</p>
                                </div>
                            </div>

                            <div className={ style.description }>
                                <div className={ style.description_wrapper }>
                                    <h3>Know your crypto? Build your own portfolio.</h3>
                                </div>
                            </div>

                            <div className={ style.button }>
                                <div className={style.bb}>
                                    <button disabled>coming soon</button>
                                </div>
                            </div>

                            <div className={ style.item_list }>

                                <div className={ style.wrapper }>
                                    <ul>
                                        <li>
                                            <div className={ style.icon }>
                                                <FaBuysellads
                                                    color='rgb(0, 60, 255)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Buy and sell digital assets</div>
                                        </li>

                                        <li>
                                            <div className={ style.icon }>
                                                <SiConvertio
                                                    color='rgb(0, 60, 255)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Convert one crypto to many, or many to one</div>
                                        </li>

                                        <li>
                                            <div className={ style.icon }>
                                                <IoMdSearch
                                                    color='rgb(0, 60, 255)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Discover and compare cryptocurrencies</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ style.card_3_container }>
                    <div className={ style.card3 }>
                        <div className={ style.word_content }>
                            <div className={ style.header }>
                                <div className={ style.header_wrapper }>
                                    <p>Crypto on-the-go</p>
                                </div>
                            </div>

                            <div className={ style.description }>
                                <div className={ style.description_wrapper }>
                                    <h3>Your crypto portfolio in your pocket.</h3>
                                </div>
                            </div>

                            <div className={ style.button }>
                                <div className={style.bb}>
                                    <button disabled>coming soon</button>
                                </div>
                            </div>

                            <div className={ style.item_list }>

                                <div className={ style.wrapper }>
                                    <ul>
                                        <li>
                                            <div className={ style.icon }>
                                                <TbGraph
                                                    color='rgb(0, 60, 255)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Manage all your crypto in one convenient app</div>
                                        </li>

                                        <li>
                                            <div className={ style.icon }>
                                                <FaPlaneDeparture
                                                    color='rgb(0, 60, 255)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Track your portfolio anywhere, anytime</div>
                                        </li>

                                        <li>
                                            <div className={ style.icon }>
                                                <MdOutlineAdsClick
                                                    color='rgb(0, 60, 255)'
                                                    size={"30px"}
                                                />
                                            </div>
                                            <div className={ style.content }>Invest with just a few clicks</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={ style.img }>
                            <img 
                                src="https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/650067c11e9e2e864a5be42e_image%20228.png" 
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
