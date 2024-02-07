import { Product } from '../entities/Product'

export interface SalesRepository {
  findMany(product: Product): Promise<Product[]>
}
