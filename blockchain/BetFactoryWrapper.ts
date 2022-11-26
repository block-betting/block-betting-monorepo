import Web3 from 'web3';
import BetFactory from './contracts/BetFactory';
import { betFactoryAddress } from './constants';

export default class BetFactoryWrapper {
    web3: Web3;
    chainId: number;
    account: string;
    wrapperOptions: any;
    Contract: BetFactory;

    constructor(web3, chainId, account, options = {}) {

        this.web3 = web3;
        this.chainId = chainId;
        this.account = account;

        this.wrapperOptions = {
            web3, chainId, account, ...options
        }
        this.Contract = new BetFactory(this.wrapperOptions, betFactoryAddress[this.chainId]);
    }
}