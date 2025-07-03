import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./public/icons";
const outputFolder = "./public/compressed-icons";

// Create output folder if not exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const files = fs.readdirSync(inputFolder);

files.forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  console.log(`Checking: ${file} (${ext})`);

  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    sharp(path.join(inputFolder, file))
      .resize(1200) // resize width to 1200px, height auto
      .jpeg({ quality: 80 }) // convert to JPEG with 80% quality
      .toFile(path.join(outputFolder, file))
      .then(() => console.log(`✅ Optimized: ${file}`))
      .catch((err) => console.error(`❌ Error with ${file}:`, err));
  }
});
