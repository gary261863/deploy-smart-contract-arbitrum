require("dotenv").config();
// ... tu configuración ...
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ARBITRUM_ONE_RPC_URL = process.env.ARBITRUM_ONE_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    arbitrumSepolia: {
      url: ARBITRUM_ONE_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};
