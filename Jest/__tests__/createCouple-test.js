/**
 * Created by vincent on 13/11/15.
 */
jest.dontMock('../createCouple.js');

describe('createCouple', function() {
    it('verifies both users are set', function() {
        var createCouple = require('../createCouple.js');
        var couple = createCouple('userA', 'userB');
        // Function called once only
        expect(couple[0].setName.mock.calls.length).toEqual(1);
        expect(couple[1].setName.mock.calls.length).toEqual(1);
    });
});