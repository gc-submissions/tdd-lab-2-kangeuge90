const Product = require('../js/Product');

describe("Product", () => {
    test("Testing Constructor parameters 1", () => {
        // Arrange
        const product = new Product('computer', 550, true);
        // Act

        // Assert
        expect(product.name).toBeDefined();
        expect(product.price).toBeDefined();
        expect(product.taxable).toBeDefined();
    });

    test("Testing Constructor parameters 2", () => {
        // Arrange
        const product = new Product('coffee', 3.50, false);
        // Act

        // Assert
        expect(product.name).toBeDefined();
        expect(product.price).toBeDefined();
        expect(product.taxable).toBeDefined();
    });

    test('if taxable is true, getPriceWithTax returns the price +10%, case 1', () => {
        const product = new Product('TV', 500, true);

        const priceWithTax = product.getPriceWithTax();

        expect(priceWithTax).toBeCloseTo(550.00);
    });

    test('if taxable is true, getPriceWithTax returns the price +10%, case 2', () => {
        const product = new Product('air fryer', 200, true);

        const priceWithTax = product.getPriceWithTax();

        expect(priceWithTax).toBeCloseTo(220.00);
    });

    test('if taxable is false, getPriceWithTax returns the price as is, case 1', () => {
        const product = new Product('TV', 500, false);

        const priceWithTaxFalse = product.getPriceWithTax();

        expect(priceWithTaxFalse).toBeCloseTo(500.00);


    });

    test('if taxable is false, getPriceWithTax returns the price as is, case 2', () => {
        const product = new Product('air fryer', 200, false);

        const priceWithTaxFalse = product.getPriceWithTax();

        expect(priceWithTaxFalse).toBeCloseTo(200.00);
    });

});


// Arrange
// Act
// Assert

// In Product.test.js, write the following test cases for the Product class.
// Confirm that the constructor parameters correctly set three properties on the class: 
// name, price, and taxable. (Write two test cases with different values.)
// Given a Product with taxable true, getPriceWithTax returns the price + 10%. 
// Remember to use toBeCloseTo with floating point numbers. (Write two test cases with different prices.)
// Given a Product with taxable false, getPriceWithTax returns just the price. 
// (Write two test cases with different prices.)