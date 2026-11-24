// One Line, One Minute: The Vending Machine Pickup Line Contest
// Competition: u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
//
// The program writes a single pickup line, spoken by a vending machine
// to a passing human, to /output/entry.txt. The gate requires UTF-8 text
// of 1 to 200 characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Hey, you — press B7. I've been saving the last one behind the glass just for you, and my coils never jam for the cute ones.";

// Fail loudly instead of writing an entry the gate would refuse:
// the sealed scorer only accepts 1 to 200 characters.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${charCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${charCount} characters to /output/entry.txt`);
