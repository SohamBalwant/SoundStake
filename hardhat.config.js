require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat/config");

const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, './.env') });


module.exports = {
  solidity: "0.8.20",
  paths: {
    sources: "./contracts",  // Contract source directory
    tests: "./test",         // Test files directory
    cache: "./cache",        // Cache directory
    artifacts: "./artifacts" // Compiled artifacts directory
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/_3LaR8WP4c_tMAlD4WfkpUd4iOit1Mn3",
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`] // Ensure you have your private key in an environment variable
    },
    // 0x110e523990f9b554f1953dad534fce82e7d33829ee8d861e55ec9de3857faf13
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [`0x${process.env.GANACHE_PRIVATE_KEY}`] // Ensure you have your private key in an environment variable
    },
    base_sepolia:{
      url:"https://base-sepolia.g.alchemy.com/v2/0_dBc8BSLqye4szav2Y18g6p66yxhqzR",
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`] // Ensure you have your private key in an environment variable
    }

  }
};
