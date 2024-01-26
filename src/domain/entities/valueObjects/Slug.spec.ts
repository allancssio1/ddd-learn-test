import { it, describe, expect } from 'vitest'
import { Slug } from './Slug'

describe('Create Slug', () => {
  it('It should be create slug', () => {
    const slug = Slug.createSlugFromText('Example slug create')

    expect(slug.value).toEqual('example-slug-create')
  })
})
