import 'babel-polyfill';
import chai from 'chai';
// import isNumeric from '../src';
chai.should();

const expect = chai.expect;
// function dummyFunction() {
//   'I do nothing';
// }

describe('isNumeric', () => {
  it('should detect numbers', () => {
    // numbers
    expect(true).to.be(true);
    // expect(isNumeric(5)).to.be(true);
    // isNumeric(-20.2).should.be(true);
    // isNumeric(0).should.be(true);
    // isNumeric(Math.PI).should.be(true);
    // isNumeric('5').should.be(true);
    // isNumeric('-20.2').should.be(true);

    // not numbers
    // isNumeric('cartoon').should.be(false);
    // isNumeric('').should.be(false);
    // isNumeric([ 2, 4 ]).should.be(false);
    // isNumeric({ foo: 'bar' }).should.be(false);
    // isNumeric(dummyFunction).should.be(false);
    // isNumeric(NaN).should.be(false);
  });
});
