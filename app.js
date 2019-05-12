const assert = require('assert');
const Web3 = require('web3');
const ganache = require('ganache-cli');
const web3 = new Web3(ganache.provider());
const address = '0x58145DA63490CD9213FdE2055060d582e7D7A67A';

let accounts;
    
async function init(){
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
}
init();
