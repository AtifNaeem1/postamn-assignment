const { coins } = require('../db');

exports.Query = {
  Coins: async (parent, { skip, limit, currency }, context) => {
    const response = await fetch(
      `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=${limit}&currency=${currency}`
    );
    const data = await response.json();
    return data.coins;
  },
};
