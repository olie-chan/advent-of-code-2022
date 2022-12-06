//https://adventofcode.com/2022/day/6

const getMarker = (input: string, uniqueCount: number): number => {
	return [...input].findIndex((_, i, arr) => {
		const fragment: string[] = arr.slice(i - uniqueCount, i);
		const set = new Set(fragment);
		return (
			(fragment.length === uniqueCount && fragment.length === set.size)
		);
	});
};

export { getMarker };
