import {
	concatByMultiplesOfN,
	getNumericValue,
	getRepeatedLetters,
	parseFileInput,
	solution,
	splitInTwo,
} from "./solution";
import path from "path";

it("converts a letter to a numeric value", () => {
	expect(getNumericValue("A")).toEqual(27);
	expect(getNumericValue("a")).toEqual(1);
	expect(getNumericValue("Z")).toEqual(52);
	expect(getNumericValue("z")).toEqual(26);
});

it("splits a string in two", () => {
	expect(splitInTwo("abcd")).toStrictEqual(["ab", "cd"]);
});

it("gets the repeated letters", () => {
	expect(getRepeatedLetters("abc", "bcd")).toStrictEqual(["b", "c"]);
});


it("answers the example question", () => {
	const input = parseFileInput(path.join(__dirname, "./sample.txt"));
	expect(solution(input.map(splitInTwo))).toEqual(157);
	expect(solution((concatByMultiplesOfN(input, 3)))).toEqual(70);
});

it("answers the question", () => {
	const input = parseFileInput(path.join(__dirname, "./input.txt")).map(
		splitInTwo
	);
	expect(solution(input)).toEqual(7903);
});
