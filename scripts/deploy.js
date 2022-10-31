const hre = require('hardhat')

const _initBaseURI='ipfs://QmYFKKHBvfTWSu5ydZqf3h7PHQZLCv6fpCoNWMigxw8UvY/'

async function main() {

  // Deploy the contract
  const theRainbowTribet = await hre.ethers.getContractFactory('TheRainbowTribet')
  const TheRainbowTribet = await theRainbowTribet.deploy(
    _initBaseURI)
  await TheRainbowTribet.deployed()

  console.log('TheRainbowTribet deployed to:', TheRainbowTribet.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
