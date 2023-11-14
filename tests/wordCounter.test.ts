import { countWords } from "../wordCounter";

describe("Word Counter", () => {
    it("Counts the right number of words in a .txt file", () => {
        const filePath = "./test_input/input.txt"
        const result = countWords(filePath);

        expect(result).toBe(3);
    });
});