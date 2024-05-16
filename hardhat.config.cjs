require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      chainId: 11155111,
      accounts: [], // Insert private Key
      url: "", // Insert INFURA Sepolia URL
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
