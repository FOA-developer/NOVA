// Paystack hosted payment links for the Donate page. There's no backend:
// each amount opens its own Paystack page in a new tab.
// To change a link, edit it below. No other code changes are needed.
// A missing or empty link disables that option's Donate button and shows the email fallback.

export const donationLinks = {
  oneTime: {
    5000: "https://paystack.shop/pay/850lggga8a",
    10000: "https://paystack.shop/pay/j9gnnqishd",
    25000: "https://paystack.shop/pay/4c01rec1ph",
    50000: "https://paystack.shop/pay/eylztywn2i",
    custom: "https://paystack.shop/pay/acae1rloro",
  },
  monthly: {
    5000: "https://paystack.shop/pay/donate5000everymonth",
    10000: "https://paystack.shop/pay/donate10000everymonth",
    25000: "https://paystack.shop/pay/donate25000everymonth",
    50000: "https://paystack.shop/pay/donate50000everymonth",
    custom: "https://paystack.shop/pay/ylv44n952c",
  },
};

// Returns the link for a frequency ('once' | 'monthly') and amount (a preset or 'custom'),
// or null if none is set, so the UI never renders a broken link.
export const getDonationLink = (freq, choice) => {
  const url = donationLinks[freq === 'monthly' ? 'monthly' : 'oneTime'][choice]
  return typeof url === 'string' && /^https:\/\/\S+$/.test(url.trim()) ? url.trim() : null
}
