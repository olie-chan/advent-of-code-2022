import { getFileTree } from "./solution";
import { readFileSync } from "fs";
import path from "path";

const sampleInput = readFileSync(path.join(__dirname, "sample.txt"), "utf8")
	.trim()
	.split("\n");

const input = readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.trim()
	.split("\n");

console.log(JSON.stringify(getFileTree(sampleInput), null, 2));

it("gets the file tree for a set of instructions", () => {

	expect(getFileTree(sampleInput)).toStrictEqual({
		"/": {
			a: {
				e: {
					"i": 584,
				},
				f: 29116,
				g: 2557,
				"h.lst": 62596,
			},
			"b.txt": 14848514,
			"c.dat": 8504156,
			d: {
				j: 4060174,
				"d.log": 8033020,
				"d.ext": 5626152,
				k: 7214296,
			},
		},
	});
});
