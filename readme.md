Package Template for JavaScript
==========================

- [Requirements](#requirements)
    - [Dependencies](#dependencies)
    - [Credentials](#credentials)
- [Install](#install)
- [Configuration](#configuration)
	- [Environment](#environment)
	- [Initialize](#initialize)
- [Usage](#usage)
    - [SomeClassName](#someclassname)
        - [someMethod](#somemethod)
    - [SomeOtherClassName](#someotherclassname)
        - [someOtherMethod](#someothermethod)
- [Handle Errors](#handle-errors)


<br>

Requirements
---------------------

This section contains runtime requirements for this package.

### System Dependencies

 Name		            | Supported Versions 													    
:-----------------------|:--------------------------------------------------------------
 Node.js	            | 20.x or later
 Yarn (Package Manger)  | 2.x
 
<br>

### Credentials

Replace this text with specific instructions on how to get required credentials to use this package.

<br>

Installation
---------------------

```shell

yarn add @umany-global/my-package-name

```

<br>

Configuration
---------------------

### Environment

These are the required and/or available environment configurations.


 Variable Name 		    | Description 													| Values / Examples
:-----------------------|:--------------------------------------------------------------|:----------------------------------
NPM_TOKEN	            | Private Repositories Access Key (required to install)  		| 'someHashValue'

<br>

### Initialize

Replace this text with description or instructions to start using the package along with available params and options

```javascript

import MyPackageName from '@umany-global/my-package-name';

const myInstance = new MyPackageName({
    paramA: 1, // explain here how this param works
    paramB: 2, // explain here how this param works
});

```
<br>

Usage
-----------------

### SomeClassName

Replace this text with description or instructions to start using the package.

```javascript

const myInstance = new MyClassName({
    paramA: 1, // explain here how this param works
    paramB: 2, // explain here how this param works
});

```

#### someMethod

Replace this text with description on how to use this method and its parameters.

```javascript

myInstance.someMethod( param1, param2, param3 )

```

<br>

### SomeOtherClassName

Replace this text with description or instructions to start using the package.

```javascript

const myOtherInstance = new MyOtherClassName({
    paramA: 1, // explain here how this param works
    paramB: 2, // explain here how this param works
});

```

#### someOtherMethod

Replace this text with description on how to use this method and its parameters.

```javascript

myOtherInstance.someOtherMethod( param1, param2, param3 )

```

<br>

Hanndle Errors
-----------------

Here explain how to handle different error types available

```javascript

myInstance.catch( err => { console.log(err) } );

```