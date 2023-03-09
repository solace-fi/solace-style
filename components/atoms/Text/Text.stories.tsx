import React from 'react'
import { Text } from "./Text";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs'

export default {
    title: "Atoms/Text",
    component: Text,
    decorators: [withDesign],
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args: any) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Text",
}

// Default.parameters = {
//     design: {
//         type: 'figma',
//         url: "",
//     }
// }

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

export const Light = Template.bind({});
Light.args = {
    light: true,
    children: "Text",
}

export const Dark = Template.bind({});
Dark.args = {
    dark: true,
    children: "Text",
}

export const InfoLightMode = Template.bind({});
InfoLightMode.args = {
    info: true,
    children: "Text",
}

export const SuccessLightMode = Template.bind({});
SuccessLightMode.args = {
    success: true,
    children: "Text",
}

export const WarningLightMode = Template.bind({});
WarningLightMode.args = {
    warning: true,
    children: "Text",
}

export const ErrorLightMode = Template.bind({});
ErrorLightMode.args = {
    error: true,
    children: "Text",
}

export const InfoDarkMode = Template.bind({});
InfoDarkMode.args = {
    info: true,
    children: "Text",
    darkmode: true
}

export const SuccessDarkMode = Template.bind({});
SuccessDarkMode.args = {
    success: true,
    children: "Text",
    darkmode: true
}

export const WarningDarkMode = Template.bind({});
WarningDarkMode.args = {
    warning: true,
    children: "Text",
    darkmode: true
}

export const ErrorDarkMode = Template.bind({});
ErrorDarkMode.args = {
    error: true,
    children: "Text",
    darkmode: true
}

export const Warmgradient = Template.bind({});
Warmgradient.args = {
    warmgradient: true,
    children: "Text",
}

export const Techygradient = Template.bind({});
Techygradient.args = {
    techygradient: true,
    children: "Text",
}