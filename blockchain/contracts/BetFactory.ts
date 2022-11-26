import Contract from "./Contract";
import Artifacts from "./BetFactory.json";

class BetFactory extends Contract {
  constructor(options, address) {
    super(options, "BetFactory", Artifacts.abi, address);
  }
}

export default BetFactory;