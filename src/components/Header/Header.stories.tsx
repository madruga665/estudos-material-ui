import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({});
Default.args = {
  pageTitle: "Titulo da Pagina",
};
