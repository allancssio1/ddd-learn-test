import { Product } from '../entities/Product'

interface CreateProductUseCaseRequest {
  title: string
  quantity: number
  minQuantity: number
}

export class CreateProductUseCase {
  execute({ title, quantity, minQuantity }: CreateProductUseCaseRequest) {
    const product = new Product({
      title,
      quantity,
      minQuantity,
    })

    return product
  }
}
