import { expect } from 'chai';
import { greetUser } from '../greetings.js';

//Import what we need to test
describe('Greetings check', () => {
    //test case goes here
    it('should be containing the greetings Hello folks!', () => {
        expect(greetUser).to.be.an('string').and.to.include('Hello folks!');
    });
});