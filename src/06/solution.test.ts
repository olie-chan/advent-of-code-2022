import { getMarker } from "./solution";

it("returns the marker for when there have been 4 unique characters", () => {
	expect(getMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(7);
	expect(getMarker("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(5);
});
