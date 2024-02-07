import { randomUUID } from 'node:crypto'
import { UniqueEntityId } from './UniqueEntityId'

export class Entity<T> {
  private _id: UniqueEntityId
  protected props: T
  constructor(props: T, id?: string) {
    this._id = new UniqueEntityId(id)
    this.props = props
  }

  get id() {
    return this._id
  }
}
