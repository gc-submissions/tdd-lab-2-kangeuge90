class Product {
    constructor(name, price, taxable) { //insert parameters
        this.name = name;
        this.price = price;
        this.taxable = taxable;

    }

    getPriceWithTax() {
        if (taxable == true) {
            return price * 1.10
        }
        if (taxable == false) {
            return price
        }
    }
}


module.exports = Product;

// In the file Product.js, create a Product class and export it.
// The constructor has three parameters:
// 1: sets a name property, which is a string
// 2: sets a price property, which is a number
// 3: sets a taxable property, which is boolean
// It has one method named getPriceWithTax, which has no parameters. It returns a number:
// If the taxable property is true, it returns the price * 1.10. (That's a 10% tax.)
// Otherwise, if the taxable property is false, it simply returns the price.