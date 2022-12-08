import { countVisibleTrees, parseFile, isVisible } from "./solution";
import path from "path";

const sampleInput = parseFile(path.join(__dirname, "sample.txt"));
const input = parseFile(path.join(__dirname, "input.txt"));

it("parses the input", () => {
	expect(sampleInput).toStrictEqual(
		[
			[ 3, 0, 3, 7, 3 ],
			[ 2, 5, 5, 1, 2 ],
			[ 6, 5, 3, 3, 2 ],
			[ 3, 3, 5, 4, 9 ],
			[ 3, 5, 3, 9, 0 ]
		]
	);
});

it("checks if a tree is visible", () => {
	expect(isVisible([
		[5,5,4,5,5],
		[5,4,4,4,5],
		[4,4,6,4,4],
		[5,4,4,4,5],
		[5,5,4,5,5],
	], 2, 2)).toBe(true);
});

it("counts the number of visible trees", () => {
	expect(countVisibleTrees(sampleInput)).toBe(21);
	expect(countVisibleTrees(input)).toBe(1715);
});
