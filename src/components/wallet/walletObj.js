import metamask from "../../assets/images/metamask.png";
import binance from "../../assets/images/Binance.png";
import coinbase from "../../assets/images/coinbase.png";
import trustWallet from "../../assets/images/trust-wallet.png";
import walletConnect from "../../assets/images/walletconnect.png";
import opera from "../../assets/images/opera.png";
import mathWallet from "../../assets/images/mathwallet.png";
import tokenPocket from "../../assets/images/tokenpocket.png";
import safePal from "../../assets/images/safepal.png";
import coin98 from "../../assets/images/coin98.png";
import blocto from "../../assets/images/blocto.png";
import learnBunny from "../../assets/images/learn-connect-bunny.png";
import worldLock from "../../assets/images/world-lock.png";



const wallets = [
    { title: "Metamask", img: metamask },
    { title: "Binance", img: binance },
    { title: "Coinbase", img: coinbase },
    { title: "Trust Wallet", img: trustWallet },
    { title: "Wallet Connect", img: walletConnect },
    { title: "Opera", img: opera },
    { title: "Math Wallet", img: mathWallet },
    { title: "Token Pocket", img: tokenPocket },
    { title: "SafePal", img: safePal },
    { title: "Coin98", img: coin98 },
    { title: "Blocto", img: blocto },
]

const learning = [
    { title: "Haven’t got a wallet yet?", img: learnBunny },
    
]
const learning2 = [
    { title: "Login using a wallet connection",
      img: worldLock,
      paragraph: "A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more. Instead of setting up new accounts and passwords for every website, simply set up your wallet in one go, and connect it to your favorite DApps."
     }
]

export { wallets, learning, learning2 };

