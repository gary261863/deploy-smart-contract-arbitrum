require("dotenv").config();
// ... tu configuración ...
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

const ARBITRUM_ONE_RPC_URL = process.env.ARBITRUM_ONE_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ARBISCAN_API_KEY = process.env.ARBITRUM_API_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    arbitrumSepolia: {
      url: ARBITRUM_ONE_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    // Usa la clave de API directamente, sin el objeto anidado
    apiKey: ARBISCAN_API_KEY,
    customChains: [
      {
        network: "arbitrumSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
    ],
  },
};
