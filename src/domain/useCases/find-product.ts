import { ProductRepository } from '../repositories/productRepository'

interface FindProductProps {
  id: string
}

export class FindProduct {
  constructor(private repository: ProductRepository) {}

  async execute({ id }: FindProductProps) {
    const product = await this.repository.findProduct(id)
    return product
  }
}
