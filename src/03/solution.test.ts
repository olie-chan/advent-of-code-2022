import { getNumericValue, splitInTwo } from "./solution";

it("converts a letter to a numeric value", () => {
	expect(getNumericValue("A")).toEqual(27);
	expect(getNumericValue("a")).toEqual(1);
	expect(getNumericValue("Z")).toEqual(52);
	expect(getNumericValue("z")).toEqual(26);
});

it("splits a string in two", () => {
	expect(splitInTwo("abcd")).toStrictEqual(["ab", "cd"]);
});
