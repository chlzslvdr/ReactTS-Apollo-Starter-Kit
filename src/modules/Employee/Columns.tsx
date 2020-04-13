import React from 'react';
import { ColumnProps } from 'antd/lib/table';

const Columns: ColumnProps<any>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Job Area',
    dataIndex: 'jobArea',
    key: 'jobArea',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Job Title',
    dataIndex: 'jobTitle',
    key: 'jobTitle',
    render: (text) => <span>{text}</span>,
  },
];

export default Columns;
