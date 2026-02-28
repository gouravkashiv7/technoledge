const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "app", "components");

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let original = content;

  // Background replacements
  content = content.replace(/bg-white dark:bg-\[#0f172a\]/g, "bg-primary");
  content = content.replace(
    /bg-slate-100 dark:bg-slate-900/g,
    "bg-surface-alt",
  );

  // Specific dark section backgrounds
  content = content.replace(/bg-slate-900/g, "bg-surface-alt");
  content = content.replace(/border-slate-800/g, "border-white/10");

  // Text color replacements
  content = content.replace(
    /text-slate-800 dark:text-white/g,
    "text-text-primary",
  );
  content = content.replace(
    /text-slate-900 dark:text-white/g,
    "text-text-primary",
  );
  content = content.replace(
    /text-slate-600 dark:text-slate-400/g,
    "text-text-secondary",
  );
  content = content.replace(
    /text-slate-700 dark:text-slate-300/g,
    "text-text-secondary",
  );
  content = content.replace(
    /text-slate-500 dark:text-slate-400/g,
    "text-text-muted",
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
console.log("Done fixing backgrounds and text colors!");
