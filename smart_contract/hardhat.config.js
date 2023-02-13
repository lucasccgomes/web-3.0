// https://eth-goerli.g.alchemy.com/v2/GlCVXFfCeB33CZ3HL7GACiK31guwfnkK
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
       url: 'https://eth-goerli.g.alchemy.com/v2/GlCVXFfCeB33CZ3HL7GACiK31guwfnkK',
  accounts: ['7728ea0fcca4fb8011180bb4485c2bd5a22d2cf9c7f52d0e4812c96c0472ece5']
    },
  },
};