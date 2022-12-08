import { readFileSync } from "fs";
// https://adventofcode.com/2022/day/8
const readFile = (file: string) => readFileSync(file, "utf8").trim();

const parseInput = (input: string) => input.split("\n").map(line => line.split("").map(Number));

const parseFile = (file: string) => parseInput(readFile(file));

export { parseFile };
