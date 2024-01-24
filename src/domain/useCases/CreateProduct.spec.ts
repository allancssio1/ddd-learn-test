import { describe, expect, it } from 'vitest'
import { CreateProductUseCase } from './CreateProduct'

describe('Create Product', () => {
  it('Shold be able create to product', async () => {
    const createProductUseCase = new CreateProductUseCase()

    const product = await createProductUseCase.execute({
      title: 'Coffee',
      quantity: 20,
      minQuantity: 5,
    })

    expect(product.title).toEqual('Coffee')
  })
})
