import { Product } from '../entities/Product'

export class FindProductUseCase {
  constructor(private productRepository: Product[]) {}
  execute(id: string) {
    const product = this.productRepository.find((item) => item.id === id)

    return product
  }
}
