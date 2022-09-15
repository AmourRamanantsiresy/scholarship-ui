import React, { FC, useEffect, useState } from 'react';
import { RestScholarship } from '../types';
import httpClient from '../../../Utils/httpClient';
import { Pagination, Layout, Table, Typography, Tag, Button, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { messages } from '../messages';
import {FileSearchOutlined} from '@ant-design/icons'

const { Content } = Layout;

const columns: ColumnsType<RestScholarship> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'registration_deadline',
    dataIndex: 'registration_deadline',
    key: 'registration_deadline',
    render: (value:string)=> {
        return (
            value === null ? <FileSearchOutlined /> : value
        );
    }
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    render: (value: string) => {
      let color = value === 'AVAILABLE' ? 'green' : 'volcano';
      return (
        <Tag color={color} key={value}>
          {value}
        </Tag>
      );
    },
  },
  {
    title: 'university',
    dataIndex: 'university',
    key: 'university',
  },
  {
    title: 'faculty',
    dataIndex: 'faculty',
    key: 'faculty',
  },
  {
    title: 'amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'country',
    dataIndex: 'country',
    key: 'country',
  },
];

export const ScholarshipTable: FC = () => {
  const [state, setState] = useState<{ data: RestScholarship[]; page: number; size: number; lastPage: number }>({
    data: [],
    page: 1,
    size: 5,
    lastPage: 5,
  });

  const update = () => {
    httpClient.get('/scholarship', { params: { page: state.page, size: state.size } }).then((res) => {
      setState((e) => ({ ...e, data: res.data.data, lastPage: res.data.lastPage }));
    });
  };

  const closeApp = (id: number) => {
    httpClient
      .put('/application/close', {id})
      .then((e) => {
        messages.success();
      });
    update();
  };

  const close = [
    {
      title: 'close',
      dataIndex: 'id',
      key: 'id',
      render: (value: number) => {
        return (
          <Button
            onClick={() => {
              closeApp(value);
            }}
          >
            close
          </Button>
        );
      },
    },
    ...columns,
  ];

  const changePage = (page: number, pageSize: number) => {
    setState((e) => ({ ...e, page }));
  };

  useEffect(() => {
    update();
  }, [state.data]);

  return (
    <Content style={{ padding: '2rem' }}>
      <Table dataSource={state.data} columns={close} pagination={false} />
      <Pagination pageSize={1} onChange={changePage} current={state.page} total={state.lastPage} />
    </Content>
  );
};
