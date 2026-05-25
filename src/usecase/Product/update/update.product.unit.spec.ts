import { describe, expect, it } from '@jest/globals';
import UpdateProductUseCase from './update.product.usecase';
import ProductFactory from '../../../domain/product/factory/product.factory';

const product = ProductFactory.create("a", "Product", 100);

const input = {
  id: product.id,
  name: "Product Updated",
  price: 150,
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    update: jest.fn(),
  };
}


describe("Unit test for updating product use case", () => {
    it("should update a product", async () => {
        const productRepository = MockRepository();
        const productUpdateUseCase = new UpdateProductUseCase(productRepository);

        const output = await productUpdateUseCase.execute(input);

        expect(output).toEqual(input);
    });
});