import { getHeadPositions, getTailPositions, parseFile } from "./solution";
import path from "path";

const sampleInput = parseFile(path.join(__dirname, "sample.txt"));


it("gets the positions the head has travelled", () => {
	expect(getHeadPositions(sampleInput)).toStrictEqual([
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

it("gets the positions the tail has travelled", () => {
	expect(getTailPositions(getHeadPositions(sampleInput))).toStrictEqual([
		[0,0],
		[1,0],
		[2,0],
		[3,0], // R 3
		[4,1],
		[4,2],
		[4,3], // U 3
		[3,4],
		[2,4], // L 3 / D 1
		[3,3],
		[4,3], // R 4 / D 1
		[3,2],
		[2,2],
		[1,2], // L 5 / R 2
	]);
});
