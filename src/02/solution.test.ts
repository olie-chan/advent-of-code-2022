import { parseFileInput } from "./solution";
import path from "path";

it("parses the sample input", () => {
	expect(parseFileInput(path.join(__dirname, "./sample.txt"))).toStrictEqual([
		["A", "Y"],
		["B", "X"],
		["C", "Z"],
	]);
});
