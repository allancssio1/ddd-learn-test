import { randomUUID } from 'crypto'

export class BuyOrder {
  public id: string
  constructor(id?: string) {
    this.id = id ?? randomUUID()
  }
}
