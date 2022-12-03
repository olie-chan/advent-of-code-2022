const getNumericValue = (letter: string): number =>
	letter.toLowerCase() === letter ? letter.charCodeAt(0) - 96 : letter.charCodeAt(0) - 38;

const splitInTwo = (input: string): [string, string] => [
	input.slice(0, input.length / 2), input.slice(input.length / 2)
];

export { getNumericValue, splitInTwo };
