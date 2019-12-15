/* globals test describe */
import { expect } from 'chai';
import { double } from '.';

describe('< double function />', () => {
  test('double should be a function', () => {
    expect(double).to.be.a('function');
  });

  test('double() should be a number', () => {
    expect(double()).to.be.a('number');
  });

  test('double() should equal 0', () => {
    expect(double()).to.equal(0);
  });

  test('double(undefined) should equal 0', () => {
    expect(double(undefined)).to.equal(0);
  });

  test('double(2) should equal 4', () => {
    expect(double(2)).to.equal(4);
  });

  test('double(-3) should equal -6', () => {
    expect(double(-3)).to.equal(-6);
  });

  test('double("foo") should to trow a error "not a number"', () => {
    expect(() => double('foo')).to.throw(/not a number/);
  });

  test('double(false) should to trow a error "not a number"', () => {
    expect(() => double(false)).to.throw(/not a number/);
  });

  test('double(true) should to trow a error "not a number"', () => {
    expect(() => double(true)).to.throw(/not a number/);
  });

  test('double(null) should to trow a error "not a number"', () => {
    expect(() => double(null)).to.throw(/not a number/);
  });
});
