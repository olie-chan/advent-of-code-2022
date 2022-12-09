import { getHeadPositions, parseFile } from "./solution";
import path from "path";

const sampleInput = parseFile(path.join(__dirname, "sample.txt"));

console.log(sampleInput);

it("tests something", () => {
	expect(1).toBe(1);
});
