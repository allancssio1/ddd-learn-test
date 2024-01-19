import { randomUUID } from 'node:crypto'

export class Product {
  public id: string
  public title: string

  constructor(title: string, id?: string) {
    this.id = id ?? randomUUID()
    this.title = title
  }
}
