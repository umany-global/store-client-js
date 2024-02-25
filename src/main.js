import RESTClient from '@umany-global/rest-client-js';


export default class TradeClient {

    #client;

    constructor ( config ) {

        config.baseUrl = config.baseUrl ?? 'https://trade.api.umany.global';

        this.#client = new RESTClient( config );
    }


    vote ( params, options = {} ) {

        return this.#client.post({
            path: '/vote',
            data: params,
            auth: options.auth,
        });

    }

}