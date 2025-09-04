import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number): string {
  if (amount >= 1_000_000_000_000) {
    const scaled = amount / 1_000_000_000_000;
    return (scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(2)) + "T";
  } else if (amount >= 1_000_000_000) {
    const scaled = amount / 1_000_000_000;
    return (scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(2)) + "B";
  } else if (amount >= 1_000_000) {
    const scaled = amount / 1_000_000;
    return (scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(2)) + "M";
  } else if (amount >= 1_000) {
    const scaled = amount / 1_000;
    return (scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(2)) + "K";
  } else {
    return amount.toString();
  }
}
