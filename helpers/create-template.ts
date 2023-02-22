import { readFileSync } from "fs";
import { join } from "path";

import ejs from "ejs";

export function createTemplate(path: string) {
  return ejs.compile(readFileSync(join(__dirname, path)).toString());
}
