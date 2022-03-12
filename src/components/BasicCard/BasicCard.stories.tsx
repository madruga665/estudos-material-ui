import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import BasicCard from ".";
import BasicCardDocs from "./BasicCardDocs.mdx";

export default {
  title: "Components/BasicCard",
  component: BasicCard,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: BasicCardDocs
    }
  },
} as ComponentMeta<typeof BasicCard>;

const Template: ComponentStory<typeof BasicCard> = (args) => <BasicCard {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];
Default.args = {
  title: "Titulo do Card",
  description: "Descrição do Card",
};
