export interface Product {
  id: string;
  name: string;
  size: string;
  weight: string;
  price: number;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderFormData {
  fullName: string;
  phoneNumber: string;
  location: string;
  notes: string;
}

export interface BulkOrderFormData {
  fullName: string;
  phoneNumber: string;
  location: string;
  quantity: number;
  unit: "KG" | "LITRES";
  packaging: "Bottles" | "Containers" | "Other" | "Not sure";
  message: string;
}

export const products: Product[] = [
  {
    id: "250g",
    name: "Rumphi Honey",
    size: "250g",
    weight: "250g",
    price: 5000,
    description:
      "Perfect for everyday use and for customers who want a convenient size of natural honey.",
  },
  {
    id: "500g",
    name: "Rumphi Honey",
    size: "500g",
    weight: "500g",
    price: 10000,
    description:
      "A larger size for households and regular honey lovers.",
  },
];

export const WHATSAPP_NUMBER = "+265993256978";
export const WHATSAPP_NUMBER_DISPLAY = "+265 993 25 69 78";