import {
	calculateScore,
	parseFileInput,
	rules,
	convertResultsToHand,
	conversions,
} from "./solution";
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

	expect(calculateScore({
		list: convertResultsToHand(parseFileInput(path.join(__dirname, "./sample.txt")), conversions),
		rules
	})).toEqual(12);

	expect(
		calculateScore({
			list: [["A", "X"]],
			rules,
		})
	).toEqual(4);
	expect(
		calculateScore({
			list: [["B", "X"]],
			rules,
		})
	).toEqual(1);
	expect(
		calculateScore({
			list: [["C", "X"]],
			rules,
		})
	).toEqual(7);
	expect(
		calculateScore({
			list: [["A", "Y"]],
			rules,
		})
	).toEqual(8);
	expect(
		calculateScore({
			list: [["B", "Y"]],
			rules,
		})
	).toEqual(5);
	expect(
		calculateScore({
			list: [["C", "Y"]],
			rules,
		})
	).toEqual(2);
	expect(
		calculateScore({
			list: [["A", "Z"]],
			rules,
		})
	).toEqual(3);
	expect(
		calculateScore({
			list: [["B", "Z"]],
			rules,
		})
	).toEqual(9);
	expect(
		calculateScore({
			list: [["C", "Z"]],
			rules,
		})
	).toEqual(6);
});

it("answers the question part 1", () => {
	expect(
		calculateScore({
			list: parseFileInput(path.join(__dirname, "./input.txt")),
			rules,
		})
	).toEqual(11666);
});

it("converts results to hands", () => {
	expect(
		convertResultsToHand(
			[
				["A", "Y"], //Rock, Draw ->  Rock, Rock
				["B", "X"], //Paper, Lose -> Paper, Rock
				["C", "Z"], //Scissors, Win -> Scissors, Rock
			],
			conversions
		)
	).toStrictEqual(
		[
			["A", "X"],
			["B", "X"],
			["C", "X"],
		],
	);
});

it("answers the question part 2", () => {
	expect(calculateScore({
		list: convertResultsToHand(parseFileInput(path.join(__dirname, "./input.txt")), conversions),
		rules
	})).toEqual(12767);
});
