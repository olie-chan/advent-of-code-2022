import { calculateScore, parseFileInput, rules  } from "./solution";
import path from "path";

it("parses the sample input", () => {
	expect(parseFileInput(path.join(__dirname, "./sample.txt"))).toStrictEqual([
		["A", "Y"],
		["B", "X"],
		["C", "Z"],
	]);
});

it("caculates the score", () => {
	expect(
		calculateScore({
			list: parseFileInput(path.join(__dirname, "./sample.txt")),
			rules,
		})
	).toEqual(15);
});

it("answers the question part 1", () => {
	expect(
		calculateScore({
			list: parseFileInput(path.join(__dirname, "./input.txt")),
			rules,
		})
	).toEqual(12434);
});
