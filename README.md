# Welcome to sequelize-encryption 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/mithelan/aes-mysql-node)
[![License: ''](https://img.shields.io/badge/License-''-yellow.svg)](;;)
[![Twitter: kdmithii](https://img.shields.io/twitter/follow/kdmithii.svg?style=social)](https://twitter.com/kdmithii)

> sequelize-encryption is tool where you can use this feature with database functions such as `sequelize.fn`
### 🏠 [Homepage](https://github.com/mithelan/aes-mysql-node)

### ✨ [Demo]('')

## Install

```sh
npm i sequelize-encryption
 
  or

yarn add sequelize-encryption
```

## Usage

```sh

Currently there are 2 ways added.

 1. castQuery
    It is more useful when you findall a model and you need to get a encrypted field changed into decrypted field.

    Ex : 
    `let persons = await this.personModel.findAll(query);`

    `let query= attributes: userAttributes();,`

    const user = const userAttributes = () => {
        return {
          include: [
            [
              this.database.literal(
                `CAST(AES_DECRYPT(UNHEX(firstName),${encryption}) AS CHAR(50))`
              ),
              'firstName',
            ],
          ],
        };
      };

      instred of using `CAST(AES_DECRYPT(UNHEX(firstName),${encryption}) AS CHAR(50))`
      now we can use,
      `Dec.castQuery(data, encryption)`


```

## Examples

```sh
      const { Dec } = require('sequelize-encryption');

      const user = const userAttributes = () => {
        return {
          include: [
            [
              this.database.literal(
                Dec.castQuery(data, encryption)
              ),
              'firstName',
            ],
          ],
        };
      };

      `Dec.castQuery(data, encryption)` accepts 2 parameter.

      data- table field
      encryption - str - that you used to encrypt the fields


```
## Run tests

```sh
''
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

[![support us](https://img.shields.io/badge/become-a patreon%20us-orange.svg?cacheSeconds=2592000)](https://www.patreon.com/mithelan)


## 📝 License

Copyright © 2022 [mithelan](https://github.com/mithelan).

This project is [''](;;) licensed.

***


