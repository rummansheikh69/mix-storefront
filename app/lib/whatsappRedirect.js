export const redirectToWhatsApp = ({
  providerName,
  categoryTitle,
  offerTitle,
  validity,
  price,
}) => {
  const phoneNumber = "8801"; // your WhatsApp number

  const message = `
Hello, I want to purchase this offer:

Provider: ${providerName}
Category: ${categoryTitle}
Offer: ${offerTitle}
Validity: ${validity}
Price: ${price} TK

Please confirm.
`;

  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
};
