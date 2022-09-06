
# Doge academy - Phase 3 - Task3
Through the tasks provided so far in phase 3 we have looked at the use of basic libraries like **@solana/web3.js @metaplex-foundation/js @solana/spl-token @solana/wallet-adapter-react**.Now it is time to start exploring and developing solana smart contracts of your own.
* You would want to touch up on basics of [**RUST**](https://youtu.be/-AAtfPHEMbA) as we would be developing smart contracts using it.
* We will be making use of solana framework [**ANCHOR**](https://www.anchor-lang.com/) as it helps avoid boilerplate code and helps in developing secure programs.
 ```
NOTE - Make sure to use only DEVNET for the task.
```

## 1
Fork this repository, add 2 folders. Initialise an **anchor** project(smart contract) in one folder and a **nextjs** app in the other.

## 2
* The aim of the project is to create a page to store the personal profile of a user on the solana blockchain.
* The data should be stored completely on the blockchain and databases like mongoDB **should not** be used.
* Add fields like name, age, bio etc and decide suitable datatypes for them.

## Basic work flow of the app-
* A user connects their phantom wallet to the page.
*  Check if user has already created a profile.
* If no profile found-
	* Obtain profile info from user.
	* When user clicks submit and approves the transaction, store the info.
* If profile is found-
	* Display the profile on the page.
	* User should be able to edit the info.
	* Only the user who created the profile should be allowed to edit the info, the necessary checks should be added in the smart contract.
* Thus the smart contract should have 2 functions **initialise_profile** (for creating new profile) and **edit_profile** (for editing existing profile).

## Additional materials-
* https://lorisleiva.com/create-a-solana-dapp-from-scratch
* https://youtube.com/playlist?list=PL53JxaGwWUqCr3xm4qvqbgpJ4Xbs4lCs7
* https://medium.com/@lianxiongdi/solana-development-5-deploy-your-first-smart-contract-4af94aab9a44
