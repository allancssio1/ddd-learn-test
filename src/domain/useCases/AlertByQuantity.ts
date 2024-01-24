interface ProductProps {
  title: string
  quantity: number
  minQuantity: number
}

export class AlertByQuantityUseCase {
  execute(product: ProductProps) {
    return product.minQuantity <= product.quantity
  }
}
