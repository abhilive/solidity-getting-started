# Hardhat Project - Library Management

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract to Sepolia Testnet.

Specify - ALCHEMY_SEPOLIA_URL and ACCOUNT_PRIVATE_KEY in .env file under the client folder

Further it has UI which is built on next-js.

Upon cloning, run below tasks:

```shell
npm install
npx hardhat test
npx hardhat compile
npx hardhat ignition deploy ./ignition/modules/deploy.js --network sepolia
```
After successful deplyment to Sepolia testnet an address will be returned. Specify that address in client/config.js

and copy ABI file Library.json from artifacts/contracts/Library.sol/ to client/utils/

Now, Run below command to spin up the UI and start interacting with smartcontract.

```shell
cd client
npm install
npm run dev
```