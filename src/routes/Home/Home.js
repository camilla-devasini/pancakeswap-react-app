
import { Cake } from "./CakeSection/Cake";
import { Earn } from "./EarnSection/Earn";
import { Hero } from "./HeroSection/Hero";
import { Intro } from "./IntroSection/Intro";
import { Start } from "./StartSection/Start";
import { Trade } from "./TradeSection/Trade";
import { Win } from "./WinSection/Win";


  

function Home() {
    return (
        <>
        <Hero/>
        <Intro/>
        <Trade/>
        <Earn/>
        <Win/>
        <Cake/>
        <Start/>
      
        </>
    )
}
export default Home;