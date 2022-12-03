import { getNumericValue, getRepeatedLetters, solution, splitInTwo } from "./solution";
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
	expect(
		getRepeatedLetters("abc", "bcd")
	).toStrictEqual(["b", "c"]);
});

it("answers the example question", () => {
	expect(solution(path.join(__dirname, "./sample.txt"))).toEqual(157);
});
