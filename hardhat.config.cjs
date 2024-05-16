require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INFURA_SEPOLIA_URL = process.env.INFURA_SEPOLIA_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      chainId: 11155111,
      accounts: [`0x${PRIVATE_KEY}`], // Insert private Key
      url: INFURA_SEPOLIA_URL, // Insert INFURA Sepolia URL
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
