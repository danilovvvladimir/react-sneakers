import { ICartItem } from "../models/cartTypes";

export const calcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => obj.price + sum, 0);
};
