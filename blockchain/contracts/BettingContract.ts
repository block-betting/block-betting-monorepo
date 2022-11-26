import Contract from "./Contract";
import Artifacts from "./BettingContract.json";

class BettingContract extends Contract {
    constructor(options, address) {
        super(options, "BettingContract", Artifacts.abi, address);
    }
}

export default BettingContract;