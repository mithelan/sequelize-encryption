const crypto = require('crypto');

exports.castQuery = (data, encryption) => {
  return `CAST(AES_DECRYPT(UNHEX(${data}),'${encryption}') AS CHAR(50))`;
};

exports.customQuery = (
  names = [],
  castName = "",
  encryption = "",
  aliasName = "",
  tableName = ""
) => {
  try { 
    if(!Array.isArray(names)){
      console.error('Names attribute should be an array');
      return ;
    }
    if(names.length=== 0){   
        console.error('Names array is empty')
        return;
    }

    if(castName===''){
      console.error('Cast name is empty');
      return;
    }
    if(encryption===''){
      console.error('Encryption is empty');
      return;
    }
    if(aliasName===''){
      console.error('Alias Name is empty');
      return;
    }
    if(tableName===''){
      console.error('Table name is empty');
      return;
    }
    
    let query = `SELECT ${names.join(
      ","
    )},CAST(AES_DECRYPT(${castName}, '${encryption}') AS CHAR(50)) ${aliasName} 
        FROM ${tableName}`;
   
    return query;
    
  } catch (error) {
   
    console.error("error: ", error);
  }
};


exports.encryptData = (data,key) => {
  const enc = crypto.createCipheriv('aes-128-ecb', cryptoBuffer(key), '');
  let encryptedData = enc.update(data, 'utf-8', 'hex');
  encryptedData += enc.final('hex');
  return encryptedData;
 
};

exports.decryptData = (data, key) => {
  const decrypt = crypto.createDecipheriv('aes-128-ecb', convertCryptKey(key), '')
  let decryptedData = ''
  decryptedData += decrypt.update(data, 'hex', 'utf8')
  decryptedData += decrypt.final('utf8')
  return decryptedData;
}

function cryptoBuffer(key){
  const value = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  key = Buffer.from(key)
  for (let i = 0; i < key.length; i++) value[i % 16] ^= key[i]
  return value;
}


exports.cryptoBuffer = cryptoBuffer

