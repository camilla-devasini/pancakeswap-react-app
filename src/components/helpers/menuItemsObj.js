import tradeIcon from "../../assets/images/trade-menu-icon-mobile-active.svg";
import earnIcon from "../../assets/images/earn-menu-icon-mobile.svg";
import winIcon from "../../assets/images/win-menu-icon-mobile.svg";
import nftIcon from "../../assets/images/nft-menu-icon-mobile.svg";
import moreIcon from "../../assets/images/menu-more.svg";

const menuItemsObj = [
  {
    title: "Trade",
    url: "/Swap",
    img: tradeIcon,
    submenu: [
      {
        title: "Swap",
        url: "Swap", // dynamic nested route without slash
      },
      {
        title: "Limit",
        url: "Limit",
      },
      {
        title: "Liquidity",
        url: "Liquidity",
      },
      {
        title: "Perpetual",
      },
    ],
  },
  {
    title: "Earn",
    url: "/Farms",
    img: earnIcon,
    submenu: [
      {
        title: "Farms",
        url: "Farms",
      },
      {
        title: "Pools",
        url: "Pools",
      },
    ],
  },
  {
    title: "Win",
    url: "/Trading-Competition",
    img: winIcon,
    submenu: [
      {
        title: "Trading-Competition",
        url: "Trading-Competition",
      },
      {
        title: "Prediction",
        url: "Prediction",
      },
      {
        title: "Lottery",
        url: "Lottery",
      },
    ],
  },
  {
    title: "NFT",
    url: "/Overview",
    img: nftIcon,
    submenu: [
      {
        title: "Overview",
        url: "Overview",
      },
      {
        title: "Collections",
        url: "Collections",
      },
      {
        title: "Activity",
        url: "Activity",
      },
    ],
  },
  {
    img: moreIcon,
    url: "/auth/login",

    submenu: [
      {
        title: "Login",
        url: "/auth/login",
      },
      {
        title: "IFO",
        url: "Ifo",
      },
      {
        title: "Voting",
        url: "Voting",
      },
      {
        title: "Leaderboard",
        url: "Leaderboard",
      },
      {
        title: "Blog",
        url: "Blog",
      },
      {
        title: "Docs",
        url: "Docs",
      },
    ],
  },
];

const submenuItemsTrade = ["Swap", "Limit", "Liquidity"];
const submenuItemsEarn = ["Farms", "Pools"];
const submenuItemsWin = ["Trading-Competition", "Prediction"];
const submenuItemsNft = ["Overview", "Collection"];

export {
  menuItemsObj,
  submenuItemsTrade,
  submenuItemsEarn,
  submenuItemsWin,
  submenuItemsNft,
};
