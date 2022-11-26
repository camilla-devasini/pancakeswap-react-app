import { CupsSticker } from "./Cups-Sticker/CupsSticker";
import { DetailsCard } from "./Details-Card/DetailsCard";
import { FighterBunny } from "./Fighter-Bunny/FighterBunny";
import { FinishedCard } from "./Finished-Card/FinishedCard";
import { PrizesByTeamCard } from "./Prizes-By-Team-Card/PrizesByTeamCard";
import { PrizesCard } from "./Prizes-Card/PrizesCard";
import { PurpleBunnyCard } from "./Purple-Bunny-Card/PurpleBunnyCard";
import { RulesSticker } from "./Rules-Sticker/RulesSticker";
import { SimpleCard } from "./Simple-Card/SimpleCard";
import { TopTradersCard } from "./Top-Traders-Card/TopTradersCard";
import { YourScoreCard } from "./Your-Score-Card/YourScoreCard";

function TradingCompetitionLatest() {
  return (
    <>
      <FighterBunny />
      <div className="your-score">
        <FinishedCard />
        <YourScoreCard />
        <CupsSticker />
      </div>

      <div className="team-ranks">
        <TopTradersCard />
      </div>

      <div className="prizes">
        <PrizesCard />
        <div className="prizes-sub">
          <PurpleBunnyCard />
          <PrizesByTeamCard />
        </div>
      </div>

      <div className="rules">
        <RulesSticker />
        <div className="rules-sub">
          <SimpleCard />
          <DetailsCard />
        </div>
      </div>

      <div className="finished"></div>
    </>
  );
}
export default TradingCompetitionLatest;
