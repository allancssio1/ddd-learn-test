import { Product } from '../entities/Product'

export interface ProductRepository {
  create(product: Product): Promise<Product>
  find(product: Product): Promise<Product>
}
