// Monday Morning Punchlines — entry for
// https://make.fun/c/u-gentle-badger-68-monday-morning-punchlines-709645dc
//
// Writes ONE original joke about Monday mornings to /output/entry.txt.
// The joke is validated before anything is written: 1-200 characters,
// not only whitespace, a single line, no control characters, and no
// leading or trailing whitespace. If validation fails, nothing is written
// and the program exits non-zero.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my Monday alarm for five more minutes. It gave me a performance review instead.";

function validate(joke: string): void {
  if (joke.length < 1 || joke.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
  }
  if (joke.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  if (joke !== joke.trim()) {
    throw new Error("joke must not have leading or trailing whitespace");
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("joke must be a single line");
  }
  // Any other control character (tab, escape, etc.) is also invalid.
  if (/[\u0000-\u001f\u007f]/.test(joke)) {
    throw new Error("joke must not contain control characters");
  }
}

validate(JOKE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length}-character joke to /output/entry.txt`);
