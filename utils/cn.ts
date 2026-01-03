import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// The "Apple" bezier curve as requested
export const EASE_CUSTOM = [0.16, 1, 0.3, 1];
export const ANIMATION_CONFIG = { duration: 0.8, ease: EASE_CUSTOM };
