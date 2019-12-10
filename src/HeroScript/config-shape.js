// const config = {
//   contract: { 
//             name: contractName,
//             networks: {
//               mainnet: mainnetAddress,
//               rinkeby: rinkebyAddress,
//               xDai: xDaiAddress,
//             }

//           }


const config = {
  contract: {
    name: {
      contractName1: {
        networks: {
          abi: "etherscanABIAddress",
          mainnet: "mainnetAddress",
          rinkeby: "rinkebyAddress",
        }
      }
    }
  },
  state: {
    contractName1
  }
}