import Text from "./Text";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Text",
    component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args: any) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Text",
}

export const Mont = Template.bind({});
Mont.args = {
    mont: true,
    children: "Text",
}

export const Underline = Template.bind({});
Underline.args = {
    underline: true,
    children: "Text",
}

export const Linethrough = Template.bind({});
Linethrough.args = {
    linethrough: true,
    children: "Text",
}

export const Light = Template.bind({});
Light.args = {
    textcolor: "light",
    children: "Text",
}

export const Dark = Template.bind({});
Dark.args = {
    textcolor: "dark",
    children: "Text",
}

export const Info = Template.bind({});
Info.args = {
    textcolor: "info",
    children: "Text",
}

export const Success = Template.bind({});
Success.args = {
    textcolor: "success",
    children: "Text",
}

export const Warning = Template.bind({});
Warning.args = {
    textcolor: "warning",
    children: "Text",
}

export const Error = Template.bind({});
Error.args = {
    textcolor: "error",
    children: "Text",
}

export const Warmgradient = Template.bind({});
Warmgradient.args = {
    gradient: "warmgradient",
    children: "Text",
}

export const Techygradient = Template.bind({});
Techygradient.args = {
    gradient: "techygradient",
    children: "Text",
}