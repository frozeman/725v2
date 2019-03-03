import Web3 from 'web3';
import { ERC725v2JsonInterface } from './imports/725v2JsonInterface.js';

console.log(`Greetings from ${module.id}!`);


window.web3 = new Web3(Web3.givenProvider);

window.ERC725v2 = new web3.eth.Contract(ERC725v2JsonInterface,'0x4b33629d93b8f31f81d96d1dbcc8599162e9b748');