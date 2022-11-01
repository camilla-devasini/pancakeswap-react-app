import tradeIcon from "../../assets/images/trade-menu-icon-mobile-active.svg";
import earnIcon from "../../assets/images/earn-menu-icon-mobile.svg";
import winIcon from "../../assets/images/win-menu-icon-mobile.svg";
import nftIcon from "../../assets/images/nft-menu-icon-mobile.svg";
import moreIcon from "../../assets/images/menu-more.svg";


export const menuItemsObj =

[
    {
        title: 'Trade',
        url: '/swap',
        img: tradeIcon,
        submenu: [
            {
                title: 'Swap',
                url: 'swap'  // dynamic nested route without slash
            },
            {
                title: 'Limit',
                url: 'limit'
            },
            {
                title: 'Liquidity',
                url: 'liquidity'
            },
            {
                title: 'Perpetual',
               
            }
        
        ]
    },
    {
        title: 'Earn',
        url: '/farms',
        img: earnIcon,
        submenu: [
            {
                title: 'Farms',
                url: 'farms'
            },
            {
                title: 'Pools',
                url: 'pools'
            }
        ]
    },
    {
        title: 'Win',
        url: '/prediction',
        img: winIcon,
        submenu: [
            {
                title: 'Trading Competition',
                url: 'trading-competion'
            },
            {
                title: 'Prediction',
                url: 'prediction'
            },
            {
                title: 'Lottery',
                url: 'lottery'
            }
        ]
    },
    {
        title: 'NFT',
        url: '/overview',
        img: nftIcon,
        submenu: [
            {
                title: 'Overview',
                url: 'overview'
            },
            {
                title: 'Collections',
                url: 'collections'
            },
            {
                title: 'Activity',
                url: 'activity'
            }
        ]
    }, {
        img: moreIcon,
        url: '/blog',
  
        submenu: [
            {
                title: 'Info',
                url: 'info'
            },
            {
                title: 'IFO',
                url: 'ifo'
            },
            {
                title: 'Voting',
                url: 'voting'
            },
            {
                title: 'Leaderboard',
                url: 'leaderboard'
            },
            {
                title: 'Blog',
                url: 'blog'
            },
            {
                title: 'Docs',
                url: 'docs'
            }
        ]
        
        },
    ]