import axios from 'axios';

import env from './env';

export default class App {
    async fetchPricePairs(fsyms: Array<string>, tsyms: Array<string>) {
        const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${fsyms.join(
            ','
        )}&tsyms=${tsyms.join(',')}&api_key=${env.cryptoAPIKey}`;
        const { data } = await axios.get(url);
        return data;
    }
}

(async () => {
    const app = new App();
    const data = await app.fetchPricePairs(['ETH', 'DASH'], ['USD', 'BTC']);
    console.log(data);
})();
