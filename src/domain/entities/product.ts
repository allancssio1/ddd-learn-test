import { Entity } from '@/core/entities/entity'

interface ProductProps {
  name: string
  size: string
  color: string
  createdAt: Date
}

export class Product extends Entity<ProductProps> {
  public get name() {
    return this.props.name
  }

  public get size() {
    return this.props.size
  }

  public get color() {
    return this.props.color
  }

  public get createdAt() {
    return this.props.createdAt
  }
}
