const LinkedList = require('../../src/LinkedList/LinkedList')

describe('test', () => {
    beforeEach(() => {
        list = new LinkedList()
        for (let i = 1; i <= 20; i++) {
            list.push(i * 2)
        }
    })
    test('can create a new list', () => {
        expect(list).toBeDefined()
    })
    test('push', () => {
        expect(list.length).toEqual(20)
    })
    test('pop', () => {
        list.pop()
        expect(list.length).toEqual(19)
    })
})
