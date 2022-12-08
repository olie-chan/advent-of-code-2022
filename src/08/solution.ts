import { readFileSync } from "fs";
// https://adventofcode.com/2022/day/8
const readFile = (file: string) => readFileSync(file, "utf8").trim();

const parseInput = (input: string) =>
	input.split("\n").map((line) => line.split("").map(Number));

const parseFile = (file: string) => parseInput(readFile(file));

const getTreesAbove = (trees: number[][], y: number, x: number) =>
	trees.slice(0, y).map((row) => row[x]);
const getTreesBelow = (trees: number[][], y: number, x: number) =>
	trees.slice(y + 1).map((row) => row[x]);
const getTreesLeft = (trees: number[][], y: number, x: number) =>
	trees[y].slice(0, x);
const getTreesRight = (trees: number[][], y: number, x: number) =>
	trees[y].slice(x + 1);

const isVisible = (trees: number[][], y: number, x: number) => {
	const tree = trees[y][x];
	const compareFn = (t: number, c: number) => (c < t ? t : -Infinity);

	const visibileMap = [
		getTreesAbove,
		getTreesBelow,
		getTreesLeft,
		getTreesRight,
	].map((f) => f(trees, y, x).reduce(compareFn, tree));
	return visibileMap.some((v) => Number.isFinite(v));
};

const countVisibleTrees = (trees: number[][]) => {
	let count = 0;
	for (let i = 0; i < trees.length; i++) {
		for (let j = 0; j < trees[i].length; j++) {
			if (isVisible(trees, i, j)) {
				count++;
			}
		}
	}
	return count;
};

export { parseFile, countVisibleTrees, isVisible };
