import { readFileSync } from "fs";

type Opponent = "A" | "B" | "C"
type Hand = "X" | "Y" | "Z"

function parseFileInput(path: string): [opponent: Opponent, hand: Hand][] {
	const contents = readFileSync(path, "utf8").trim().split("\n");
	return contents.map(line => line.split(/\s+/) as [Opponent, Hand]);
}


type Rules = Record<Hand, Record<Opponent, number> & Record<"self", number>>;
const rules: Rules = {
	X: {//Rock
		self: 1,
		A: 3,
		B: 0,
		C: 6,
	},
	Y: {//Paper
		self: 2,
		A: 6,
		B: 3,
		C: 0,
	},
	Z: {//Scissors
		self: 3,
		A: 3,
		B: 6,
		C: 3,
	}
};

function calculateScore({
	list,
	rules,
}: {
  list: [opponent: Opponent, hand: Hand][];
  rules: Rules;
}): number {
	return list.reduce((total, [opp, hand]) => {
		return total + rules[hand][opp] + rules[hand].self;
	}, 0);
}

export { parseFileInput, calculateScore,  rules };
