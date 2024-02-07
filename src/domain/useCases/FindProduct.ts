import { Product } from '../entities/Product'
import { ProductRepository } from '../repositories/productRepository'

export class FindProductUseCase {
  constructor(private productRepository: ProductRepository) {}
  async execute(product: Product) {
    const productFound = await this.productRepository.find(product)

    return productFound
  }
}
