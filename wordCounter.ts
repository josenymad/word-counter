import * as fs from "fs";

function countWords(filePath: string): number {
    try {
        // Read the content of the file and split it into words
        const fileContent: string = fs.readFileSync(filePath, "utf-8");
        const words: string[] = fileContent.split(/\s+/);
    
        return words.length;
    } catch (error) {
        if (error instanceof Error) {
            // If the error is an instance of the Error class, handle it
            if ((error as NodeJS.ErrnoException).code === "ENOENT") {
                console.error(`Error: File not found at ${filePath}`);
            } else {
                console.error(`Error reading the file: ${error.message}`);
            }
        } else {
            // If the error is not an instance of the Error class, handle it differently
            console.error(`An unexpected error occurred: ${error}`);
        }
        return -1;
    }
}

// Check if the correct number of command-line arguments is provided
if (process.argv.length !== 3) {
    console.error("Please use the following syntax: ts-node wordCounter.ts <file_path>");
    process.exit(1);
}

// Get the file path from the command-line arguments
const filePath: string = process.argv[2];

// Call the countWords function and display the result
const wordCount: number = countWords(filePath);
if (wordCount !== -1) {
    console.log(`The number of words in ${filePath} is: ${wordCount}`);
}
