import path from "path";
import fs from "fs";

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  // fetch md in static folder
  const markdownFileContents = fs.readFileSync(
    path.join(process.cwd(), "static", "content/terms.md"),
    "utf8"
  );
  return {
    terms: markdownFileContents,
  };
}
