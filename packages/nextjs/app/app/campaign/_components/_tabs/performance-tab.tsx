"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Address } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/button";
import { formatAmount } from "~~/lib/utils";
import { ICampaign } from "~~/types/interface";

export function PerformanceTab({ address, campaign }: { address: string; campaign: ICampaign | undefined }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[#11181C] border-[#24353d] border rounded-lg p-6 col-span-3">
            <h3 className="text-gray-400 text-sm mb-2">Amount Raised</h3>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-light">${formatAmount(campaign?.amountRaised || 0)}</span>
              <div className="flex items-center text-blue-400">
                <span className="text-lg">✦</span>
              </div>
            </div>
          </div>

          <div className="bg-[#11181C] border-[#24353d] border rounded-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Tokens Sold</div>
            <div className="text-3xl font-light">{formatAmount(campaign?.tokensSold || 0)}</div>
          </div>

          <div className="bg-[#11181C] border-[#24353d] border rounded-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Tokens For Sale</div>
            <div className="text-3xl font-light">{formatAmount(campaign?.tokensForSale || 0)}</div>
          </div>

          <div className="bg-[#11181C] border-[#24353d] border rounded-lg p-6">
            <div className="text-gray-400 text-sm mb-2">Total supply</div>
            <div className="text-2xl font-light">{formatAmount(campaign?.totalSupply || 0)}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#11181C] border-[#24353d] border rounded-lg p-6 col-span-2/4">
            <div className="text-gray-400 text-sm mb-2">Platform Fee Token Allocation</div>
            <div className="text-2xl font-light">{formatAmount(campaign?.platformFeeTokens || 0)}</div>
          </div>

          <div className="bg-[#11181C] border-[#24353d] border rounded-lg p-6 col-span-2/4">
            <div className="text-gray-400 text-sm mb-2">Owner</div>
            <div className="flex items-center gap-2">
              <Address address={campaign?.creator} />
              <button className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {campaign?.creator === address && (
          <div className="flex justify-center w-full mt-9">
            <div
              className="bg-[#11181C]/60 hover:bg-[#11181C] hover:text-gray-300 h-12 w-64 rounded-xl flex justify-center items-center text-gray-500"
              onClick={() => setIsDeleteOpen(!isDeleteOpen)}
            >
              <ChevronDown />
            </div>
          </div>
        )}

        {isDeleteOpen && (
          <div className="flex justify-center w-full mt-5">
            <Button variant={"destructive"} className="w-full">
              Cancel Campaign
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
