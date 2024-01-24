import { describe, expect, it } from 'vitest'
import { Product } from '../entities/Product'
import { FindProductUseCase } from './FindProduct'

const products: Product[] = []

describe('Find Product Quantity', () => {
  it('Shold be able create to product', async () => {
    products.push({
      id: 'id-1',
      title: 'Coffee',
      quantity: 20,
      minQuantity: 5,
    })
    products.push({
      id: 'id-2',
      title: 'Sugar',
      quantity: 10,
      minQuantity: 2,
    })

    const sut = new FindProductUseCase(products)

    const product = sut.execute('id-2')

    expect(product?.id).toEqual('id-2')
  })
})
