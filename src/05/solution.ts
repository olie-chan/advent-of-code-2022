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

const mover9000 = (instructions: Instruction[], columns: string[][]): string[][] => {
	for (const [quantity, position, target] of instructions) {
		columns[target] = columns[target].concat(
			columns[position].slice(-quantity).reverse()
		);
		columns[position] = columns[position].slice(0, -quantity);
	}

	return columns;
};
const mover9001 = (instructions: Instruction[], columns: string[][]): string[][] => {
	for (const [quantity, position, target] of instructions) {
		columns[target] = columns[target].concat(
			columns[position].slice(-quantity)
		);
		columns[position] = columns[position].slice(0, -quantity);
	}

	return columns;
};

const solution =
  (instructions: Instruction[], getColumns: () => string[][]) =>
  	(
  		mover: (instructions: Instruction[], columns: string[][]) => string[][]
  	): string => {
  		const columns = mover(instructions, getColumns());

  		return columns
  			.map((column) => column.pop())
  			.filter(Boolean)
  			.join("");
  	};

export { parseFileInput, solution, mover9000, mover9001 };
