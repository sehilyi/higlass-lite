import { Mark } from "../../../gemini.schema";

import { GLYPH_GENE_ANNOTATAION } from "./gene-annotation";
import { GLYPH_GENE_ANNOTATAION_V2 } from "./gene-annotation-simple";
import { GLYPH_CYTOGENETIC_BAND } from "./glyph-cytogenetic-band";

export const GLYPH_PRESETS: {
  name: GLYPH_LOCAL_PRESET_TYPE;
  mark: Mark;
}[] = [
  {
    name: "gene-annotation",
    mark: GLYPH_GENE_ANNOTATAION,
  },
  {
    name: "gene-annotation-simple",
    mark: GLYPH_GENE_ANNOTATAION_V2,
  },
  {
    name: "cytogenetic-band",
    mark: GLYPH_CYTOGENETIC_BAND,
  },
];

export type GLYPH_LOCAL_PRESET_TYPE =
  | "gene-annotation-simple"
  | "gene-annotation"
  | "cytogenetic-band";

export type GLYPH_HIGLASS_PRESET_TYPE =
  | "gene-annotation-higlass"
  | "gemini-track-higlass"
  // remove ultimtely
  | "point-higlass"
  | "line-higlass"
  | "1d-heatmap-higlass"
  | "bar-higlass";

export const GLYPH_HIGLASS_PRESET_TYPES: GLYPH_HIGLASS_PRESET_TYPE[] = [
  "gene-annotation-higlass",
  "gemini-track-higlass",
  // remove ultimtely
  "point-higlass",
  "line-higlass",
  "1d-heatmap-higlass",
  "bar-higlass",
];

export const GLYPH_LOCAL_PRESET_TYPES: (
  | GLYPH_LOCAL_PRESET_TYPE
  | GLYPH_HIGLASS_PRESET_TYPE
)[] = ["gene-annotation-simple", "gene-annotation", "cytogenetic-band"];
