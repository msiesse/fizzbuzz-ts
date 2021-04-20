const	NEWLINE = '\n';

export function fizzbuzz(minNumber: number, maxNumber: number): string {
	return evaluateNumbers(minNumber, maxNumber);
}

function evaluateNumbers(minNumber: number, maxNumber: number): string {
	let result = '';
	while (maxNumber >= minNumber) {
		result += evaluateNumberMultiplier(minNumber);
		result += evaluateNumberHasThreeOrFive(minNumber++);
		result += maxNumber >= minNumber ? NEWLINE : '';
	}
	return result;
}

function evaluateNumberMultiplier(number: number): string {
	if (number % 15 === 0)
		return 'FizzBuzz';
	if (number % 3 === 0)
		return 'Fizz';
	if (number % 5 === 0)
		return 'Buzz';
	return number.toString();
}

function	evaluateNumberHasThreeOrFive(number: number): string {
	let result = '';
	if (number.toString().indexOf('3') !== -1)
		result += 'Fizz';
	if (number.toString().indexOf('5') !== -1)
		result += 'Buzz';
	return result;
}

