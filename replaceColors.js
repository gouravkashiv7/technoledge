const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "app", "components");

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let original = content;

  // For Framer Motion / SVG hardcoded colors
  content = content.replace(
    /color:\s*['"]#00d2aa['"]/g,
    'color: "var(--accent)"',
  );
  content = content.replace(
    /stopColor=['"]#00d2aa['"]/g,
    'stopColor="var(--accent)"',
  );
  content = content.replace(
    /backgroundColor:\s*['"]#00d2aa['"]/g,
    'backgroundColor: "var(--accent)"',
  );
  content = content.replace(
    /borderColor:\s*['"]#00d2aa['"]/g,
    'borderColor: "var(--accent)"',
  );

  // For Tailwind classes
  content = content.replace(/text-\[#00d2aa\]/g, "text-accent");
  content = content.replace(/bg-\[#00d2aa\]/g, "bg-accent");
  content = content.replace(/border-\[#00d2aa\]/g, "border-accent");
  content = content.replace(/via-\[#00d2aa\]/g, "via-accent");
  content = content.replace(/from-\[#00d2aa\]/g, "from-accent");
  content = content.replace(/to-\[#00d2aa\]/g, "to-accent");
  content = content.replace(
    /shadow-\[0_0_10px_#00d2aa,0_0_20px_#00d2aa\]/g,
    "shadow-neon",
  );
  content = content.replace(/shadow-\[\#00d2aa\]/g, "shadow-accent");
  content = content.replace(/shadow-\[\#00d2aa\]\/30/g, "shadow-accent/30");
  content = content.replace(/stroke-\[\#00d2aa\]/g, "stroke-accent");

  // Custom replacements
  content = content.replace(/glow-\[#00d2aa\]/g, "glow-accent");
  content = content.replace(/#00d2aa\/(\d+)/g, "accent/$1");

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
console.log("Done!");
