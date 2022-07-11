exports.Query = {
  Coins: (parent, { skip, limit, currency }, { coins }) => {
    let limitcoins = coins;
    if (skip !== null) {
      limitcoins = limitcoins.filter(
        (coin, key) => !(key + 1 === skip)
      );
    }
    if (limit > 0) {
      limitcoins = limitcoins.filter((coin, key) => key < limit);
    }
    if (currency !== null) {
      limitcoins = limitcoins.filter(
        (coin) => coin.symbol === currency
      );
    }

    return limitcoins;
  },

  Coin: (parent, { id }, { coins }) => {
    return coins.find((coin) => coin.id === id);
  },
};
