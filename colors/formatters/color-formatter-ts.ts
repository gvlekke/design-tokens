import { Named, Format, Filter, TransformedToken } from "style-dictionary";
import {camelCase} from "lodash";

import { createTemplate } from "../../helpers/create-template";
import { formatPettierTs } from "../../helpers/format-prettier";
import { createHeader } from "../../helpers/create-header";

export const colorTsFormatterName = "ts/colorTokens";
export const colorTsTypesFormatterName = "ts/types/colorTokens";

export const colorTsFormatter: Named<Format> = {
  name: colorTsFormatterName,
  formatter({ dictionary }) {
    return formatPettierTs(
      createTemplate("../colors/templates/color-ts.ejs")({
        tokens: cleanColorTokens(dictionary.allTokens),
        header: createHeader(),
      })
    );
  },
};

export const colorTsTypeFormatter: Named<Format> = {
  name: colorTsTypesFormatterName,
  formatter({ dictionary }) {
    return formatPettierTs(
      createTemplate("../colors/templates/color-ts.types.ejs")({
        tokens: cleanColorTokens(dictionary.allTokens),
        header: createHeader(),
      })
    );
  },
};

function cleanColorTokens(tokens: TransformedToken[]) {
  return tokens.map((token) => ({
    value: typeof token.value === "string" ? token.value : token.value.color,
    name: camelCase(
      token.name.replace("Colors", "").replace("BorderTokens", "border")
    ),
  }));
}
