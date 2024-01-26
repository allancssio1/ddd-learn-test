import { describe, expect, it } from 'vitest'
import { CreateProductUseCase } from './CreateProduct'

describe('Create Product', () => {
  it('Shold be able create to product', async () => {
    const createProductUseCase = new CreateProductUseCase()

    const product = await createProductUseCase.execute({
      title: 'Coffee with milk',
      quantity: 20,
      minQuantity: 5,
    })

    expect(product.title).toEqual('Coffee with milk')
    expect(product.slug.value).toEqual('coffee-with-milk')
  })
})
