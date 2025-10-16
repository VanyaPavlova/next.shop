export type ApiProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  description?: string;
  discountPercentage?: number;
};

export type FetchProductsResponse = {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
};
