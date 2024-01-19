import { Product } from '../entities/Product'

interface CreateProductUseCaseRequest {
  title: string
}

export class CreateProductUseCase {
  execute({ title }: CreateProductUseCaseRequest) {
    const product = new Product(title)

    return product
  }
}
