const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "app", "components");

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let original = content;

  // For Tailwind classes containing emerald combined with accent
  content = content.replace(/to-emerald-\d00/g, "to-accent-dark");
  content = content.replace(/hover:bg-emerald-\d00/g, "hover:bg-accent-dark");
  content = content.replace(/text-emerald-\d00/g, "text-accent-dark");
  content = content.replace(/bg-emerald-400\/10/g, "bg-accent-dark/10");
  content = content.replace(/dark:bg-emerald-500\/5/g, "dark:bg-accent-dark/5");
  content = content.replace(/bg-emerald-400\/30/g, "bg-accent-dark/30");
  content = content.replace(/bg-emerald-300\/20/g, "bg-accent-dark/20");
  content = content.replace(/bg-emerald-400/g, "bg-accent-dark");
  content = content.replace(/dark:to-emerald-\d00/g, "dark:to-accent-dark");

  // Specific hero section glow which had rgba hardcoded
  content = content.replace(
    /shadow-\[0_0_60px_rgba\(0,210,170,0\.6\)]/g,
    "shadow-accent-lg",
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated: ${path.basename(filePath)}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith(".tsx")) {
      replaceInFile(fullPath);
    }
  }
}

walk(dir);
console.log("Done fixing emeralds!");
