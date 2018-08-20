const fns = require('./test.functions')

describe('sorting quiz questions and answers testing', () => {


    test('sorting quiz questions should be defines', () => {
        expect(fns.getSortingQuestions()).toBeDefined()
    })

    test('testing sorting quiz question, should return an array', () => {
        expect.assertions(1);
        return fns.getSortingQuestions().then( res => {
            expect(Array.isArray(res)).toBe(true)})
    })

    test('sorting quiz questions should be objects in the array', () => {
        expect.assertions(1);
        return fns.getSortingQuestions().then( objres => {
            expect(typeof objres[0]).toBe('object')
        })
    })

    test('sorting quiz answer should return an array', () => {
        expect.assertions(1);
        return fns.getSortingAnswers().then( ansres => {
            expect(Array.isArray(ansres)).toBe(true)})
    })

    test('sorting quiz questions should be objects in the array', () => {
        expect.assertions(1);
        return fns.getSortingAnswers().then( ansobjres => {
            expect(typeof ansobjres[0]).toBe('object')
        })
    })

})