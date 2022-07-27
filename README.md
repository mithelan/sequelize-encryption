# Welcome to sequelize-encryption 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/mithelan/aes-mysql-node)
[![License: ''](https://img.shields.io/badge/License-''-yellow.svg)](;;)
[![Twitter: kdmithii](https://img.shields.io/twitter/follow/kdmithii.svg?style=social)](https://twitter.com/kdmithi)

> sequelize-encryption is tool where you can use to encrypt and decrypt the fields same as mysql native aes_encrypt and aes_decrypt and casting and custom methods available
### 🏠 [Homepage](https://github.com/mithelan/aes-mysql-node)

## Install

```sh
npm i sequelize-encryption
 ```
or
```
yarn add sequelize-encryption
```


## Generate a encryption key
```
openssl rand -hex 16
```
sample-> `3c7a4eb821c141726cebd608862da861`



## Available methods

```
  1. castQuery - `CAST(AES_DECRYPT(UNHEX(tableFieldName}),'${encryptionKey}') AS CHAR(50))`

  2. customQuery - `SELECT [tableFields],CAST(AES_DECRYPT(UNHEX(tableFieldName), encryptionKey) AS CHAR(50)) 
                    aliasName FROM   tableName`

  3. encryptData - `SELECT HEX(AES_ENCRYPT(str, encryptionKey))`

  4. decryptData - `SELECT CAST(AES_DECRYPT(UNHEX(encrypted), encryptionKey) as CHAR)`
```
## Usage

```sh
```
    const { castQuery , customQuery , encryptData, decryptData } = require('sequelize-encryption');

  1. castQuery(tableField, encryptionKey);

        
     |   column        |      type     | 
     |-----------------|---------------|
     |  `tableField `  |    `String`   |
     | `encryptionKey` |    `String`   |


 2.  customQuery( names = [],castName = "",encryption = "",aliasName = "",tableName = "");

        
      |   column        |      type     | 
     |-----------------|---------------|
     |  `names `       |    `Array`    |
     | `castName`      |    `String`   |
     |  `encryption `  |    `Array`    |
     | `aliasName`     |    `String`   |
     | `tableName`     |    `String`   |

  3. encryptData(tableField,encryptionKey);

      |   column        |      type     | 
     |-----------------|---------------|
     |  `data `        |    `String`   |
     | `encryptionKey` |    `String`   |

  4. decryptData(encryptedValue,encryptionKey);
   
     | column            |      type     | 
     |-----------------  |---------------|
     |  `encryptedValue `|    `String`   |
     | `encryptionKey`   |    `String`   |

  ```
  ```
## Examples



Currently there are 4 methods added.

 1. castQuery

    It is more useful when you findAll a model and you need to get a encrypted field changed into decrypted field.
```sh

    Ex : let persons = await this.personModel.findAll(query);

    let query= {
      attributes:{
        include: [
            [
              sequelize.literal(
                `CAST(AES_DECRYPT(UNHEX(firstName),${encryptionKey}) AS CHAR(50))`
              ),
              'decryptedFirstName',
            ],
          ]
      }}

```
      Instred of using `CAST(AES_DECRYPT(UNHEX(firstName),${encryption}) AS CHAR(50))`
      now we can use,

       let query= {
          attributes:{
            include: [
                  [
                    sequelize.literal(
                     castQuery(firstName,encryptionKey)
                    ),
                    'decryptedFirstName',
                  ],
                  ]
           }}

```
castQuery(firstName,encryptionKey);
NOTE :When passing the encryptionKey wrap with ''
```


 2. Custom Query

  Actual Query :
```
SELECT id,field2,field3,CAST(AES_DECRYPT(field2, '098a4ad28mde3c4435009c9613749222') AS CHAR(50)) decrypedField FROM     personTable`;
```
 With Sequelize-encryption actual query :
```
SELECT ${names.join(",")},CAST(AES_DECRYPT(${castName}, '${encryption}') AS CHAR(50)) ${aliasName} FROM ${tableName}`;
```
With Sequelize-encryption function :
```
customQuery(['field1','field2],'field1','3c7a4eb821c141726cebd608862da861','decryptedField','personTable');
```


3. Encrypt Query & Decrypt Query

You can decrypt and encrypt as same as mysql native functions AES_ENCRYPT and AES_DECRYPT.
In this module,we are using the same method used to encrypt and decrypt as mysql.

```
const { encryptData } = require('sequelize-encryption'); 
```

let encryptedFirstName=encryptData(data,encryptionKey);


let decryptFirstName=encryptData(encryptedFirstName,encryptionKey);
      
|   column        |      type     | 
|-----------------|---------------|
|  `data `        |    `String`   |
| `encryptionKey` |    `String`   |
    

|TYPE|Code|Mysql Query|
|---|---|---|
| `String` | `encryptData(str, encryptionKey)`        | `SELECT HEX(AES_ENCRYPT(str, encryptionKey))` |
| `String` | `decryptData(encryptedField, encryptionKey)`  | `SELECT CAST(AES_DECRYPT(UNHEX(encrypted), encryptionKey) as CHAR)`
```
   ```
## Run tests

```sh
npm test
```

## Author

👤 **mithelan**

* Website: https://medium.com/@mithelandev
* Twitter: [@kdmithii](https://twitter.com/kdmithi)
* GitHub: [@mithelan](https://github.com/mithelan)
* LinkedIn: [@MithelanDevanandan](https://linkedin.com/in/MithelanDevanandan)



## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/mithelan/aes-mysql-node/issues). You can also take a look at the [contributing guide](https://github.com/mithelan/aes-mysql-node).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2022 [mithelan](https://github.com/mithelan).

***


