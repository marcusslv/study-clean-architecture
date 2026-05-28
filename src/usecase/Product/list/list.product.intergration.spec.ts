import { afterEach, beforeEach, describe, expect, it } from '@jest/globals';
import { Sequelize } from 'sequelize-typescript';
import ProductModel from '../../../infrastructure/product/repository/sequelize/product.model';
import ListProductUseCase from './list.product.usecase';
import ProductRepository from '../../../infrastructure/product/repository/sequelize/product.repository';


describe("Integration Test for listing product use case", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
                    dialect: "sqlite",
                    storage: ":memory:",
                    logging: false,
                    sync: { force: true },
                });
        
                await sequelize.addModels([ProductModel]);
                await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should list a product", async () => {
        const product1 = await ProductModel.create({
            id: "a",
            name: "Product 1",
            price: 100,
        });

        const product2 = await ProductModel.create({
            id: "b",
            name: "Product 2",
            price: 200,
        });

        const useCase = new ListProductUseCase(new ProductRepository());
        const output = await useCase.execute({});
        expect(output.products).toHaveLength(2);
        expect(output.products[0].id).toBe(product1.id);
        expect(output.products[0].name).toBe(product1.name);
        expect(output.products[0].price).toBe(product1.price);
        expect(output.products[1].id).toBe(product2.id);
        expect(output.products[1].name).toBe(product2.name);
        expect(output.products[1].price).toBe(product2.price);
    });
});