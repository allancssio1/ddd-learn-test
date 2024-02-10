import { Entity } from '../../core/entities/Entity'
import { UniqueEntityId } from '../../core/entities/UniqueEntityId'

interface BuyOrderProps {}

export class BuyOrder extends Entity<BuyOrderProps> {
  static create(props: BuyOrderProps, id?: UniqueEntityId) {
    const product = new BuyOrder(props, id)
    return product
  }
}
