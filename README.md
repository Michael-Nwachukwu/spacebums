# 🚀 Space Bums - Instant Liquidity Token Launchpad

A decentralized platform for fair and instant token launches powered by bonding curves and automated liquidity. Built on the <b>Somnia Blockchain</b>

<p align="center">
  <a href="https://www.canva.com/design/DAGyKEQkj6k/33gnmCHvvmNy6wCDzHfrMw/edit?utm_content=DAGyKEQkj6k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Pitch Deck</a> |
  <a href="https://spacebums.lol" target="_blank">Website</a> |
  <a href="https://www.loom.com/share/c83620a9cfea4667bfa44a0fc260aba5?sid=8ca48a5f-9167-4df9-ae34-a6dc8b8ea848" target="_blank">Demo Video</a>
</p>

🧪 Space Bums is a revolutionary decentralized token launchpad designed for fundraising that ensures instant liquidity for new token projects. This is achieved through an innovative Bancor-style bonding curve and automated, on-chain liquidity provision to our native DEX, Bumdex. The platform incentivizes early participation while prioritizing user security with a built-in refund mechanism.

Visit the app - https://spacebums.lol

Pitchdeck - https://www.canva.com/design/DAGyKEQkj6k/33gnmCHvvmNy6wCDzHfrMw/edit?utm_content=DAGyKEQkj6k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Demo Video - https://www.loom.com/share/c83620a9cfea4667bfa44a0fc260aba5?sid=3ded5ebf-e9bc-4d74-92ae-d811ea6d620a

### For Testing
To test the application, request funds from the provided faucet bank (30 USDC every 24H) or for gas, select the STT token to visit the faucet bank for the STT native token. 

<img width="1407" height="71" alt="Screenshot 2025-09-14 at 12 28 34 AM" src="https://github.com/user-attachments/assets/7b3b1ed4-479b-4710-9d11-dcfdbc7692b2" />

<img width="344" height="64" alt="Screenshot 2025-09-14 at 12 28 52 AM" src="https://github.com/user-attachments/assets/49f2adb1-ee8c-4f05-9b00-596e963ec6ee" />

<img width="1440" height="900" alt="Screenshot 2025-09-14 at 1 08 17 AM" src="https://github.com/user-attachments/assets/3a539507-2ea3-4e49-8db9-dc2a7ba310dc" />

The name Spacebums was motivated by giving the app's space-theme, as it's a launchpad, it's only fair that the space where the rockets shoot into is occupied by space-bums, space-chums, and all space-buds 😉

⚙️ Built using NextJS, RainbowKit, Foundry, Wagmi, Viem, Solidity, and TypeScript.

## 🌟 Key Features
*   ✅ **Bonding Curve Pricing:** A dynamic Bancor-style bonding curve incentivizes early investors with lower token prices and a higher token yield per USDC. The price increases with each token purchase.
*   💧 **Instant Liquidity:** Liquidity is automatically deployed upon meeting either of two conditions: the campaign's target raise is reached or 50% of the token supply is sold.
*   🔄 **Automated Liquidity Provision:** The smart contract automatically creates a liquidity pool on our platform DEX, Bumdex, using a fixed ratio of 50% of the raised USDC and 25% of the total token supply.
*   🔒 **Staking Opportunities:** Users can lock and stake their tokens on our platform once the campaign goes live and staking is enabled.
*   🛡️ **Refund Mechanism:** A built-in security feature allows users to claim a full refund of their contributed USDC if a campaign is canceled or fails to meet its funding goals.
*   🎖️ **OG Points System:** A unique reward system that distributes 30% of all platform fees back to users who hold a high number of OG points, incentivizing active participation.
*   🧱 **Campaign Management:** A comprehensive interface to create, fund, and manage token launch campaigns, from setting goals to monitoring progress.
*   💰 **USDC Integration:** Native support for USDC ensures stable and predictable fundraising for both creators and investors.

## 🏗️ Architecture

<img width="3600" height="431" alt="spacebums_architecture_hd" src="https://github.com/user-attachments/assets/9cee25a6-b21f-4a63-b6d1-bd0f071627c5" />


## Smart Contracts

### Spacebums Launchpad
*   **Launchpad.sol:** The main launchpad contract containing core business logic for campaign creation, funding, and the bonding curve mechanism.
*   **LaunchpadV2.sol:** An enhanced version of the core contract, incorporating a refined OG points distribution model and other optimizations.
*   **Token.sol:** An ERC20 token factory contract responsible for minting the campaign-specific tokens.
*   **LaunchpadCore.sol:** A utility library housing core mathematical functions for precise bonding curve calculations.
*   **CampaignTokenStaking.sol** The official staking contract. Campaign creators have to request access with the team to enable them to create a staking pool for their campaign and discuss insurance, collateral, and APY.

### BUMDEX
*   **BumdexFactory.sol:** A factory for creating liquidity pairs.
*   **BumdexPair.sol:** A contract to be cloned by the `BumdexFactory` representing a liquidity pair.
*   **BumdexRouter.Sol: The Bumdex router that we communicate with the Dex on each pair.

### 🔐 Smart Contract Addresses
Important: Addresses are deployments on the Somnia Network

*   **Launchpad.sol:** `0xBb88E6126FdcD4ae6b9e3038a2255D66645AEA7a`
*   **LaunchpadV2.sol:** `0x6330605C037437270aab6526263595c2297E4B5E`
*   **CampaignTokenStaking.sol:** `0xa3a4EC5066bede3DaFa13458e578f5Deec1eA6F7`
*   **Usdc.sol:** `0xf2A558c41e9A5505d2E5614a4AAb85f397816d00`
*   **BumdexFactory.sol:** `0xA5f8f44614D6ADAcF924bc3143E0356d9A37A748`
*   **BumdexRouter.sol:** `0x125933626e9AAadCDe4D776e2fC31d2e715Bc1d3`


### 🌐 Supported Networks

*   **Local Development:** Anvil/Hardhat local network
*   **Testnets:** Somnia testnet
*   **Mainnet:** Somnia mainnet

## Network Configuration
# Somnia network 
See -

``packages/nextjs/utils/customChains.ts``

```
export const somnia = /*#__PURE__*/ defineChain({
  id: 50312,
  name: "Somnia",
  nativeCurrency: { name: "Somnia", symbol: "STT", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://dream-rpc.somnia.network/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Shannon Explorer",
      url: "https://shannon-explorer.somnia.network/",
    },
  },
});
```

### Frontend
*   **Dashboard:** A centralized hub for users to create new campaigns, monitor the status of active campaigns, and track their portfolio performance.
*   **Campaign Interface:** An interactive interface for users to participate in campaigns by purchasing tokens and monitoring their favorite campaigns.
*   **Trading & Pool Analytics:** A dedicated section for post-launch activities, including direct token swaps, adding/removing liquidity, and real-time monitoring of pool data on Bumdex.

## 🚀 Quickstart

### Prerequisites
*   Node (>= v20.18.3)
*   Yarn
*   Git

### Installation
1. Clone the repository
```
git clone <your-repo-url>
cd space-bums
yarn install
```

Start local blockchain
```
yarn chain
```

Deploy contracts
```
yarn deploy
```

Start the frontend
```
yarn start
```


Visit your app at: http://localhost:3000

## 📖 How It Works

1.  **Campaign Creation & Funding**
    A creator sets a funding target (in USDC), maximum token supply, token name, and symbol.

    The smart contract automatically allocates the total supply as follows:
    *   50% for public sale
    *   20% for creator allocation
    *   25% for instant liquidity
    *   5% for platform fees

2.  **The Bonding Curve Mechanism**
    The public sale utilizes a Bancor-style bonding curve where the token price is a function of the number of tokens sold.

    This creates a favorable environment for early investors, who receive more tokens per USDC. The price gradually increases as the campaign progresses, reflecting growing demand.

3.  **Instant Liquidity Deployment**
    The liquidity provision is automatically triggered by a smart contract at the earliest of two conditions:
    *   The campaign's target funding amount is met.
    *   50% of the public sale token supply has been sold.

    The contract then automatically creates a new trading pair on Bumdex, seeding it with a 50/50 split of the raised USDC and the 25% token supply allocated for liquidity. This ensures immediate trading and price discovery.

4.  **Post-Launch Trading & Refunds**
    Once liquidity is live, users can trade the new token pair on Bumdex or add their own liquidity to earn trading fees.

    In the event of a failed or canceled campaign, the refund mechanism allows any user who contributed USDC to go to the interface and claim their contribution back, offering a secure environment for investment.

🎖️ **The OG Points System in Detail**
The OG Points system is the platform's core reward and incentive mechanism, designed to benefit the most active and supportive community members.

1.  **Campaign Sponsorship**
    A campaign creator can "sponsor" their launch for a $50 fee.

    Sponsorship comes with two benefits:
    *   Prioritized visibility on the platform
    *   A dedicated OG Point bank of 1,000 points.

2.  **Draining the OG Point Bank**
    When a user buys into a sponsored campaign, they "drain" a small percentage of the campaign's OG Point bank. This is how users accumulate their own personal OG points.

    The more a user contributes, the more OG points they can accumulate. Once the OG Point bank is empty, the campaign loses its sponsored status.

3.  **Monthly Fee Distribution**
    A total of 30% of all fees collected by the Space Bums platform is distributed back to the community every month.

    This distribution is proportional to each user's accumulated OG points. The more points you have, the larger your share of the monthly revenue. This creates a powerful incentive for users to seek out and participate in sponsored campaigns.


  ##  🛠️ Development
# Smart Contract Development
### Smart Contract Development

*   **Run tests**
    ```bash
    yarn foundry:test
    ```
*   **Deploy to local network**
    ```bash
    yarn deploy
    ```
*   **Deploy to testnet/mainnet**
    ```bash
    yarn deploy --network <network-name>
    ```

### Frontend Development

*   **Start development server**
    ```bash
    yarn dev
    ```
*   **Build for production**
    ```bash
    yarn build
    ```
*   **Deploy to Vercel**
    ```bash
    yarn vercel
    ```

### Contract Interaction

*   Use the Debug Contracts page for testing.
*   Interact with contracts using the provided hooks.
*   Monitor events and transactions in real-time.

### 🤝 Contributing
We welcome contributions to Space Bums!

1.  Fork the repository
2.  Create a feature branch
3.  Make your changes
4.  Add tests for new functionality
5.  Submit a pull request

#### Development Guidelines

*   Follow Solidity best practices and security patterns.
*   Write comprehensive tests for all smart contract functions.
*   Use TypeScript for frontend development.
*   Follow the existing code style and patterns.

### 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

### 🙏 Acknowledgments

*   Built on Scaffold-ETH 2
*   Inspired by Bancor and Uniswap protocols
*   Community-driven development and feedback

Space Bums - Revolutionizing token launches with instant liquidity and automated market making. ?
