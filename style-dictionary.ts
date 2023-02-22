import StyleDictionary from "style-dictionary";
import {rmSync} from 'fs';
import baseConfigTs from "./base-transform-ts";
import baseConfigScss from "./base-transform-scss";
import { colorTsFormatter, colorTsTypeFormatter } from "./colors/formatters/color-formatter-ts";
import { ColorFilter } from "./colors/filters/color-filter";
import { colorScssFormatter } from "./colors/formatters/color-formatter-scss";

StyleDictionary.registerFilter(ColorFilter);

StyleDictionary.registerFormat(colorTsFormatter);
StyleDictionary.registerFormat(colorTsTypeFormatter);

StyleDictionary.registerFormat(colorScssFormatter);



function init() {
  // const source = ['./DesignSystemTokensType.json'];
  // const source = ['./DesignSystemTokensExpandedType.json'];
  const source = ['./design-tokens.tokens.json'];
  // const source = ['./input.json'];
  const output = './output/';

  rmSync(output, { recursive: true, force: true });

  StyleDictionary.extend({
    source,
    platforms: {
      "ts-dso-tokens": {
        ...baseConfigTs,
        buildPath: output,
      },
      "scss-dso-tokens": {
        ...baseConfigScss,
        buildPath: output,
      },
    },
  }).buildAllPlatforms();

  // platforms: {
  //     "ts-dso-tokens": {
  //       transformGroup: 'scss',
  //       files: [{
  //         destination: 'variable.scss',
  //         format: 'scss/variables'
  //       }],
  //       // ...baseConfig,
  //       buildPath: output,
  //     },
  //   },
}

init()