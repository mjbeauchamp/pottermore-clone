const monica_tests = require("../test/utils/monica_jest_tests");

describe("Creating a new user", () => {
    let testObj;

    beforeEach(() => {
        testObj = monica_tests.newUser();
    })

    //These tests are all dealing with an Axios promise, so we need to use the .then format
    test("newUser should exist", () => {
        expect.assertions(1);
        return testObj.then( res => {
            expect(res[0]).toBeDefined()
        })
    })

    test("newUser should be an object", () => {
        console.log(testObj)
        expect.assertions(1);
        return testObj.then( res => {
            expect(typeof res[0]).toBe("object")
        })
    })

    test("newUser object should have first_name Harry", () => {
        expect.assertions(1);
        return testObj.then( res => {
            expect(res[0].first_name).toBe("Harry")
        })
    })

    test("newUser object should have last_name Potter", () => {
        expect.assertions(1);
        return testObj.then( res => {
            expect(res[0].last_name).toBe("Potter")
        })
    })
})

describe("Logging in", () => {
    test("login return is not undefined", () => {
        expect.assertions(1);
        return monica_tests.login().then( res => {
            expect(res).toBeDefined()
        })
    })


})