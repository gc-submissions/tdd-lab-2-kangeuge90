describe("Cart", () => {
    test("constructor correctly sets items to an empty array", function() => {

    });
});

// In Cart.test.js, write the following test cases for the Cart class.
// Confirm that the constructor correctly sets the items property to an empty array. 
// (Remember to use toEqual instead of toBe when comparing arrays or objects.)
// Calling add once adds one product to the items array. Make sure the correct product object was added.
// Calling add twice leaves a total of two Products in the items array. Make sure the correct 
// product objects were added.
// getItemCount returns the length of the items array. You will have to call the add method 
// one or more times to fill the array. (Write two test cases with different amounts of items.)
// getTotalBeforeTax returns the sum of the price of all Products in the items array. 
// (Write two test cases with different mixes of taxable and non-taxable products and with 
// different numbers of products.)
// getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array. 
// Remember to use toBeCloseTo with floating point numbers. (Write two test cases with different 
// mixes of taxable and non-taxable products and with different numbers of products.)
// getTax returns the difference between getTotalWithTax and getTotalBeforeTax. As before, 
// add some sample items in order to get some numbers to work with.