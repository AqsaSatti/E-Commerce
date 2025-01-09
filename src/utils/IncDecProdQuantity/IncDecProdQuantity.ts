
export const incrementItemQuantity = (cart: any[], index: number, stock: number, userId: number) => {
  return cart.map((item, i) =>
    i === index && item.userId === userId && item.quantity < stock ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const decrementItemQuantity = (cart: any[], index: number, userId: number) => {
  return cart.map((item, i) =>
    i === index && item.userId === userId && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
