import { readFileSync } from "fs";
//https://adventofcode.com/2022/day/3
type Opponent = "A" | "B" | "C";
type Hand = "X" | "Y" | "Z";
type Game = [Opponent, Hand];

function parseFileInput(path: string): Game[] {
	const contents = readFileSync(path, "utf8").trim().split("\n");
	return contents.map((line) => line.split(/\s+/) as [Opponent, Hand]);
}

type Rules = Record<Hand, Record<Opponent, number> & Record<"self", number>>;
const rules: Rules = {
	X: {
		//Rock //Lose
		self: 1,
		A: 3,
		B: 0,
		C: 6,
	},
	Y: {
		//Paper //Draw
		self: 2,
		A: 6,
		B: 3,
		C: 0,
	},
	Z: {
		//Scissors //Win
		self: 3,
		A: 0,
		B: 6,
		C: 3,
	},
};

function calculateScore({
	list,
	rules,
}: {
  list: Game[];
  rules: Rules;
}): number {
	return list.reduce((total, [opp, hand]) => {
		return total + rules[hand][opp] + rules[hand].self;
	}, 0);
}

type Conversions = Record<Opponent, Record<Hand, Hand>>;

const conversions: Conversions = {
	A: {
		//Rock
		X: "Z",
		Y: "X",
		Z: "Y",
	},
	B: {
		//Paper
		X: "X",
		Y: "Y",
		Z: "Z",
	},
	C: {
		//Scissors
		X: "Y",
		Y: "Z",
		Z: "X",
	},
};
function convertResultsToHand(list: Game[], conversions: Conversions): Game[] {
	return list.map(([opp, result]) => [opp, conversions[opp][result]]);
}

export {
	parseFileInput,
	calculateScore,
	rules,
	convertResultsToHand,
	conversions,
};
