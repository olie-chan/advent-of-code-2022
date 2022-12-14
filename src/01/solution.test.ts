import { getMaxTotal, getTotalOfTopThree, parseFileInput } from "./solution";
import path from "path";

it("returns the biggest total of a group", () => {
	const input = [
		[1000, 2000, 3000],
		[4000],
		[5000, 6000],
		[7000, 8000, 9000],
		[10000],
	];
	expect(getMaxTotal(input)).toEqual(24000);
});

it("parses a string into a list of numbers", () => {
	expect(parseFileInput(path.join(__dirname, "./sample.txt"))).toStrictEqual([
		[1000, 2000, 3000],
		[4000],
		[5000, 6000],
		[7000, 8000, 9000],
		[10000],
	]);
});

it("answers the first question", () => {
	expect(
		getMaxTotal(parseFileInput(path.join(__dirname, "./input.txt")))
	).toEqual(68467);
});

it("gets the total for the top 3", () => {
	expect(
		getTotalOfTopThree(parseFileInput(path.join(__dirname, "./input.txt")))
	).toEqual(203420);
});
