// ✅ src/config/contact.js

export const CONTACT = {
  brandName: import.meta.env.VITE_BRAND_NAME || "Prime Aura Events",

  primary: {
    label: "Primary",
    phone: import.meta.env.VITE_PRIMARY_PHONE || "+91 9922999546",
    phoneRaw: import.meta.env.VITE_PRIMARY_PHONE_RAW || "919922999546",
  },

  secondary: {
    label: "Secondary",
    phone: import.meta.env.VITE_SECONDARY_PHONE || "+91 7796061051",
    phoneRaw: import.meta.env.VITE_SECONDARY_PHONE_RAW || "917796061051",
  },

  whatsappDefaultMessage:
    import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE ||
    "Hello Prime Aura Events ✨ I want to book.",

  email: import.meta.env.VITE_EMAIL || "primeauraevents@gmail.com",

  instagram: import.meta.env.VITE_INSTAGRAM || "https://www.instagram.com/yourpage",
  facebook: import.meta.env.VITE_FACEBOOK || "https://www.facebook.com/yourpage",

  address: import.meta.env.VITE_ADDRESS || "Pune City, India",
  hours: import.meta.env.VITE_HOURS || "Open 24/7",
};

// ✅ Clean number (removes spaces, +, -)
const cleanPhone = (phoneRaw) => String(phoneRaw || "").replace(/\D/g, "");

// ✅ WhatsApp Link
export const getWhatsAppLink = (phoneRaw, message = CONTACT.whatsappDefaultMessage) => {
  const number = cleanPhone(phoneRaw);
  const encodedMessage = encodeURIComponent(message || "");
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

// ✅ Call link
export const getTelLink = (phoneRaw) => {
  const number = cleanPhone(phoneRaw);
  return `tel:+${number}`;
};

// ✅ Backward compatible names
export const makeWhatsAppLink = getWhatsAppLink;
export const makeTelLink = getTelLink;

// ✅ Quick exports
export const PRIMARY_WHATSAPP_LINK = getWhatsAppLink(CONTACT.primary.phoneRaw);
export const SECONDARY_WHATSAPP_LINK = getWhatsAppLink(CONTACT.secondary.phoneRaw);

export const PRIMARY_TEL_LINK = getTelLink(CONTACT.primary.phoneRaw);
export const SECONDARY_TEL_LINK = getTelLink(CONTACT.secondary.phoneRaw);
