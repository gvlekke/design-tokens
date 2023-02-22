import { ColorFilterName } from "./colors/filters/color-filter";
import {colorTsFormatterName, colorTsTypesFormatterName } from "./colors/formatters/color-formatter-ts";

export default {
  transformGroup: "js",
  files: [
    {
      format: colorTsFormatterName,
      destination: "colors.ts",
      filter: ColorFilterName,
    },
    {
      format: colorTsTypesFormatterName,
      destination: "types/colors.ts",
      filter: ColorFilterName,
    },
  ]
}