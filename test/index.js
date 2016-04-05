import 'babel-polyfill';
import isNumeric from '../src';
import chai from 'chai';
chai.should();
describe('isNumeric', () => {
  it('should detect numbers', () => {
    // numbers
    isNumeric(5).should.be(true);
    isNumeric(-20.2).should.be(true);
    isNumeric(0).should.be(true);
    isNumeric(Math.PI).should.be(true);
    isNumeric('5').should.be(true);
    isNumeric('-20.2').should.be(true);

    // not numbers
    isNumeric('cartoon').should.be(false);
    isNumeric('').should.be(false);
    isNumeric([2,4]).should.be(false);
    isNumeric({ foo : 'bar' }).should.be(false);
    isNumeric(function() {}).should.be(false);
    isNumeric(NaN).should.be(false);
  });
});
