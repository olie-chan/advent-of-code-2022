import { readFileSync } from "fs";

function getMaxTotal(list: number[][]): number {
	let max = -Infinity;
	list.forEach(group => {
		const total = sum(group);
		if (total > max) {
			max = total;
		}
	});

	return max;
}

const sum = (numbers: number[]): number  =>
	numbers.reduce((total, number) => total + number, 0);

const parseFileInput = (path: string): number[][] => {
	const contents = readFileSync(path, "utf8").trim();
	const groups =  contents.split(/[\n]{2,}/g);
	const parsedGroups = groups.map(group => group.split("\n").map(line => parseInt(line, 10)));
	return parsedGroups;
};

export { getMaxTotal, parseFileInput };
