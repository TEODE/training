/**
 * Created by vincent on 11/11/15.
 */
jest.dontMock('../sum');

describe('sum', function() {
    it('adds 1 + 2 to equal 3', function() {
        var sum = require('../sum');
        expect(sum(1,2)).toBe(3);
    });
});