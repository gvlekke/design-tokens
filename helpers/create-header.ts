import { createTemplate } from "./create-template";

export function createHeader() {
  return createTemplate("../templates/theme-header.ejs")();
}
