

import bottomRight from '../../../assets/images/homepage/bottom-right@2x.webp';
import coin from '../../../assets/images/homepage/coin@2x.webp';
import topLeft from '../../../assets/images/homepage/top-left@2x.webp';
import topRight from '../../../assets/images/homepage/top-right@2x.webp'

export function Cake() {

    return (
        <div>
            <section className="container-6">
                <div className="wrapper-6">
                    <div className="top-6">
                        <picture className="bunny">
                            <img className="bottom-right" src={bottomRight} alt="" />
                            <img className="coin" src={coin} alt="" />
                            <img className="top-left" src={topLeft} alt="" />
                            <img className="top-right" src={topRight} alt="" />
                        </picture>
                        <div className="box-cake">
                            <h2><span>CAKE</span> makes our world go round.</h2>
                            <p>CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it...
                                heck, you can even vote with it!
                            </p>
                            <div className="cake-buttons">
                                <button> Buy CAKE
                                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"></a>
                                </button>
                                <a href="https://docs.pancakeswap.finance/tokenomics/cake">Learn</a>
                            </div>
                        </div>
                    </div>
                    <div className="box-data">
                        <div className="circulating-supply">
                            <p>Circulating Supply</p>
                            <span>144,317,057</span>
                        </div>
                        <div className="total-supply">
                            <p>Total Supply</p>
                            <span>325,220,371</span>
                        </div>
                        <div className="max-supply">
                            <p>Max Supply</p>
                            <span>750,000,000</span>
                        </div>
                        <div className="market-cap">
                            <p>Market cap</p>
                            <span>$580 million</span>
                        </div>
                        <div className="burned-to-date">
                            <p>Burned to date</p>
                            <span>557,329,016</span>
                        </div>
                        <div className="current-emissions">
                            <p>Current emissions</p>
                            <span>12.75/block</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}