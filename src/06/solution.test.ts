import { getMarker } from "./solution";
import path from "path";
import {readFileSync} from "fs";

const parseFileInput = (path: string): string =>
	readFileSync(path, "utf-8").trim();

const input = parseFileInput(path.join(__dirname, "input.txt"));

it("returns the marker for when there have been 4 unique characters", () => {
	expect(getMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 4)).toBe(7);
	expect(getMarker("bvwbjplbgvbhsrlpgdmjqwftvncz", 4)).toBe(5);
	expect(getMarker(input, 4)).toBe(1779);
	expect(getMarker(input, 14)).toBe(2635);
});
