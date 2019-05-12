const assert = require('assert');
const Web3 = require('web3');
const ganache = require('ganache-cli');
const rpcURL = 'HTTP://127.0.0.1:7545'
const web3 = new Web3(rpcURL);
const address = '0x58145DA63490CD9213FdE2055060d582e7D7A67A';

let accounts;
    
async function init(){
// get All the accounts in Ganache
    accounts = await web3.eth.getAccounts();
    //console.log(accounts);
    web3.eth.getAccounts(console.log);
}

web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log(balance);
});