export interface CartItem {
  userId: number;
  quantity: number;
  [key: string]: any; // For dynamic product properties
}

export interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem, userId:number) => void;
  removeFromCart: (id: string,userId:number) => void;
  clearCart: () => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}