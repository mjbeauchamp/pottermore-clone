const wizards = require('./lukas.function')
describe('Testing wizards houses', () => {
    test('Data should be an array', () => {
        expect.assertions(1);
        return wizards.wizards().then( res => {
            expect(Array.isArray(res)).toBe(true)
        })
    })
    test('Should have length of 27', () => {
        expect.assertions(1);
        return wizards.questionsTest().then(res => {
            expect(res.length).toBe(27)
        })
    })
    test('Last question shoul be "Left or Right"', () => {
        expect.assertions(1);
        return wizards.questionsTest().then(res => {
            expect(res[26].question).toBe('Left or Right?')
        })
    })
    test('Should be an object', () => {
        expect.assertions(1);
        return wizards.questionsTest().then(res => {
            expect(typeof res[0]).toBe('object')
        })
    })
    test('Should have length of 96', () => {
        expect.assertions(1);
        return wizards.answersTest().then(res => {
            expect(res.length).toBe(96)
        })
    })
})


