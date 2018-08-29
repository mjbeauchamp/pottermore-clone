const fns = require("./brandon.function");

describe('Test for the store', ()=>{
    test('should return an array',()=>{
        expect.assertions(1);
        return fns.getProducts().then(res =>{
            expect(Array.isArray(res)).toBe(true)})
        });
    test('Should return an object that has property of product_name', ()=>{
        expect.assertions(1);
        return fns.getProducts().then(res =>{
            expect(res[0]).toHaveProperty('product_name')
        })
    });
    test('Should return an array with length of 77', ()=>{
        expect.assertions(1);
        return fns.getProducts().then(res=>{
            expect(res).toHaveLength(77)
        })
    })
    test('Should return an object, with product_name = Ravenclaw Scarf',()=>{
        expect.assertions(1);
        return fns.getProducts().then(res=>{
            expect(res[0].product_name).toBe('Ravenclaw Scarf');
        })
    })
    test('Should return an object',()=>{
        expect.assertions(1);
        return fns.getProducts().then(res=>{
            expect(typeof res[0]).toBe('object')
        })
    });
        
})
