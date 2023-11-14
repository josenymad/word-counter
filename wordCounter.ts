import * as fs from "fs";

function countWords(filePath: string): number {
    const fileContent: string = fs.readFileSync(filePath, "utf-8");
    const words: string[] = fileContent.split(/\s+/);

    return words.length;
}

const filePath: string = process.argv[2];

console.log(countWords(filePath));