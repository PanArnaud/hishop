import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function capitalizeFirstLetter(input: string | number): string | number {
  if (typeof input === "string") {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
  return input;
}

export { cn, capitalizeFirstLetter };
