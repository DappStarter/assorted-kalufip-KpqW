require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember history hockey private olympic three'; 
let testAccounts = [
"0x4bc1527e82173ea912545d7d81175080041c5451b2a718feb0e7fb8e1efab600",
"0xa4847f7b474bf6a957079748eb2f7aca0813cb7e3cb7a520a189e48a55370302",
"0x47d367b2cb7fd8a4c30f9204676aa08846d291bc379bcae48f8e25704827fd39",
"0x4a5923ca86c89f1c1d6fb254642c33e26cc70c0f80c4e5d74b107577b4270cef",
"0xd778e017230061d5aa7b234147039dae8c6c2155eef0aa7ce808cc380c8bff60",
"0x36a78a430fdc3d606cc1fc1360cf186bf5b90cf6de96ac0d9a75f194c0781d8a",
"0x9918e3cfb360f4994d03a26a0449e470999a6990d95603078cab45df7405833c",
"0x2b91ac76182a9ea5e2a77d7ae156d08b2bde9913acee53c528130a929990731e",
"0x75cf7a4a17e6d707a449434c323d8e45cadb0eb92429d5c51f7538c925e1f7ff",
"0x49031998300db70c36744247f22c74d57e67fc6fddc1772d9c5eaa920246666c"
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

