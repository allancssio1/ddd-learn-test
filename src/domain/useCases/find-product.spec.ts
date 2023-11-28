import { Product } from '../entities/product'
import { ProductRepository } from '../repositories/productRepository'
import { FindProduct } from './find-product'

const fakeProduct: ProductRepository = {
  findProduct: async (id: string) => {
    const product = {
      id: '1',
      name: 'car',
      color: 'blue',
      size: '1200',
    }

    return product
  },
}

test('Should be find product by id', async () => {
  const findProdctUseCase = new FindProduct(fakeProduct)
  const product = await findProdctUseCase.execute({
    id: 'adfghsfdgd',
  })

  console.log(
    '🚀 ~ file: find-product.spec.ts:12 ~ test ~ findProdct:',
    product,
  )
})
