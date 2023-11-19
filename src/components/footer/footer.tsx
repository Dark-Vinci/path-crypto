import style from './footer.module.scss';

import { RiInstagramLine } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

export function Footer(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.header }>
                <div className={ style.header_wrapper }>
                    <div className={ style.header_left }>
                        <div className={ style.logo }>
                            <img 
                                src="https://assets-global.website-files.com/62a0c3db69e9f31272bb38a0/6329fe611a33acfb8529f09d_Path-logo.svg" 
                                alt="" 
                                loading='lazy'
                            />
                        </div>

                        <div className={ style.others }>
                            <p>300 South Wacker, Suite 1200, Chicago, Illinois</p>
                            <p>Copyright © 2023 Path Finance Corporation. All rights reserved.</p>
                        </div>
                    </div>

                    <div className={ style.header_right }>
                        <div className={ style.right_wrapper }>
                            <div className={ style.first }>
                                <ul>
                                    <li><a href=".">Contact</a></li>
                                    <li><a href=".">Careers</a></li>
                                    <li><a href=".">Cookie Settings</a></li>
                                </ul>
                            </div>

                            <div className={ style.second }>
                                <ul>
                                    <li><a href=".">Terms and Conditions</a></li>
                                    <li><a href=".">Privacy Policy</a></li>
                                    <li><a href=".">Risk Disclosures</a></li>
                                </ul>
                            </div>

                            <div className={ style.third }>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <RiInstagramLine />
                                        </div>
                                        <p>Instagram</p>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <IoLogoTwitter />
                                        </div>
                                        <p>Twitter</p>
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <FaFacebookSquare />
                                        </div>
                                        <p>Facebook</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ style.footer }>
                <div className={ style.footer_wrapper }>
                    <div className={ style.left }>
                        <p>All investing involves risk, including the possible loss of all the money you invest. Past performance does not guarantee future performance. Historical returns, estimated returns, and probability projections are provided for informational and illustrative purposes, and may not reflect actual future performance. All performance is net of fees.</p>
                        <p>Investment management and advisory services will be provided by Path Digital Advisors, LLC ("Path"), an SEC-registered investment advisor. Before investing, all investors should read our Form ADV Brochure.</p>
                        <p>Path is not a broker-dealer, exchange, custodian, wallet provider, or counterparty. Investing in cryptocurrency is highly speculative and volatile. Path is only suitable for investors who fully understand the risk of loss and may experience large drawdowns. Investors should never invest more than they can afford to lose. Path allows you to securely manage your assets through custodial services provided by Gemini Corporation, Gemini is a qualified custodian.</p>
                    </div>

                    <div className={ style.right }>
                        <p>Path Digital Advisors LLC is a wholly owned subsidiary of Path Finance Corporation. Images throughout Path websites, mobile app, advertisements, & social media accounts are designed to illustrate the user experience and features of Path products. These images do not reflect the actual performance of Path recommendations.</p>
                        <p>By using this website, you understand the information being presented is provided for informational purposes only and agree to our <a href=".">Terms of Use</a> and <a href=".">Privacy Policy</a>. Nothing in this communication should be construed as an offer, recommendation, or solicitation to buy or sell any security. Additionally, Path & its affiliates do not provide tax advice, and investors are encouraged to consult with their personal tax advisors.</p>
                        <p>Images, graphs and tools shown in screenshots of Path’s website or mobile applications are for illustrative purposes only (to demonstrate the user experience and features of Path products) and any performance shown herein do not represent an actual performance of any client or user</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
