import { parseFileInput, getTotalInclusiveRanges, getPartialInclusiveRanges } from "./solution";
import path from "path";

const sampleInput = parseFileInput(path.join(__dirname, "sample.txt"));
const input = parseFileInput(path.join(__dirname, "input.txt"));
it("answers the sample question", () => {
	expect(getTotalInclusiveRanges(sampleInput)).toBe(2);
});
it("answers the first part", () => {
	expect(getTotalInclusiveRanges(input)).toBe(490);
});
it("answers the second part sample", () => {
	expect(getPartialInclusiveRanges(sampleInput)).toBe(4);
});
it("answers the second part", () => {
	expect(getPartialInclusiveRanges(input)).toBe(921);
});
