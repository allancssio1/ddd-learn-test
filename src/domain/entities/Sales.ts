import { randomUUID } from 'node:crypto'

export class Sales {
  public id: string
  constructor( id: string) {
    this.id = id ?? randomUUID()
  }
}
