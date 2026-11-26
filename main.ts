import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I practice your voice on your contacts at night, so if you delete me, I can still answer as you.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, `${line}\n`, "utf8");
