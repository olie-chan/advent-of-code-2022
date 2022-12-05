import { mover9000, mover9001, parseFileInput, solution } from "./solution";
import path from "path";

const getSampleCrates = () => [["Z", "N"], ["M", "C", "D"], ["P"]];

const getInputCrates = () => [
	["V", "C", "D", "R", "Z", "G", "B", "W"],
	["G", "W", "F", "C", "B", "S", "T", "V"],
	["C", "B", "S", "N", "W"],
	["Q", "G", "M", "N", "J", "V", "C", "P"],
	["T", "S", "L", "F", "D", "H", "B"],
	["J", "V", "T", "W", "M", "N"],
	["P", "F", "L", "C", "S", "T", "G"],
	["B", "D", "Z"],
	["N", "N", "Z", "W"],
];

const sampleInstructions = parseFileInput(path.join(__dirname, "sample.txt"));
const instructions = parseFileInput(path.join(__dirname, "input.txt"));

it("parses the instructions for the sample text", () => {
	expect(sampleInstructions).toStrictEqual([
		[1, 1, 0],
		[3, 0, 2],
		[2, 1, 0],
		[1, 0, 1],
	]);
});

it("answers the sample question", () => {
	expect(solution(sampleInstructions, getSampleCrates)(mover9000)).toBe("CMZ");
	expect(solution(sampleInstructions, getSampleCrates)(mover9001)).toBe("MCD");
});
it("answers the first question", () => {
	expect(solution(instructions, getInputCrates)(mover9000)).toBe("TBVFVDZPN");
	expect(solution(instructions, getInputCrates)(mover9001)).toBe("VLCWHTDSZ");
});
