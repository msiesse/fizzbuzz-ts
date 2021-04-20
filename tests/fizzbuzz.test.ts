import { expect } from 'chai';
import { fizzbuzz } from '../fizzbuzz';

describe('FizzBuzz number representation', () => {
	describe('should return 1 or 2 when passing 1 or 2', () => {
		[
			{ number: 1, string: '1' },
			{ number: 2, string: '2' }
		].forEach(({ string, number }) => {
			it (`should return ${string} when passing ${number}`, () => {
				expect(fizzbuzz(number, number)).to.equal(string);
			})
		});
	});

	it ('should return FizzFizz when passing 3', () => {
		expect(fizzbuzz(3, 3)).to.equal('FizzFizz');
	});

	it ('should return Fizz when passing 6', () => {
		expect(fizzbuzz(6, 6)).to.equal('Fizz');
	});

	it ('should return 13Fizz when passing 13', () => {
		expect(fizzbuzz(13, 13)).to.equal('13Fizz');
	});

	it ('should return BuzzBuzz when passing 5', () => {
		expect(fizzbuzz(5, 5)).to.equal('BuzzBuzz');
	});

	it ('should return Buzz when passing 10', () => {
		expect(fizzbuzz(10, 10)).to.equal('Buzz');
	});

	it ('should return FizzBuzzBuzz when passing 15', () => {
		expect(fizzbuzz(15, 15)).to.equal('FizzBuzzBuzz');
	});

	it ('should return FizzBuzzFizz when passing 30', () => {
		expect(fizzbuzz(30, 30)).to.equal('FizzBuzzFizz');
	});

	it ('should return FizzBuzzBuzz when passing 45', () => {
		expect(fizzbuzz(45, 45)).to.equal('FizzBuzzBuzz');
	});

	it ('should return BuzzFizzBuzz when passing 35', () => {
		expect(fizzbuzz(35, 35)).to.equal('BuzzFizzBuzz');
	});

	it ('should return FizzBuzzFizzBuzz when passing 135', () => {
		expect(fizzbuzz(135, 135)).to.equal('FizzBuzzFizzBuzz');
	});

	it ('should return 1\\n2 when passing 1 and 2', () => {
		expect(fizzbuzz(1, 2)).to.equal('1\n2');
	});

	it ('should return 1\\n2\\nFizzFizz when passing 1 and 3', () => {
		expect(fizzbuzz(1, 3)).to.equal('1\n2\nFizzFizz');
	});

	it ('should return 1\\n2\\nFizzFizz\\n4\\nBuzz when passing 1 and 5', () => {
		expect(fizzbuzz(1, 5)).to.equal('1\n2\nFizzFizz\n4\nBuzzBuzz');
	});

	it ('should return 31Fizz\\n32Fizz\\nFizzFizz when passing 31 and 33', () => {
		expect(fizzbuzz(31, 33)).to.equal('31Fizz\n32Fizz\nFizzFizz');
	})
})