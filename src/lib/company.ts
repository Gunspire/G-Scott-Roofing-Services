export const COMPANY = {
  name: "G Scott Roofing Services",
  serviceAreaShort: "Swanley",
  serviceAreaLong: "Swanley and surrounding areas",
  phoneDisplay: "07903 502049",
  phoneRaw: "07903502049",
  phoneE164: "+447903502049",
  email: "info@gscottroofingservices.co.uk",
  whatsapp: {
    phoneE164: "+447903502049",
    // wa.me expects digits only (no +)
    phoneWaMe: "447903502049",
    defaultMessage:
      "Hi G Scott Roofing Services — I’d like a free quote please.",
  },
} as const;

export const BRAND = {
  // Primary brand colour requested by client
  hex: "#89713B",
  // Useful supporting shades for dark overlays / gradients
  dark: "#2B2413",
  darker: "#1A160B",
  // A warm off-white that pairs with the brand colour for light UI accents
  light: "#F4F0E6",
} as const;

export function telHref(rawPhoneDigits: string) {
  return `tel:${rawPhoneDigits.replaceAll(" ", "")}`;
}

export function mailtoHref(email: string) {
  return `mailto:${email}`;
}

export function waMeHref(phoneWaMe: string, text?: string) {
  const base = `https://wa.me/${phoneWaMe}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}


