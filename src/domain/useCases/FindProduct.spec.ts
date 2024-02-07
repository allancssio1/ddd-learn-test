import { describe, expect, it } from 'vitest'
import { FindProductUseCase } from './FindProduct'
import { Slug } from '../entities/valueObjects/Slug'
import { ProductsRepository } from '../../core/repositories/ProductRepository'
import { Product } from '../entities/Product'

describe('Find Product Quantity', () => {
  it('Shold be able create to product', async () => {
    const productRepository = new ProductsRepository()
    const product1 = new Product({
      title: 'coffee',
      minQuantity: 5,
      quantity: 10,
      slug: Slug.createSlugFromText('coffee'),
    })
    const product2 = new Product({
      title: 'sugar',
      minQuantity: 5,
      quantity: 10,
      slug: Slug.createSlugFromText('sugar'),
    })
    productRepository.items.push(product1, product2)

    const sut = new FindProductUseCase(productRepository)

    const product = await sut.execute(product2)

    expect(product.title).toEqual('sugar')
  })
})
