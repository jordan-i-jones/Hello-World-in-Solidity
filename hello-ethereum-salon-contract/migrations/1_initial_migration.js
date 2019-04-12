const Migrations = artifacts.require("Migrations");
const HelloEthSalon = artifacts.require('HelloEthSalon');

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(HelloEthSalon);
};
