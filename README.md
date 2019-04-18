# **Hello World in Solidity**
#### The classic "Hello World" starter code in Solidity.

To learn how to code in Solidity, the first step will be to download _truffle_ and _solidity_ in your command window.
```
npm i -g truffle
npm i -g solc
```
Next, use the following commands to create and enter your project folder.
```
mkdir hello-ethereum-salon-contract
cd hello-ethereum-salon-contract
```
The next command will create the file structure for the project.
```
truffle init
```
Solidity code is written in _.sol_ files. We can create this file with the following command.
```
create contract HelloEthSalon
```
After doing this, if you check the contents of contract folder in _hello-ethereum-salon-contract_ you will see two _.sol_ files: _HelloEthSalon.sol_ and _Migrations.sol_. Open the _HelloEthSalon.sol_ file in your favorite editor. Add the following code into the file.
```
pragma solidity ^0.5.0;
  contract HelloEthSalon {
    string message = "Hello Ethereum Salon!";
    constructor() public {
    }
    function GetMessage() public returns (string memory _message) {
    return message;
    }
  }
```
Within the code, two things were added to our contract. The first being a global sting variable named _message_, set it equal to _"Hello Ethereum Salon!"_. The second is a fuction named _GetMessage_ that will return our _message_. Next to check if it was coded correctly, in the command window use the following command to compile the contract.
```
truffle compile
```
To test our contract, it has to run on a ethereum network. Do this using the following command.
```
npm i -g truffle ethereumjs-testrpc
```
After doing this, we are almost ready to test. Testing contracts can be done using a _.sj_ file. To create our testing use the following commands.
```
cd test
truffle create test HelloEthSalon
```
Now you should have the file _hello_eth_salon.js_ the test folder. Open this with your editor and add in the following code.
```
var HelloEthSalon = artifacts.require("./HelloEthSalon.sol");
contract("HelloEthSalon:GetMessage", function(accounts) {
  it("should return a correct string", function(done){
    var hello_eth_salon = HelloEthSalon.deployed();
    hello_eth_salon.then(function(contract){
      return contract.GetMessage.call(); // **IMPORTANT
    }).then(function(result){
      assert.isTrue(result === "Hello Ethereum Salon!");
      done();
    })
   });
 });
 ```               
 We are now ready to test our contract, however first go to the _hello-ethereum-salon-contract_ folder, then use the following command.                
 ```
 truffle test ./test/hello_eth_salon.js
 ```
 Congradulations you know how to write a smart contract in Solidity!
You can play around witht the _message_ and keep testing the smart contract. Try it out by replacing "Hello Ethereum Salon!" with "I know testing of a contract!!"
