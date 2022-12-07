import { getFileTree, mapTreeToDirectorySizes } from "./solution";
import { readFileSync } from "fs";
import path from "path";

const sampleInput = readFileSync(path.join(__dirname, "sample.txt"), "utf8")
	.trim()
	.split("\n");

const input = readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.trim()
	.split("\n");


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

it("creates a list of directory sizes", () => {
	expect(mapTreeToDirectorySizes({
		"/": {
			a: {
				e: {
					"i": 1,
				},
				f: 1,
				g: 1,
				"h.lst": 1,
			},
			"b.txt": 1,
			"c.dat": 1,
			d: {
				j: 1,
				"d.log": 1,
				"d.ext": 1,
				k: 1,
			},
		},
	})).toStrictEqual({
		"/a/e/i": 1,
		"/a": 4,
		"/d":4,
		"/": 10
	});
});
