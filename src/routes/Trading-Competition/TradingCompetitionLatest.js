import { FighterBunny } from "./Fighter-Bunny/FighterBunny";
import { FinishedCard } from "./Finished-Card/FinishedCard";
import { YourScoreCard } from "./Your-Score-Card/YourScoreCard";

function TradingCompetitionLatest() {
    return (
        <>

        <FighterBunny/>
        <div className="your-score">
        <FinishedCard/>
        <YourScoreCard/>
        </div>

        <div className="team-ranks">

        </div>

        <div className="prizes">

        </div>

        <div className="rules">

        </div>

        <div className="finished">

        </div>
        </>
    )
}
export default TradingCompetitionLatest;