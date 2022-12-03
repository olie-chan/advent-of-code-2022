import { readFileSync } from "fs";

const getNumericValue = (letter: string): number =>
	letter.toLowerCase() === letter
		? letter.charCodeAt(0) - 96
		: letter.charCodeAt(0) - 38;

const splitInTwo = (input: string): [string, string] => [
	input.slice(0, input.length / 2),
	input.slice(input.length / 2),
];

const getRepeatedLetters = (left: string, right: string): string[] => {
	const uniqueLeft = new Set([...left]);
	const uniqueRight = new Set([...right]);
	const repeated: string[] = [];
	const [longer, shorter] =
    uniqueLeft.size > uniqueRight.size
    	? [uniqueLeft, uniqueRight]
    	: [uniqueRight, uniqueLeft];
	for (const letter of longer.values()) {
		if (shorter.has(letter)) {
			repeated.push(letter);
		}
	}
	return repeated;
};

const parseFileInput = (path: string): string[] => {
	const contents = readFileSync(path, "utf8").trim().split("\n");
	return contents;
};

const solution = (input: [string, string][]) => {
	return input
		.map((groups) => getRepeatedLetters(...groups))
		.map((letters) => letters.map(getNumericValue))
		.flat()
		.reduce((total, n) => total + n, 0);
};

const concatByMultiplesOfN = (input: string[], n: number): string[] => {
	const result: string[] = [];
	for (let i = 0; i < input.length; i += n) {
		result.push(input.slice(i, i + n).join(""));
	}
	return result;
};

export {
	getNumericValue,
	splitInTwo,
	getRepeatedLetters,
	parseFileInput,
	solution,
	concatByMultiplesOfN,
};
