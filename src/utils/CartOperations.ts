
export const incrementItemQuantity = (cart: any[], itemId: number, stock: number, userId: number) => {
  return cart.map((item, i) =>
    item.id === itemId && item.userId === userId && item.quantity < stock ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const decrementItemQuantity = (cart: any[], itemId: number, userId: number) => {
  return cart.map((item, i) =>
    item.id === itemId && item.userId === userId && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
