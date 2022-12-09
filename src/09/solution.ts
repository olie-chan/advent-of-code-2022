//https://adventofcode.com/2022/day/9
import { readFileSync } from "fs";

const parseFile = (path: string): [string, number][] =>
	readFileSync(path, "utf-8")
		.trim()
		.split("\n")
		.map((line) => line.split(" "))
		.map(([dir, val]) => [dir, Number(val)]);

const handleInstruction = (
	[dir, amount]: [string, number],
	[x0, y0]: [number, number]
) => {
	const result = [];
	let [x, y] = [x0, y0];
	for (let i = 0; i <= amount; i++) {
		switch (dir) {
		case "U":
			result.push([x, y++]);
			break;
		case "R":
			result.push([x++, y]);
			break;
		case "D":
			result.push([x, y--]);
			break;
		case "L":
			result.push([x--, y]);
			break;
		default:
			throw new Error("Invalid direction");
		}
	}
	return result as [number, number][];
};
const getHeadPositions = (instructions: [string, number][]) => {
	let history: [number, number][] = [
		[0, 0]
	];
	for (const [dir, val] of instructions) {
		const last = history.slice(-1)[0];
		const travelled = handleInstruction([dir, val], last);
		history = [...history, ...travelled.slice(1)];
	}

	return history;
};

const getTailPositions = (headPositions: [number, number][]) => {
	const history: [number, number][] = [
	];
	let changedDirection = false;
	for (let i = 0; i < headPositions.length; i++) {
		const [x1, y1] = headPositions[i];
		const last = headPositions[i-1];
		if (!last) {
			//Started
			continue;
		}
		const [x0, y0] = last;
		if (y0 != y1 && !changedDirection) {
			changedDirection = true;
			//Moved up or down
			continue;
		}
		changedDirection = false;
		history.push(last);
	}

	return history;
};

export { getHeadPositions, getTailPositions, parseFile };
