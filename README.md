# public store using solana

### **run it 👋**

1. Run `yarn` at the root of directory
2. Run `yarn run dev` to start the dev environment

### **go mainnet?**

1. update USDC address as:
`const usdcAddress = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");`
2. in `_app.js` and `createTransaction.js` change network as:
`const network = WalletAdapterNetwork.Mainnet;`