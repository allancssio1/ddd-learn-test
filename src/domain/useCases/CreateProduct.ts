import { Product } from '../entities/Product'
import { Slug } from '../entities/valueObjects/Slug'

interface CreateProductUseCaseRequest {
  title: string
  quantity: number
  minQuantity: number
}

export class CreateProductUseCase {
  execute({ title, quantity, minQuantity }: CreateProductUseCaseRequest) {
    const product = Product.create({
      title,
      quantity,
      minQuantity,
      slug: Slug.createSlugFromText(title),
    })

    return product
  }
}
