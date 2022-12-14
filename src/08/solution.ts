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

const getTreeFns = [getTreesAbove, getTreesBelow, getTreesLeft, getTreesRight];

const isVisible = (trees: number[][], y: number, x: number) => {
	const tree = trees[y][x];
	const compareFn = (t: number, c: number) => (c < t ? t : -Infinity);

	const visibileMap = getTreeFns.map((f) =>
		f(trees, y, x).reduce(compareFn, tree)
	);
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

//    ***** { v: [ 0, 4, 3, 1 ], i: 0, j: 3, tree: 7 }
const getMaxViewingDistance = (trees: number[], tree: number) => {
	let result = -Infinity;
	for (let i = 0; i <= tree; i++) {
		result = Math.max(result, trees.findIndex(t => t >= i) + 1);
	}
	return result;
};

const calculateScenicScore = (trees: number[][]) => {
	let score = -Infinity;
	for (let i = 0; i < trees.length; i++) {
		for (let j = 0; j < trees[i].length; j++) {
			const tree = trees[i][j];
			const v = getTreeFns
				.map((f) => f(trees, i, j))
				.map((t, treeIndex) => {
					if (treeIndex == 0 || treeIndex == 2) {
						//above or to the left need reversing
						t.reverse();
					}
					return getMaxViewingDistance(t, tree);
				});
			const something = v.filter(Boolean).reduce((a, b) => a * b, 1);
			score = Math.max(score, something);
		}
	}
	return score;
};

export {
	parseFile,
	countVisibleTrees,
	isVisible,
	calculateScenicScore,
	getMaxViewingDistance,
};
