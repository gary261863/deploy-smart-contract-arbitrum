const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Desplegando contratos con la cuenta:", deployer.address);

  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy("¡Hola, Arbitrum!");

  await helloWorld.waitForDeployment();

  console.log("El contrato 'HelloWorld' fue desplegado en:", helloWorld.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
