import { readFileSync } from "fs";

//https://adventofcode.com/2022/day/3

const getNumericValue = (letter: string): number =>
	letter.toLowerCase() === letter
		? letter.charCodeAt(0) - 96
		: letter.charCodeAt(0) - 38;

const splitInTwo = (input: string): [string, string] => [
	input.slice(0, input.length / 2),
	input.slice(input.length / 2),
];

const getRepeatedLetters = (...groups: string[]): string[] => {
	const [longest, ...rest] = groups.map((group) => new Set(group)).sort((a, b) => b.size - a.size);
	const repeated: string[] = [];
	for (const letter of longest.values()) {
		if (rest.filter((group) => group.has(letter)).length === rest.length) {
			repeated.push(letter);
		}
	}

	return repeated;

};

const parseFileInput = (path: string): string[] => {
	const contents = readFileSync(path, "utf8").trim().split("\n");
	return contents;
};

const solution = (input: string[][]) => {
	return input
		.map((groups) => getRepeatedLetters(...groups))
		.map((letters) => letters.map(getNumericValue))
		.flat()
		.reduce((total, n) => total + n, 0);
};

const concatByMultiplesOfN = (input: string[], n: number): string[][] => {
	const result: string[][] = [];
	for (let i = 0; i < input.length; i += n) {
		const group: string[] = [];
		for (let j = i; j < i + n; j++) {
			group.push(input[j]);
		}
		result.push(group);
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
