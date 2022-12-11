require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API}`,
      accounts: [process.env.GOERLI_PRIVATE],
    },
  },
};