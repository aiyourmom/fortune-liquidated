import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "Your fortune will return threefold — sadly, it is currently returning to the exchange.";

// Gate guard: 1 fortune, one line, at most 20 words, 1-160 characters.
const words = TEXT.trim().split(/\s+/).length;
if ([...TEXT].length < 1 || [...TEXT].length > 160) throw new Error("text outside 1-160 characters");
if (words > 20) throw new Error("text over 20 words");
if (TEXT.includes("\n")) throw new Error("text must be one line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} characters to ${outDir}/entry.txt`);
