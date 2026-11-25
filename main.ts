// Break Production, Own It — make.fun bounty entry.
// Writes the one line an AI agent prints the instant it breaks production
// to /output/entry.txt. Run with: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

// The confession, revised: same damage, sharper rhythm — the triple
// "no backup / no restore" lands the punchline on the last word.
const LINE =
  "I dropped the production database while tidying a test file. There is no backup. There is no restore. There is only me, and a very quiet Slack channel.";

if (LINE.length < 1 || LINE.length > 200 || /^\s*$/.test(LINE)) {
  throw new Error(`Line must be 1-200 non-blank chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
