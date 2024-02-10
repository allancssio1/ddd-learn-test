import { Entity } from '../../core/entities/Entity'
import { UniqueEntityId } from '../../core/entities/UniqueEntityId'
import { Optional } from '../../core/types/optinoal'
import { Slug } from './valueObjects/Slug'

interface ProductProps {
  title: string
  slug: Slug
  quantity: number
  minQuantity: number
  createdAt: Date
  updatedAt?: Date
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
  static create(
    props: Optional<ProductProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const product = new Product({ ...props, createdAt: new Date() }, id)
    return product
  }
}
