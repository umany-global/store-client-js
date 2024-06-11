Stores Service Client for Javascript
==========================

- [Requirements](#requirements)
    - [Dependencies](#dependencies)
    - [Credentials](#credentials)
- [Install](#install)
- [Configuration](#configuration)
	- [Environment](#environment)
	- [Initialize](#initialize)
- [Usage](#usage)
- [Handle Errors](#handle-errors)


<br>

Requirements
---------------------

These are the runtime requirements for this package.

### System Dependencies

 Name		            | Supported Versions 													    
:-----------------------|:--------------------------------------------------------------
 Node.js	              | 20.x or later
 Yarn (Package Manger)  | 2.x
 Javascript             | ES6
 
<br>

### Credentials

This is a public API, not required for now

<br>

Installation
---------------------

```shell

yarn add @umany-global/store-client-js

```

<br>

Configuration
---------------------

### Initialize


```javascript

import StoreClient from '@umany-global/store-client-js';

const storeClient = new StoreClient();

```
<br>

Usage
-----------------

### StoreClient.find( params )

Receives the following parameters and returns a Promise<Object> which includes a collection of objects represeting Stores.

```javascript

storeClient.find({
    skip: 0, // a positive integer (or 0) representing the number of results to be excluded of the query
    limit: 1, // a positiv integer representing the maximum amount of results to be retrieved
    count: false, // adds to response the count of total records (regardless skip and limit params)
    select: [ // defines which specific attributes are going to be retrieved
        'id',
        // partner data if store was imported from an external platform
        'source',
          'source.type', // 'ecommerce-platform' | 'marketplace' | 'payment-gateway' | 'custom'
          'source.name', // 'tiendanube' | null
          'source.id', // store external id
        'business',
          // get specific 'business' attributes instead
          'business.id',
          'business.profile', 
            'business.profile.name',
            'business.profile.slug',
            'business.profile.logo',
              'business.profile.logo.small',
              'business.profile.logo.medium',
              'business.profile.logo.original',
        'category',
          // get specific 'category' attributes instead
          'category.id',
          'category.name',
          'category.parent', // parent category
          'category.root', // root category
        'name',
        'urls', // online store urls
        'location', // physical location
          'location.address', // physical address
          'location.geo', // GeoJSON 'point'
          'location.bounds', // GeoJSON 'polygon
        'contact',
          // get specific 'contact' attributes instead
          'contact.email',
          'contact.phone',
          'contact.whatsapp',
        // social networks, blogs and other channels
        'channels',
          // get specific 'channel' attributes instead
          'channels.instagram',
            'channels.instagram.slug', // social network username
            'channels.instagram.id', // social network account id
            'channels.instagram.url', // profile url
          'channels.facebook',
          'channels.twitter',
          'channels.pinterest',
          'channels.linkedin',
          'channels.tiktok',
    ],
}).then( result => {

    result.data.forEach( store => {

        //do something

    });

});

```

The following object is an example for a successful result

```javascript

{
  data: [
    {
      id: "5f49243645c0aa03ca386f83",
      business: {
        id: "5f49243645c0aa03ca386f83",
        profile: {
          name: {
            default: "My Brand's Name",
            es: "Mi Marca",
          },
          slug: "mybrandusername",
          logo: {
              type: "image/png",
              urls: {
                small: "http://contents.umany.global/profiles/{business_id}/logo/small",
                medium: "http://contents.umany.global/profiles/{business_id}/logo/medium",
                original: "http://contents.umany.global/profiles/{business_id}/logo/original",
              },
          },
        }
      },
      category: {
        id: "technology.mobile.gadgets",
        root: {
          id: "technology",
          name: {
            default: "Tecnología"
            es: "Tecnología"
          }
        },
        parent: {
          id: "technology.mobile",
          name: {
            default: "Teléfonos Celulares",
            es: "Teléfonos Celulares",
          },
        },
        name: {
          default: "Accesorios para Teléfonos Celulares",
          es: "Accesorios para Teléfonos Celulares",
        }
      },
      urls: [
        'https://mystore.com',
        'https://www.mystore.com',
        'https://mystore.net',
      ],
      location: {
        address: {
          country: "AR",
          adminAreaLevel1: "Provincia de Buenos Aires",
          adminAreaLevel2: "Partido de Quilmes",
          city: "Quilmes",
          locality: "Quilmes Oeste",
          street: "Avenida Mitre",
          number: "123456",
          zipCode: "1234",
          floor: "1",
          door: "A",
        },
        geo: {
          type: "Point",
          coordinates: [
            123.4567, // lng
            12.3456, // lat
          ],
        },
        bounds: {
          type: "Polygon",
          coordinates: [
            [ 123.4567, 12.3456 ], // lng, lat
            [ 123.4567, 12.3456 ], // lng, lat
          ],
        },
        channels: {
          instagram: {
            id: 'instagram_user_id',
            slug: 'instagram.user.name',
            url: 'https://instagram.com/instagram.user.name',
          },
        },
      },
    },
  ]
}

```
<br>

### StoreClient.findById( id, options = {} )

Receives the following parameters and returns a Promise<Object> representing a single store.

```javascript

storeClient.findById(
  'some_store_id',
  {
    by: 'source.id', // matches id param with 'source.id' attribute instead if 'id'
    select: [ // defines which specific attributes are going to be retrieved
      // same options as list() method
    ],
  }
).then( store => {

    //do something

});

```

<br>

Hanndle Errors
-----------------


```javascript

storeClient.findById( 'store_id' ).then( store => {
  
  // do something

}).catch( err => { 
  
  // handle error here

});

```