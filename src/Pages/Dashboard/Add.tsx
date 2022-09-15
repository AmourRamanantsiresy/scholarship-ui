import React, { FC, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import { Card, Col, Modal, Row, Space, Typography } from 'antd';
import { TModal } from './types';
import { handleModal } from './utils';
import { Faculty } from './Add/Faculty';
import { Amount } from './Add/Amount';
import { Language } from './Add/Language';
import { StudyLevel } from './Add/StudyLevel';
import { Graduation } from './Add/Graduation';
import { Country } from './Add/Country';
import { University } from './Add/University';
import { Scholarship } from './Add/Scholarship';

const { Text } = Typography;

const CardCustoms: FC<{ title: string; open: () => void; label: string }> = ({ label, open, title }) => {
  return (
    <Col span={7}>
      <Card
        title={title}
        onClick={() => {
          open();
        }}
        hoverable={true}
      >
        <Row>
          <Text>{label}</Text>
        </Row>
      </Card>
    </Col>
  );
};

export const Add: FC = () => {
  const [modal, setModal] = useState<TModal>({ open: false, content: <p></p> });
  const { openModal, closeModal } = handleModal(setModal);

  return (
    <Content style={{ width: '100%', height: '100%' }} className="flex-center">
      <Modal open={modal.open} onCancel={closeModal}>
        {modal.content}
      </Modal>
      <Space style={{ width: '100%' }} direction="vertical" size="large">
        <Row justify="space-around" align="top">
          <CardCustoms title="Amount" open={() => openModal(<Amount />)} label="Add new amount" />
          <CardCustoms title="Faculty" open={() => openModal(<Faculty />)} label="Add new faculty" />
          <CardCustoms title="Language" open={() => openModal(<Language />)} label="Add new language" />
        </Row>
        <Row justify="space-around" align="middle">
          <CardCustoms title="Study Level" open={() => openModal(<StudyLevel />)} label="Add new study level" />
          <CardCustoms title="Graduation" open={() => openModal(<Graduation />)} label="Add new graduation" />
          <CardCustoms title="Country" open={() => openModal(<Country />)} label="Add new country" />
        </Row>
        <Row justify="space-around" align="middle">
          <CardCustoms title="University" open={() => openModal(<University />)} label="Add new university" />
          <CardCustoms title="Scholarship" open={() => openModal(<Scholarship />)} label="Add new scholarship" />
        </Row>
      </Space>
    </Content>
  );
};
