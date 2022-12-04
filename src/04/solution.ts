import { readFileSync } from "fs";

//https://adventofcode.com/2022/day/4
type Range = [number, number];

const parseRange = (line: string): Range[] =>
	line.split(",").map((range) => range.split("-").map(Number) as Range);

const parseFileInput = (path: string): Range[][] => {
	const lines = readFileSync(path, "utf8").trim().split("\n");
	return lines.map(parseRange);
};

// a fits into b?
const isInclusive = (a: Range, b: Range): boolean =>
	a[0] >= b[0] && a[1] <= b[1];

const listHasInclusiveRange = (list: Range[]): boolean => {
	let result = false;
	for (let i = 0; i < list.length; i++) {
		if (result) {
			return result;
		}
		result = list
			.slice(0, i)
			.concat(list.slice(i + 1))
			.some((range) => isInclusive(list[i], range));
	}
	return result;
};

const getTotalInclusiveRanges = (input: Range[][]): number => {
	return input.map(listHasInclusiveRange).filter(Boolean).length;
};

export { parseFileInput, getTotalInclusiveRanges };
