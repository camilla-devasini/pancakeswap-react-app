// export const CoinList = (currency) =>
//   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (searchInput) =>
  `https://api.coingecko.com/api/v3/coins/${searchInput}`;

export const HistoricalChart = (searchInput, days=365, currency="usd") =>
  `https://api.coingecko.com/api/v3/coins/${searchInput}/market_chart?vs_currency=${currency}&days=${days}`;

// export const TrendingCoins = (currency) =>
//   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
