import { QInput, QSelect } from "quasar";
import { createInputFields } from "./functions";

const model = [
  {
    component: QInput,
    model: "last_name",
    attrs: {
      label: "Last Name",
    },
    col: 6,
  },
  {
    component: QInput,
    model: "first_name",
    attrs: {
      label: "First Name",
    },
    col: 6,
  },
  {
    component: QInput,
    model: "middle_name",
    attrs: {
      label: "Middle Name",
    },
    col: 6,
  },
  {
    component: QSelect,
    model: "suffix_name",
    attrs: {
      label: "Suffix Name",
      options: ["Jr.", "Sr.", "I", "II"],
    },
    col: 6,
  },
];

export const createFields = () => createInputFields(model);
