import React from 'react'
import { Flex } from "./Flex";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title : "Atoms/Flex",
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args: any) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
    alignitemsCenter: true,
    children: <>
        <Text>Flex</Text>
        <Button>Flex Button</Button>
    </>,
}
Default.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/LfJw8Lj4LzYqBt8ZK8ZqZg/Flex?node-id=0%3A1",
    }
}

export const Column = Template.bind({});
Column.args = {
    alignitemsCenter: true,
    col: true,
    children: <>
        <Text>Flex</Text>
        <Button>Flex Button</Button>
    </>,
}

export const RowReverse = Template.bind({});
RowReverse.args = {
    alignitemsCenter: true,
    rowReverse: true,
    children: <>
        <Text>Flex</Text>
        <Button>Flex Button</Button>
    </>,
}

export const ColumnReverse = Template.bind({});
ColumnReverse.args = {
    alignitemsCenter: true,
    colReverse: true,
    children: <>
        <Text>Flex</Text>
        <Button>Flex Button</Button>
    </>,
}