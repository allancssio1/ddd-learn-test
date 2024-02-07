import { Product } from '../../domain/entities/Product'
import { ProductRepository } from '../../domain/repositories/productRepository'

export class ProductsRepository implements ProductRepository {
  public items: Product[] = []

  create(product: Product): Promise<Product> {
    throw new Error('Method not implemented.')
  }
  async find(product: Product) {
    const productFound = await this.items.find((item) => item.id === product.id)
    return productFound ?? null
  }
}
