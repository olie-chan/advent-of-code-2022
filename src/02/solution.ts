import { readFileSync } from "fs";

type Opponent = "A" | "B" | "C"
type Hand = "X" | "Y" | "Z"

function parseFileInput(path: string): [opponent: Opponent, hand: Hand][] {
	const contents = readFileSync(path, "utf8").trim().split("\n");
	return contents.map(line => line.split(/\s+/) as [Opponent, Hand]);
}

export { parseFileInput };
