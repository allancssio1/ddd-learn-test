import { Entity } from '../../core/entities/Entity'
import { Slug } from './valueObjects/Slug'

interface ProductProps {
  title: string
  slug: Slug
  quantity: number
  minQuantity: number
}

export class Product extends Entity<ProductProps> {
  get title() {
    return this.props.title
  }
  get quantity() {
    return this.props.quantity
  }
  get minQuantity() {
    return this.props.minQuantity
  }
  get slug() {
    return this.props.slug
  }
}
