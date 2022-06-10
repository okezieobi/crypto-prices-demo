# crypto-prices-demo

Typescript backend sdk through which anyone can integrate/ calculate multiple crypto pair prices with data from <https://www.cryptocompare.com/>

## Setup

- get api key from <https://www.cryptocompare.com/>
- add `.env` file at project root containing key `CRYPTO_API_KEY` and value as api key from above
- import library and call available methods like: 
  - `fetchPricePairs`
