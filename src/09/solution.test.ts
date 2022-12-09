import { getHeadPositions, parseFile } from "./solution";
import path from "path";

const sampleInput = parseFile(path.join(__dirname, "sample.txt"));

it("tests something", () => {
	expect(getHeadPositions(sampleInput)).toBe([
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0],
		[4, 0],
		[4, 1],
		[4, 2],
		[4, 3],
		[4, 4],
		[3, 4],
		[2, 4],
		[1, 4],
		[1, 3],
		[2, 3],
		[3, 3],
		[4, 3],
		[5, 3],
		[5, 2],
		[4, 2],
		[3, 2],
		[2, 2],
		[1, 2],
		[0, 2],
		[1, 2],
		[2, 2],
	]);
});
