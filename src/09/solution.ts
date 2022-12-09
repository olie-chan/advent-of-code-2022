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
		[0, 0]
	];
	let [xt, yt] = [0, 0];
	for (let i = 0; i < headPositions.length; i++) {
		const [xh, yh] = headPositions[i];
		const [dx, dy] = [xh - xt, yh - yt];

		// Don't move if we're adjacent
		if (dx ** 2 + dy ** 2 <= 2) {
			continue;
		}

		//Directly above
		if (dx == 0) {
			yt = yt + dy / 2;
			history.push([xt, yt]);
			continue;
		}

		//Same plane
		if (dy == 0) {
			xt = xt + dx / 2;
			history.push([xt, yt]);
			continue;
		}

		//Diagonal
		if (Math.abs(dx) > Math.abs(dy)) {
			xt = xt + dx / 2;
			yt = yh;
		} else {
			yt = yt + dy / 2;
			xt = xh;
		}
		history.push([xt, yt]);

	}
	return history;
};

export { getHeadPositions, getTailPositions, parseFile };
