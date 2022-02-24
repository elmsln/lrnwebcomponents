import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean,
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";
import { EndUserDoc } from "./end-user-doc.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "User|EndUserDoc",
  component: "end-user-doc",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const EndUserDocStory = () => {
  return utils.makeElementFromClass(EndUserDoc);
};
