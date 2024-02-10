import { Entity } from '../../core/entities/Entity'
import { UniqueEntityId } from '../../core/entities/UniqueEntityId'

interface SalesProps {}

export class Sales extends Entity<SalesProps> {
  static create(props: SalesProps, id?: UniqueEntityId) {
    const product = new Sales(props, id)
    return product
  }
}
