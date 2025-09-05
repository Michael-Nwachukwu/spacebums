"use client";

import React from "react";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "./ui/glowing-stars";
import { ISpaceBumsFeature } from "~~/types/interface";

export function FeaturesCard({ feature }: { feature: ISpaceBumsFeature }) {
  return (
    <div className="flex items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{feature.title}</GlowingStarsTitle>
        <div className="">
          <GlowingStarsDescription>{feature.description}</GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}
