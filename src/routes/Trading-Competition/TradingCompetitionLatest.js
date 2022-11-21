import { CupsSticker } from "./Cups-Sticker/CupsSticker";
import { FighterBunny } from "./Fighter-Bunny/FighterBunny";
import { FinishedCard } from "./Finished-Card/FinishedCard";
import { PrizesByTeamCard } from "./Prizes-By-Team-Card/PrizesByTeamCard";
import { TopTradersCard } from "./Top-Traders-Card/TopTradersCard";
import { YourScoreCard } from "./Your-Score-Card/YourScoreCard";

function TradingCompetitionLatest() {
  return (
    <>
      <FighterBunny />
      <div className="your-score">
        <FinishedCard />
        <YourScoreCard />
        <CupsSticker/>
      </div>

      <div className="team-ranks">
        <TopTradersCard/>
      </div>

      <div className="prizes">
        <PrizesByTeamCard />
      </div>

      <div className="rules"></div>

      <div className="finished"></div>
    </>
  );
}
export default TradingCompetitionLatest;
