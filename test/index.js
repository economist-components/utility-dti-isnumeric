import 'babel-polyfill';
import chai from 'chai';
import isNumeric from '../src';
chai.should();

function dummyFunction() {
  'I do nothing';
}

describe('isNumeric', () => {
  it('should detect numbers', () => {
    // numbers
    isNumeric(5).should.equal(true);
    isNumeric(-20.2).should.equal(true);
    isNumeric(0).should.equal(true);
    isNumeric(Math.PI).should.equal(true);
    isNumeric('5').should.equal(true);
    isNumeric('-20.2').should.equal(true);

    // not numbers
    isNumeric('cartoon').should.equal(false);
    isNumeric('').should.equal(false);
    isNumeric([ 2, 4 ]).should.equal(false);
    isNumeric({ foo: 'bar' }).should.equal(false);
    isNumeric(dummyFunction).should.equal(false);
    isNumeric(NaN).should.equal(false);
  });
});
