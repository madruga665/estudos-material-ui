import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from ".";
import HeaderDocs from './HeaderDocs.mdx';

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      page: HeaderDocs
    }
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({});
Default.args = {
  pageTitle: "Titulo da Pagina",
};
