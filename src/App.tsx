import React from "react";
import { GetWeb3, GetContract, GetAccount } from "./BlockchainUtil";

// 1. Importing other modules
class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      web3: null,
      account: null,
      mainInstance: null,
    };
  }

  componentDidMount() {
    this.init();
  }

  async init() {}

  render() {
    return (
      <div>
        <div>hi</div>
      </div>
    );
  }
}
export default App;
