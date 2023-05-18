// export interface ISneakersCartItem {
//   id: string;
//   name: string;
//   price: number;
//   imageUrl: string;
//   size: number;
//   type: string;
// }

export interface ICartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export interface CartSliceState {
  totalPrice: number;
  cartItems: ICartItem[];
}
