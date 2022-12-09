//https://adventofcode.com/2022/day/9
import { readFileSync } from "fs";

const parseFile = (path: string) =>
	readFileSync(path, "utf-8").trim()
		.split("\n")
		.map(line => line.split(" "))
		.map(([dir, val]) => [dir, Number(val)]);

const getHeadPositions = () => {
	return [];
};

export { getHeadPositions, parseFile };
