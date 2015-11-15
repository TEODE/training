/**
 * Created by vincent on 13/11/15.
 */

var myMock = jest.genMockFunction();
var a = {name: 'test'};
var bound = myMock.bind(a); // First instance
bound(); // First call
var b = new myMock('first arg', 'second arg'); // Second instance and second call

describe('mock functions', function() {
    it('counts instances, calls and check properties', function() {

        // The function was called exactly once
        expect(myMock.mock.calls.length).toBe(2);

        // The first arg of the second call to the function was 'first arg'
        expect(myMock.mock.calls[1][0]).toBe('first arg');

        // The second arg of the second call to the function was 'second arg'
        expect(myMock.mock.calls[1][1]).toBe('second arg');

        // This function was instantiated exactly twice
        expect(myMock.mock.instances.length).toBe(2);

        // The object returned by the first instantiation of this function
        // had a `name` property whose value was set to 'test'
        expect(myMock.mock.instances[0].name).toEqual('test');
    });
});