import { afterEach, beforeEach, describe, expect, it } from '@jest/globals';
import UpdateProductUseCase from './update.product.usecase';
import ProductModel from '../../../infrastructure/product/repository/sequelize/product.model';
import ProductRepository from '../../../infrastructure/product/repository/sequelize/product.repository';
import { Sequelize } from 'sequelize-typescript';


describe("Integration Test for updating product use case", () => {
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

    it("should update a product", async () => {
        const product1 = await ProductModel.create({
            id: "a",
            name: "Product 1",
            price: 100,
        });

        const updateProductUseCase = new UpdateProductUseCase(new ProductRepository());
        const output = await updateProductUseCase.execute({
            id: product1.id,
            name: "Product Updated",
                price: 150,
            });

        expect(output).toEqual({
            id: product1.id,
            name: "Product Updated",
            price: 150,
        });
    });
});