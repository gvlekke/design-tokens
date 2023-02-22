import { Named, Filter } from "style-dictionary";

export const ColorFilterName = "isColor";

export const ColorFilter: Named<Filter> = {
  name: ColorFilterName,
  matcher(token) {
    return token.type === "color" || token.type === "border";
  },
};