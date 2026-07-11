import sharp from 'sharp';
import { readdir, unlink, stat } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const PUBLIC_DIR = join(root, 'public');

const pngFiles = (await readdir(PUBLIC_DIR)).filter((f) => f.endsWith('.png'));

for (const file of pngFiles) {
  const input = join(PUBLIC_DIR, file);
  const output = join(PUBLIC_DIR, file.replace(/\.png$/i, '.webp'));
  const before = (await stat(input)).size;

  await sharp(input)
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  const after = (await stat(output)).size;
  const saved = ((1 - after / before) * 100).toFixed(1);
  console.log(`${file}: ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB (${saved}% smaller)`);

  await unlink(input);
}

console.log(`Converted ${pngFiles.length} PNG file(s) to WebP.`);
