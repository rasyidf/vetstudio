import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

export function getInitials(name: string) {

  if (name.length === 0) {
    return ""
  }

  const nameSpan = name.split(" ")
  if (nameSpan.length === 1) {
    return nameSpan[0].charAt(0)
  }
  if (nameSpan.length > 2) {
    return `${nameSpan[0].charAt(0)}${nameSpan[nameSpan.length - 1].charAt(0)}`
  }
  return `${nameSpan[0].charAt(0)}${nameSpan[1].charAt(0)}`
}