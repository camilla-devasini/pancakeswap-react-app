
import { Cake } from "./CakeSection/Cake";
import { Earn } from "./EarnSection/Earn";
import { Hero } from "./HeroSection/Hero";
import { Intro } from "./IntroSection/Intro";
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
      
        </>
    )
}
export default Home;