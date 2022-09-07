
# Doge Academy - Phase 3 - Task 3
Through the tasks provided so far in phase 3 we have looked at the use of basic libraries like **@solana/web3.js @metaplex-foundation/js @solana/spl-token @solana/wallet-adapter-react**. Now it is time to start exploring and developing solana smart contracts of your own.
* You would want to touch up on basics of [**RUST**](https://youtu.be/-AAtfPHEMbA) as we would be developing smart contracts using it.
* We will be making use of solana framework [**ANCHOR**](https://www.anchor-lang.com/) as it helps avoid boilerplate code and in developing secure programs.
 ```
NOTE - Make sure to use only DEVNET for the task.
```

## 1
Fork this repository, add 2 folders. Initialise an **anchor** project(smart contract) in one folder and a **nextjs** app in the other.

## 2
The aim of the project is to create a basic simplified version of a NFT staking system on the solana blockchain.  The data should be stored completely on the blockchain and databases like mongoDB **SHOULD NOT** be used.

## Basic work flow of the app-
 * A user connects their phantom wallet to the app.
 * Display the NFTs present in the users wallet (do not show other spl-tokens).
 * The user selects the NFTs to stake, inputs a **username** (if staking for the first time)   and clicks on STAKE button.
 * Send a transaction on approval of which the NFTs should be transferred  to  **[PDA](https://solanacookbook.com/core-concepts/pdas.html)** account owned by the smart contract.
>  The NFTs of each user should be stored under different PDAs.
 * Also store the **username**, **number of NFTs currently staked** and the **time at which the user last staked/unstaked** in an onchain account.
 * The currently staked NFTs should be shown to the user.
 * Provide the user the ability to **UNSTAKE** the staked NFTs.
 * Thus the smart contract should have the following functions for performing the tasks-	
	* create_user_acc
	* stake_nft
	* unstake_nft
## Additional materials-
 * https://lorisleiva.com/create-a-solana-dapp-from-scratch
 * https://youtube.com/playlist?list=PL53JxaGwWUqCr3xm4qvqbgpJ4Xbs4lCs7
 * https://medium.com/@lianxiongdi/solana-development-5-deploy-your-first-smart-contract-4af94aab9a44
