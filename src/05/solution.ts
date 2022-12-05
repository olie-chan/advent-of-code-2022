import { readFileSync } from "fs";

//https://adventofcode.com/2022/day/5
type Instruction = [quantity: number, position: number, target: number];

const parseLine = (line: string): Instruction =>
  line
  	.split(" ")
  	.map(Number)
  	.filter((n) => !isNaN(n))
  	.map((n, i) => (i == 1 ? n - 1 : n)) as Instruction;

const parseFileInput = (path: string): Instruction[] => {
	const input = readFileSync(path, "utf-8").trim().split("\n");
	return input.map(parseLine);
};

export { parseFileInput };
