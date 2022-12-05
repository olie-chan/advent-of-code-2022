import { readFileSync } from "fs";

//https://adventofcode.com/2022/day/5
type Instruction = [quantity: number, position: number, target: number];

const parseLine = (line: string): Instruction =>
  line
  	.split(" ")
  	.map(Number)
  	.filter((n) => !isNaN(n))
  	.map((n, i) => (i == 0 ? n : n - 1)) as Instruction;

const parseFileInput = (path: string): Instruction[] => {
	const input = readFileSync(path, "utf-8").trim().split("\n");
	return input.map(parseLine);
};

const solution = (
	instructions: Instruction[],
	getColumns: () => string[][]
): string => {
	const columns = getColumns();
	for (const [quantity, position, target] of instructions) {
		console.log({
			quantity,
			position,
			target,
			targetColumn: columns[target],
			targetPosition: columns[position],
		});
		columns[target] = columns[target].concat(
			columns[position].slice(-quantity).reverse()
		);
	}

	return columns
		.map((column) => column.pop())
		.filter(Boolean)
		.join("");
};

export { parseFileInput, solution };
