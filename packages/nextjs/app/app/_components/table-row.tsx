import React from "react";
import Link from "next/link";
import { View } from "lucide-react";
import { Address } from "~~/components/scaffold-eth";
import { Badge } from "~~/components/ui/badge";
import { Button } from "~~/components/ui/button";
import { formatAmount } from "~~/lib/utils";
import { ICampaign } from "~~/types/interface";

interface TableRowProps {
  campaign: ICampaign;
}

const TableRow: React.FC<TableRowProps> = ({ campaign }) => {
  return (
    <Link
      href={`/app/campaign/${campaign.id}`}
      className="grid grid-cols-5 gap-4 px-4 py-5 items-center hover:bg-gray-800/50 transition-colors text-sm bg-[#19242a] rounded-xl"
    >
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 bg-[#8daa98] rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-semibold">S</span>
        </div>
        <span className="text-white">{campaign.name} USDC</span>
      </div>

      <div className="space-y-1">
        <div className="text-white">{formatAmount(campaign.amountRaised)} USDC</div>
        <div className="text-gray-400 text-xs">
          {formatAmount(campaign.tokensSold)}/{formatAmount(campaign.tokensForSale)}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Address address={campaign.creator} size="sm" />
      </div>

      <div className="w-[35%]">
        {campaign.isActive && (
          <Badge className="bg-green-700/30 inline-flex items-center gap-2 py-1 px-2 w-full">Active</Badge>
        )}
        {campaign.isFundingComplete && (
          <Badge className="bg-blue-700/30 inline-flex items-center gap-3 py-1 px-2 w-full">
            Live
            <Badge className="h-3 min-w-3 rounded-full px-1 font-mono tabular-nums bg-blue-700 animate-pulse"></Badge>
          </Badge>
        )}
        {campaign.isCancelled && (
          <Badge className="bg-red-700/30 inline-flex items-center gap-2 py-1 px-2 w-full">Cancelled</Badge>
        )}
      </div>

      <div>
        <Button className="bg-[#8daa98]/80 rounded-3xl flex items-center gap-3 text-[#19242a]">
          View
          <View className="h-4 w-4" />
        </Button>
      </div>
    </Link>
  );
};

export default TableRow;
