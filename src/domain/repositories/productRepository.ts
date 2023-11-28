import { Product } from '../entities/product'

export interface ProductRepository {
  findProduct(id: string): Promise<Product>
}
