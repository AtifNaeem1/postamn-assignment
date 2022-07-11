const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Coin {
    id: String
    icon: Url
    name: String
    symbol: String
    rank: Int
    price: Float
    priceBtc: Int
    volume: Float
    marketCap: Float
    availableSupply: Int
    totalSupply: Int
    priceChange1h: Float
    priceChange1d: Float
    priceChange1w: Float
    websiteUrl: Url
    twitterUrl: Url
    exp: [Url]
  }

  scalar Url

  type Query {
    Coins(skip: Int, limit: Int, currency: String): [Coin]
  }
`;
