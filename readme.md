Purchase Service Client for Javascript
==========================

- [Install](#install)
- [Configuration](#configuration)
- [Usage](#usage)
- [Handle Errors](#handle-errors)


<br>


Installation
---------------------

```shell

yarn add @umany-global/purchase-service-client-js

```

<br>

Configuration
---------------------

### Initialize


```javascript

import PurchaseClient from '@umany-global/purchase-client-js';

const clientInstance = new PurchaseClient({
    auth: 'tokenOrFunction', // access token value or function returning Promise<string> representing the access token value
});

```

<br>

Usage
-----------------

### PurchaseClient.vote( params )

Sends Cause selected by user on a specific purchase

```javascript

clientInstance.vote({
    cause: {
        id: 'someCauseId', // (required) identifier of the cause slected by user
    },
    purchase: {
        id: 'somePurchaseid', // umany ID of the purchase ( when available )
        source: {
            id: 'somePurchaseSourceId', // source ID of the purchase ( when no umany ID is available, for example when called from the purchase website )
        },
    },
}).then( () => {

    // do something on success

});

```

<br>

Hanndle Errors
-----------------


```javascript

clientInstance.catch( err => { 

    // do something on error
    console.log( err );

});

```