export const formatPrice = (amount:number) => {
    return `$ ${amount.toLocaleString().padEnd(8, '0')}`;
  };
  