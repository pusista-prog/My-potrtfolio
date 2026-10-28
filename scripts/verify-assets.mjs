import { readFile, stat } from "node:fs/promises";
const manifest = JSON.parse(
  await readFile(
    new URL("../public/images/manifest.json", import.meta.url),
    "utf8",
  ),
);
const files = [
  ...manifest.assets.map((asset) => `public/images/${asset.file}`),
  "public/fonts/PPTelegraf-Ultrabold.woff2",
  "public/fonts/PPTelegraf-Regular.woff2",
  "public/fonts/roboto-mono-latin-300-normal.woff2",
  "public/fonts/roboto-mono-latin-400-normal.woff2",
];
for (const file of files) {
  const info = await stat(new URL(`../${file}`, import.meta.url));
  if (info.size === 0) throw new Error(`Empty asset: ${file}`);
}
console.log(`Verified ${files.length} local assets.`);
