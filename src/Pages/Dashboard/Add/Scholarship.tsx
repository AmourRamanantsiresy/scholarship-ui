import React, {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {Button, Col, Input, Row, Typography, Space, Select, DatePicker} from "antd";
import type {DatePickerProps} from 'antd/es/date-picker';
import {TInputHandlingScholarship, TScholarship} from "../types";
import {messages} from "../messages";
import httpClient from "../../../Utils/httpClient";
import {SelectRandom} from "./Selects";

const {Text} = Typography;

const scholarshipInitial: TScholarship = {
    duration: 0,
    description: '',
    registrationDeadline: '',
    amount: {id: -1},
    faculty: {id: -1},
    university: {id: -1},
}

const changeHandling = (state: [TScholarship, Dispatch<SetStateAction<TScholarship>>]): TInputHandlingScholarship => {
    const [scholarship, setScholarship] = state;

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setScholarship(e => ({...e, [event.target.name]: event.target.value}));
    }

    const selectChange = (id: number, name: string) => {
        setScholarship(e => ({...e, [name]: {id: id}}));
    }

    const dateChange = (event: DatePickerProps['value']) => {
        setScholarship(e => ({...e, registrationDeadline: (event || new Date()).toISOString()}))
    }

    const handleSend = () => {
        if (
            scholarship.description.length > 0
            && scholarship.faculty.id !== -1
            && scholarship.university.id !== -1
            && scholarship.duration !== 0
            && scholarship.amount.id !== -1
            && scholarship.registrationDeadline.length > 0
        ) {
            httpClient.put('/scholarship', [scholarship]).then(() => {
                messages.success();
                // setScholarship(scholarshipInitial);
            }).catch(() => {
                messages.server();
            })
        } else {
            messages.blank();
        }
    }

    return {inputChange, selectChange, handleSend, dateChange}
}

export const Scholarship: FC = () => {
    const [scholarship, setScholarship] = useState<TScholarship>(scholarshipInitial);
    const {selectChange, inputChange, dateChange, handleSend} = changeHandling([scholarship, setScholarship]);
    return (
        <Row
            align="middle"
            justify="center"
            style={{width: "100%", height: "100%"}}
        >
            <Col span={15}>
                <Space direction="vertical" size="large">
                    <Text>Scholarship</Text>
                    <Input
                        name="description"
                        onChange={inputChange}
                        placeholder="description"
                        value={scholarship.description}
                    />
                    <Input
                        name="duration"
                        type="number"
                        placeholder="duration"
                        onChange={inputChange}
                        value={scholarship.duration.toString()}
                    />
                    <DatePicker onChange={dateChange}/>
                    <SelectRandom resource="university" onChange={selectChange}/>
                    <SelectRandom resource="faculty" onChange={selectChange}/>
                    <SelectRandom resource="amount" onChange={selectChange}/>

                    <Button onClick={handleSend}>Add</Button>
                </Space>
            </Col>
        </Row>
    );
}