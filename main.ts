import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./summary.txt', import.meta.url);
const destination = join(outputDirectory, 'entry.txt');

mkdirSync(outputDirectory, { recursive: true });
copyFileSync(source, destination);

if (statSync(source).size !== statSync(destination).size) {
  throw new Error('Copied entry byte count does not match summary.txt');
}
