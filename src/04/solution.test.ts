import { parseFileInput, getTotalInclusiveRanges } from "./solution";
import path from "path";

it("answers the sample question", () => {
	const input = parseFileInput(path.join(__dirname, "sample.txt"));
	expect(getTotalInclusiveRanges(input)).toBe(2);
});
it("answers the first part", () => {
	const input = parseFileInput(path.join(__dirname, "input.txt"));
	expect(getTotalInclusiveRanges(input)).toBe(490);
});
