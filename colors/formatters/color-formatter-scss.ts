import { Named, Format, Filter, TransformedToken } from "style-dictionary";
import {kebabCase} from "lodash";

import { createTemplate } from "../../helpers/create-template";
import { formatPettierScss } from "../../helpers/format-prettier";
import { createHeader } from "../../helpers/create-header";

export const colorScssFormatterName = "scss/colorTokens";

export const colorScssFormatter: Named<Format> = {
  name: colorScssFormatterName,
  formatter({ dictionary }) {
    return formatPettierScss(
      createTemplate("../colors/templates/color-scss.ejs")({
        tokens: cleanColorTokens(dictionary.allTokens),
        header: createHeader(),
      })
    );
  },
};

function cleanColorTokens(tokens: TransformedToken[]) {
  return tokens.map((token) => ({
    value: typeof token.value === "string" ? token.value : token.value.color,
    name: kebabCase(
      token.name.replace("Colors", "").replace("BorderTokens", "border")
    ),
  }));
}
