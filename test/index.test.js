const { encryptData,decryptData }= require('../index');
const expect = require('chai').expect;

let encryptionKey='3c7a4eb821c141726cebd608862da861';



//SELECT HEX(AES_ENCRYPT('Javascript','3c7a4eb821c141726cebd608862da861'));
//Results -> 'CCF8CEA5E82F7E1AF05DF8A71EED9A46'


describe('Testing encryption and decryption', function() {
 it('1.Encryption Test', function(done) {
    expect(encryptData('Javascript',encryptionKey).toUpperCase()).to.equal('CCF8CEA5E82F7E1AF05DF8A71EED9A46');
  done();
 });

 it('2.Decrypt Data Test', function(done) {
    expect(decryptData('CCF8CEA5E82F7E1AF05DF8A71EED9A46',encryptionKey)).to.equal('Javascript')
    done();
  })
});