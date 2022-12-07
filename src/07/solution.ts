//https://adventofcode.com/2022/day/7

const isCD = (row: string) => row.includes("$ cd ");
const isFile = (row: string) => /^\d+ /.test(row);
const getTarget = (row: string) => row.split(" ").pop() as string;
const addValue = (tree: any, paths: string[], value: any = {}) => {
	for (const path of paths) {
		const current = tree[path];
		if (!current) {
			tree[path] = value;
			return;
		} else {
			tree = current;
		}
	}
};

const getFileTree = (instructions: string[]): any => {
	const tree: any = {};
	const path: string[] = [];
	for (const row of instructions) {
		if (isCD(row)) {
			const target = getTarget(row);
			if (target == "..") {
				path.pop();
				continue;
			}
			path.push(target);
			addValue(tree, path);
		}
		if (isFile(row)) {

			const [value, target] = row.split(" ");
			addValue(tree, path.concat(target), Number.parseInt(value));
		}

	}
	return tree;
};

export { getFileTree };
