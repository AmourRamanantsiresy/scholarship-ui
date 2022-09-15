import { Button, Col, DatePicker, Form, Input, Layout, Row, Typography } from 'antd';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectRandom } from '../Dashboard/Add/Selects';
import { TCandidate } from './types';
import {changeHandling, initialCandidate} from './utils';

const { Content } = Layout;
const { Item } = Form;
const {Text, Title} = Typography;

const Candidate: FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<TCandidate>(initialCandidate)
    const {inputChange, save, selectChange, dateChange} = changeHandling([state, setState], navigate);


  return (
    <Layout className="full flex-center">
      <Content  className="full flex-center flex-column">
        <Row
          align="middle"
          justify="space-around"
          style={{
            width: '60vw',
            height: '60vh',
            boxShadow: '1px 1px 10px rgba(0,0,0,0.2), -1px -1px 10px rgba(0,0,0,0.2)',
          }}
        >
          <Col span={24}>
            <Title style={{margin: "0.5rem 0 0 1rem"}}>Information</Title>
          </Col>
          <Col span={11}>
            <Input onChange={inputChange} className='mt-1' name="lastName" placeholder="lastName" />
            <Input onChange={inputChange} className='mt-1' name="firstName" placeholder="firstName" />
            <Input onChange={inputChange} className='mt-1' name="email" placeholder="email" />
            <Input onChange={inputChange} className='mt-1' name="schoolOrigin" placeholder="schoolOrigin" />
            <Input onChange={inputChange} className='mt-1' name="about" placeholder="about" />
          </Col>
          <Col span={11}>
            <DatePicker className='mt-1' onChange={dateChange}/>
            <SelectRandom className='mt-1' onChange={(k, e)=> selectChange(k, 'studyLevel')} resource="study-level"/>
            <SelectRandom className='mt-1' onChange={selectChange} resource="country"/>
            <Input onChange={inputChange} className='mt-1 mb-2' name="phoneNumber" placeholder="phoneNumber" />
          </Col>
        </Row>
        <Button
          style={{ width: '100%', marginBottom: '1rem' }}
          type="primary"
          className="login-form-button"
          onClick={save}
        >
          Send
        </Button>
      </Content>
    </Layout>
  );
};

export default Candidate;
