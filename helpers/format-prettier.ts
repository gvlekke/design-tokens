import prettier from "prettier";

export function formatPettierTs(input: string) {
  return prettier.format(input, {
    parser: "typescript",
  });
}

export function formatPettierScss(input: string) {
  return prettier.format(input, {
    parser: "scss",
  });
}


