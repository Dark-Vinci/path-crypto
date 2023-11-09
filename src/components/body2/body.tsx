import style from './body2.module.scss';

export function Body2(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.header }>
                <h3>Ditch your crypto exchange.</h3>
            </div>
            
            <div className={ style.cards }>
                <div className={ style.card_1_container }>
                    <div className={ style.card1 }>
                        <div className={ style.img }>
                            <img src="" alt=""/>
                        </div>

                        <div className={ style.word_content }>
                            <div className={ style.header }>
                                <p>Let us build your portfolio</p>
                            </div>
                            <div className={ style.description }>
                                <h3>Automate your investing with Path Managed Portfolios.</h3>
                            </div>

                            <div className={ style.button }>
                                <button disabled>coming soon</button>
                            </div>

                            <div className={ style.item_list }>
                                <ul>
                                    <li>
                                        <div className={ style.icon }>warning</div>
                                        <div className={ style.content }>Take a risk assessment</div>
                                    </li>

                                    <li>
                                        <div className={ style.icon }>wallet</div>
                                        <div className={ style.content }>Get your personalized portfolio</div>
                                    </li>

                                    <li>
                                        <div className={ style.icon }>candle</div>
                                        <div className={ style.content }>Sit back and let us do the work</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card2"></div>
                <div className="card3"></div>
            </div>
        </div>
    );
}
