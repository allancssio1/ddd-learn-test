import { randomUUID } from 'node:crypto'

interface ProductProps {
  title: string
  quantity: number
  minQuantity: number
}

export class Product {
  public id: string
  public title: string
  public quantity: number
  public minQuantity: number

  constructor(props: ProductProps, id?: string) {
    this.id = id ?? randomUUID()
    this.title = props.title
    this.quantity = props.quantity
    this.minQuantity = props.minQuantity
  }
}
