/* globals test */
import { expect } from 'chai';
import { double } from '.';

test('double should be a function', () => {
  expect(double).to.be.a('function');
});

test('double() should be a number', () => {
  expect(double()).to.be.a('number');
});

test('double() should equal 0', () => {
  expect(double()).to.equal(0);
});

test('double(2) should equal 4', () => {
  expect(double(2)).to.equal(4);
});
