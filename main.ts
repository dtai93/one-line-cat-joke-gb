// Writes the single-line make.fun cat joke entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "I refilled his bowl. He took one bite and filed a complaint.";

if ([...text].length < 1 || [...text].length > 199 || text.trim().length === 0) {
  throw new Error("Entry text must be 1-199 Unicode characters and not blank");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
