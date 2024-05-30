import RESTClient from '@umany-global/rest-client-js';


export default class StoreClient {

    #client;

    constructor ( config ) {

        config.baseUrl = config.baseUrl ?? 'https://api.umany.global/stores';

        this.#client = new RESTClient( config );
    }


    list ( params = {} ) {

        return this.#client.get({
            path: '/',
            query: params,
        });

    }


    getStore ( id, options = {} ) {

        return this.#client.get({
            path: '/'+id+( options?.by ? '?by='+options.by : '' ),
            auth: options.auth,
        });

    }

}