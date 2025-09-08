import { defineChain } from "viem";

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
