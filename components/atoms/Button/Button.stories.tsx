import Button from "./Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Atoms/Button",
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Button",
}


export const Light = Template.bind({});
Light.args = {
    buttoncolor: "light",
    children: "Button",
}

export const Dark = Template.bind({});
Dark.args = {
    buttoncolor: "dark",
    children: "Button",
}

export const Info = Template.bind({});
Info.args = {
    buttoncolor: "info",
    children: "Button",
}

export const Success = Template.bind({});
Success.args = {
    buttoncolor: "success",
    children: "Button",
}

export const Warning = Template.bind({});
Warning.args = {
    buttoncolor: "warning",
    children: "Button",
}

export const Error = Template.bind({});
Error.args = {
    buttoncolor: "error",
    children: "Button",
}

export const Warmgradient = Template.bind({});
Warmgradient.args = {
    buttoncolor: "warmgradient",
    children: "Button",
}

export const Techygradient = Template.bind({});
Techygradient.args = {
    buttoncolor: "techygradient",
    children: "Button",
}