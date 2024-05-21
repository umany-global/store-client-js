import RESTClient from '@umany-global/rest-client-js';


export default class PurchaseClient {

    #client;

    constructor ( config ) {

        config.baseUrl = config.baseUrl ?? 'https://api.umany.global/purchases';

        this.#client = new RESTClient( config );
    }


    vote ( params, options = {} ) {

        return this.#client.post({
            path: '/votes',
            data: params,
            auth: options.auth,
        });

    }


    notify ( params, options = {} ) {

        return this.#client.post({
            path: '/notifications',
            data: params,
            auth: options.auth,
        });

    }


    notifyCancellation ( source_id, options = {} ) {

        return this.#client.post({
            path: '/cancellations',
            auth: options.auth,
        });

    }

}