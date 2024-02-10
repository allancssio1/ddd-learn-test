import { Product } from '../entities/Product'
import { ProductRepository } from '../repositories/productRepository'
import { SalesRepository } from '../repositories/salesRepository'

export class GetSalesHistoryUseCase {
  constructor(private salesRepository: SalesRepository) {}
  async execute(product?: Product) {
    let products: Product[] = []
    if (product) {
      products = await this.salesRepository.findMany(product)
    }
    return products
  }
}
