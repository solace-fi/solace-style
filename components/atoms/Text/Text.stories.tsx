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

export const InfoLightMode = Template.bind({});
InfoLightMode.args = {
    textcolor: "info",
    children: "Text",
}

export const SuccessLightMode = Template.bind({});
SuccessLightMode.args = {
    textcolor: "success",
    children: "Text",
}

export const WarningLightMode = Template.bind({});
WarningLightMode.args = {
    textcolor: "warning",
    children: "Text",
}

export const ErrorLightMode = Template.bind({});
ErrorLightMode.args = {
    textcolor: "error",
    children: "Text",
}

export const InfoDarkMode = Template.bind({});
InfoDarkMode.args = {
    textcolor: "info",
    children: "Text",
    darkmode: true
}

export const SuccessDarkMode = Template.bind({});
SuccessDarkMode.args = {
    textcolor: "success",
    children: "Text",
    darkmode: true
}

export const WarningDarkMode = Template.bind({});
WarningDarkMode.args = {
    textcolor: "warning",
    children: "Text",
    darkmode: true
}

export const ErrorDarkMode = Template.bind({});
ErrorDarkMode.args = {
    textcolor: "error",
    children: "Text",
    darkmode: true
}

export const Warmgradient = Template.bind({});
Warmgradient.args = {
    textcolor: "warmgradient",
    children: "Text",
}

export const Techygradient = Template.bind({});
Techygradient.args = {
    textcolor: "techygradient",
    children: "Text",
}