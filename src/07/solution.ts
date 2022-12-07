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

const getPaths = (tree: any, result: Set<string> = new Set(), path: string[] = []) => {
	for (const key in tree) {
		if (typeof tree[key] !== "number") {
			getPaths(tree[key], result, path.concat(key));
		} else {
			result.add(path.slice(1).join("/"));
		}
	}

	return [...result.values()].map(p => p.split("/"));
};

const sumTreeValues = (
	tree: any,
	result: number[] = [],
): any => {

	for (const key in tree) {
		const val = tree[key];
		if (typeof tree[key] !== "number") {
			sumTreeValues(tree[key], result);
		} else {
			result.push(val);
		}
	}


	return result.reduce((a, b) => a + b, 0);
};

const mapTreeToDirectorySizes = (
	tree: any,
): any => {
	const result: any = {};
	for (const paths of getPaths(tree)) {
		const subTree = paths.reduce((a, b) => a[b], tree);
		result[paths.join("/")] = sumTreeValues(subTree);
	}

	return result;
};

export { getFileTree, mapTreeToDirectorySizes };
