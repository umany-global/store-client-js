Trade Service Client for Javascript
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
 Node.js	            | 20.x or later
 Yarn (Package Manger)  | 2.x
 Javascript             | ES6
 
<br>

### Credentials

This is a public API, not required for now

<br>

Installation
---------------------

```shell

yarn add @umany-global/trade-service-client-js

```

<br>

Configuration
---------------------

### Initialize


```javascript

import Client from '@umany-global/trade-client-js';

const clientInstance = new TradeService();

```
<br>

Usage
-----------------

### Client.getStores( params )

Receives the following parameters and returns a Promise<Object> which includes a collection of objects represeting Stores.

```javascript

clientInstance.getStores({
    skip: 0, // a positive integer (or 0) representing the number of results to be excludad of the query
    limit: 1, // a positiv integer representing the maximum amount of results to be retrieved
    count: false, // adds to response the count of total records (regardless skip and limit params)
    select: [ // defines which specific attributes are going to be retrieved
        'id',
        'business',
        'category.id',
        'category.name',
        'name',
    ],
}).then( result => {

    result.data.forEach( cause => {

        //do something

    });

})

```

The following object is an example of the output

```javascript

{
  data: [
    {
      id: "5f49243645c0aa03ca386f83",
      maker: {
        id: "5f49243645c0aa03ca386f83",
        type: "ngo",
        profile: {
          name: "Alma Humana",
          slug: "almahumana"
          logo: {
              type: "image/png",
              urls: {
                small: "http://contents.umany.global/profiles/664c04923403bc38ebf52442/logo/sm…"
                medium: "http://contents.umany.global/profiles/664c04923403bc38ebf52442/logo/me…"
                original: "http://contents.umany.global/profiles/664c04923403bc38ebf52442/logo/or…"
              }
          }
        }
      },
      category: {
        id: "social.accessibility.jobs",
        root: {
          id: "social",
          name: {
            es: "Asistencia Social"
          }
        },
        parent: {
          id: "social.accessibility",
          name: {
            es: "Accesibilidad"
          }
        },
        name: {
          es: "Accesibilidad Laboral"
        }
      },
      slug: "baristasconalma",
      title: {
        es: "Baristas con Alma"
      },
      slogan: {
        es: "Despertá las ganas de ayudar"
      },
      brief: {
        es: "Formamos personas con discpacidad como Baristas y les conseguimos empleo"
      },
      about: {
        es: "Hola! Soy Juana, soy parte de un grupo de personas con discapacidad que estudiamos para ser baristas y conseguir nuestro primer trabajo"
      },
      cta: {
        es: "Nos ayud&aacute;s a seguir formándonos?"
      },
      media: [
        {
          type: "image/jpeg",
          alt: {
            es: "Esta soy yo en mi primer día de trabajo"
          },
          src: "https://contents.umany.global/causes/baristasconalma/media/01.jpeg"
        }
      ],
      goal: {
        need: [
          {
            qty: 10,
            description: {
              es: "Bolsa de 1kg de granos de café"
            },
            cost: 1000,
            costUSD: 1
          }
        ],
        locations: [
          {
            address: {
              country: "ar",
              adminAreaLevel1: "Ciudad Autónoma de Buenos Aires (CABA)",
              adminAreaLevel2: null,
              locality: "Palermo",
              street: "Thames",
              number: "1788",
              zipCode: "C1414",
              floor: null,
              door: null
            },
            geo: {
              type: "Geopoint",
              coordinates: [
                90,
                25
              ]
            },
            bounds: {
              type: "Polygon",
              coordinates: [
                [
                  90,
                  25
                ],
                [
                  90,
                  25
                ]
              ]
            }
          }
        ],
        currency: "ARS",
        amount: 1000000,
        amountUSD: 1000,
        exchangeRate: 1000,
        stats: {
          transactionsCount: 1500,
          revenueTotal: 15000,
          clientsRevenueTotal: 15000000,
          fundsTotal: 30000
        },
        stage: "fundraising"
      },
      stats: {
        transactionsCount: 2500,
        revenueTotal: 25000,
        clientsRevenueTotal: 25000000,
        fundsTotal: 50000
      },
      status: "active"
    }
  ]
}

```

<br>

Hanndle Errors
-----------------


```javascript

clientInstance.catch( err => { console.log(err) } );

```