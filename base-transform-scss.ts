import { ColorFilterName } from "./colors/filters/color-filter";
import {colorScssFormatterName } from "./colors/formatters/color-formatter-scss";

export default {
  transformGroup: "scss",
  files: [
    {
      format: colorScssFormatterName,
      destination: "colors.scss",
      filter: ColorFilterName,
    }
  ]
}

