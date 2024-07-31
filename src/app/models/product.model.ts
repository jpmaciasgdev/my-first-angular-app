// export interface product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   imageURL: string;
// }
export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}
