import { describe, expect, it } from 'vitest'
import { Product } from '../entities/Product'
import { AlertByQuantityUseCase } from './AlertByQuantity'

const products: Product[] = []

describe('Alert Product Quantity', () => {
  it('Shold be able create to product', async () => {
    products.push({
      id: 'id-1',
      title: 'Coffee',
      quantity: 20,
      minQuantity: 5,
    })

    const product = products[0]

    const sut = new AlertByQuantityUseCase()

    const alertProductQuantity = sut.execute({
      title: 'Coffee',
      quantity: 5,
      minQuantity: 5,
    })

    expect(alertProductQuantity).toEqual(true)
  })
})
