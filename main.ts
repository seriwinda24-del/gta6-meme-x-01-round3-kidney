// main.ts — gta6-meme-x-01 entry program.
// Copies POST.json (the X post's address) from this repository to /output.
// That is all the program has to do; the house reads the post itself.
// NOTE: POST.json holds a placeholder until Seri posts the meme from X;
// the submit coordinator replaces it with the real post URL.
import { mkdirSync, cpSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

mkdirSync(outDir, { recursive: true });
cpSync(join(here, "POST.json"), join(outDir, "POST.json"));
