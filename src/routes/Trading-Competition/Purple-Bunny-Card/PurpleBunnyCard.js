import React from "react";

import purpleBunny from '../../../assets/images/trading-competition/MoD-flipper.webp';

export function PurpleBunnyCard() {

    return (
        <>
            <div className="wrapperBunnyCard">
                <div className="text">
                    <p>Every eligible participant will win prizes at the end of the competition.</p>
                    <h2>The better your team performs, the better prizes you will get!</h2>
                    <p>The final winning team will be the team with the highest total volume score at the end of the competition period.</p>
                    <p>In addition to token prizes there are NFT rewards: <br></br>
                        A. 300 newly-designed PancakeSwap NFTs to the Top 100 Traders in each team. <br></br>
                        B. 100 Mines of Dalarnia NFTs to the Top 100 Traders ranked by the $DAR Trading Volume.
                    </p>
                </div>
                <div className="imgBunny">
                    <img src={purpleBunny}></img>
                </div>
            </div>
        </>
    )

}
