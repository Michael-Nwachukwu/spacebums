export interface ICampaign {
  id: number;
  creator: string;
  targetAmount: number;
  amountRaised: number;
  tokensSold: number;
  totalSupply: number;
  tokensForSale: number;
  creatorAllocation: number;
  liquidityAllocation: number;
  platformFeeTokens: number;
  deadline: number;
  tokenAddress: string;
  isActive: boolean;
  isFundingComplete: boolean;
  isCancelled: boolean;
  name: string;
  symbol: string;
  description: string;
  uniswapPair: string;
  promotionalOgPoints?: number;
  isPromoted?: boolean;
  blockNumberCreated: number;
  reserveRatio: number;
}

export interface ITokenPurchaseEvents {
  buyer: string;
  campaignId: number;
  timestamp: number;
  tokensReceived: number;
  usdcAmount: number;
}

export interface ISpaceBumsFeature {
  id: number;
  title: string;
  description: string;
}
