import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const waLink = (msg = "Hello Powerbeam, I need solar solution") =>
  `https://wa.me/8801799608805?text=${encodeURIComponent(msg)}`;
export const formatBDPhone = (p = "+8801799608805") => p;
