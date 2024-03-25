// const main = async() => {
//     const contractFactory = await ethers.getContractFactory('Library');
//     const contract = await contractFactory.deploy();
//     await contract.deployed();

//     console.log("Contract deployed to: ", contract.address);
// }

// const runMain = async() => {
//     try {
//         await main();
//         process.exit(0);
//     } catch(error) {
//         console.log(error);
//         process.exit(1);
//     }
// }

// runMain();

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LibraryModule", (m) => {

  const library = m.contract("Library");

  return { library };
});
