const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "app", "components");

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let original = content;

  // Background replacements
  content = content.replace(
    /bg-slate-50 dark:bg-surface-alt(\/50)?/g,
    "bg-primary",
  );
  content = content.replace(/bg-slate-50 dark:bg-slate-800/g, "bg-surface-alt");
  content = content.replace(
    /bg-slate-200 dark:bg-slate-800/g,
    "bg-surface-alt",
  );
  content = content.replace(
    /bg-slate-100 dark:bg-slate-800/g,
    "bg-surface-alt",
  );
  content = content.replace(
    /bg-white\/50 dark:bg-slate-800\/50/g,
    "bg-surface/50",
  );
  content = content.replace(
    /bg-white\/60 dark:bg-slate-800\/50/g,
    "bg-surface/60",
  );

  content = content.replace(
    /border-slate-100 dark:border-slate-700/g,
    "border-white/10",
  );
  content = content.replace(
    /border-slate-200 dark:border-slate-700/g,
    "border-white/10",
  );
  content = content.replace(/bg-white dark:bg-slate-800/g, "bg-surface");

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
console.log("Done fixing remaining slate backgrounds!");
