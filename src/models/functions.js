import { deepReplace } from "src/utils/objects.js";

export const createInputFields = (model, overrides = []) => {
  const fields = model.map((field) => ({
    component: field.component,
    model: field.model,
    attrs: field.attrs,
    col: field.col,
  }));

  return overrides.reduce((fields, override) => {
    const index = fields.findIndex((field) => field.model === override.model);

    if (index === -1) return fields;

    fields[index] = deepReplace(fields[index], override);
    return fields;
  }, fields);
};

export const createTableColumns = (model) =>
  model.map((field) => ({
    name: true,
    label: field.attrs.label,
    align: field.align || "center",
    field: (row) => (field.field ? field.field(row) : row[field.model]),
    format: (val) => (field.format ? field.format(val) : val),
    sortable: field.sortable || true,
  }));
