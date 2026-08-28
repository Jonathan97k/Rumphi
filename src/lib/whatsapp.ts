import { CartItem, BulkOrderFormData, WHATSAPP_NUMBER } from "./data";

export function generateOrderMessage(
  items: CartItem[],
  formData: { fullName: string; phoneNumber: string; location: string; notes: string },
  total: number
): string {
  const orderLines = items
    .map(
      (item) =>
        `${item.quantity} × ${item.product.size} ${item.product.name} — K${(item.product.price * item.quantity).toLocaleString()}`
    )
    .join("\n");

  return `Hello Rumphi Honey,

I would like to place an order.

Customer: ${formData.fullName}

Phone: ${formData.phoneNumber}

Location: ${formData.location}

Order:
${orderLines}

Total: K${total.toLocaleString()}${formData.notes ? `\n\nAdditional notes: ${formData.notes}` : ""}

Please confirm my order and delivery details.`;
}

export function generateBulkMessage(formData: BulkOrderFormData): string {
  return `Hello Rumphi Honey,

I would like to make a bulk honey enquiry.

Name: ${formData.fullName}

Phone: ${formData.phoneNumber}

Location: ${formData.location}

Quantity: ${formData.quantity}

Unit: ${formData.unit}

Packaging: ${formData.packaging}${formData.message ? `\n\nAdditional message: ${formData.message}` : ""}

Please send me a quotation.`;
}

export function openWhatsApp(message: string): void {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
}