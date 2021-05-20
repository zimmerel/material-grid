import { Story, Meta } from "@storybook/react";

import GridComponent, { GridProps } from "../GridComponent";
import { makeData } from "./mock-data";

const demoColumns = [
  { accessor: "name", Header: "Name" },
  { accessor: "due_date", Header: "Due Date" },
  { accessor: "is_recurring", Header: "Recurring" },
  { accessor: "category", Header: "Category" },
];

const demoData = makeData(
  {
    name: ({ name }) => name.findName(),
    due_date: ({ date }) => date.soon().toDateString(),
    is_recurring: ({ datatype }) => datatype.boolean().toString(),
    category: ({ random }) => random.word(),
  },
  20
);

export default {
  title: "Grid / Grid Component",
  component: GridComponent,
  args: {
    columns: demoColumns,
    data: demoData,
  },
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const Template: Story<GridProps> = (args) => (
  <div style={{ width: "100%", height: "500px" }}>
    <GridComponent {...args} />
  </div>
);

export const Base = Template.bind({});

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
