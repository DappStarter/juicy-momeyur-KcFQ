require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strategy response remain quality install muscle army gaze'; 
let testAccounts = [
"0x2a9e321494b8acae694ad92adcc2b5e4b9cebbe3ec7f41afba0f2860d828de0e",
"0x63a7708f3a9603c25c52f5e405e883c2f0b2a9ac2b12f05feb6252f91a965d5c",
"0x51f076a02a69971b1ab547b7a36b0ad44c37cb49909cba6cfd70059f22f1259a",
"0x31bb9c01b72d255bbf53ae42b9c498f771e5160506b56144f79d38c10cefb54f",
"0xd4191b4421d4525783f5520bf6134ad9c23bd993203aabb88357608769f0137b",
"0xf780086e024fd7be102cc0c4532717d8f708db14336702fd8543503014d46f60",
"0x60b8cdf21a49470beb98129ee3af0d0080ef70c20d30014aaccd00e3b0bafc1c",
"0x538a8efa3bfb7a71f9da9b7b23440ad0ad3880e9fd5ccb6f676962d410dc6907",
"0x17fa5b6ee9e7934041d325cd2a05c118c49f1ebc6b13f9323ed7b6e20d313c4c",
"0x964c3acb2c77e5f213728172bcdd93de50bee94354e9cd69e85c368a116ce6ce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

