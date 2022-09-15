import {
    Button,
    Col,
    Input,
    Row,
    Select,
    Space,
    Typography,
} from "antd";
import {messages} from "../messages";
import {ChangeEvent, ReactNode, useEffect, useState} from "react";
import httpClient from "../../../Utils/httpClient";
import React from "react";
import {TUniversity, TInputHandling, TInputHandlingUniversity} from "../types";

const {Text} = Typography;
const {Option} = Select;


const operationHandling = (state: [TUniversity, React.Dispatch<React.SetStateAction<TUniversity>>]): TInputHandlingUniversity => {
    const [university, setUniversity] = state;
    const inputChange = (event: ChangeEvent<HTMLInputElement>) => setUniversity(e => ({...e, name: event.target.value}));
    const selectChange = (value: string) => {
        setUniversity(e => ({...e, selectedCountry: university.country[parseInt(value)]}));
    }

    const handleSend = () => {
        (university.name.length && (university.selectedCountry !== undefined) && (university.selectedCountry !== null))
            ? httpClient
                .put("/university", [{name: university.name, country: {id: university.selectedCountry.id}}])
                .then((res) => {
                    messages.success();
                    setUniversity(e => ({...e, name: ''}));
                })
                .catch((err) => {
                    messages.server();
                })
            : messages.blank();
    };
    return {inputChange, selectChange, handleSend};
}


export const University = () => {
    const [university, setUniversity] = useState<TUniversity>({name: '', country: []});

    useEffect(() => {
        httpClient.get("/country", {params: {page: -1}}).then(res => {
            setUniversity(e => ({...e, country: res.data.data}))
        })
    }, []);

    const {selectChange, inputChange, handleSend} = operationHandling([university, setUniversity]);

    return (
        <Row
            align="middle"
            justify="center"
            style={{width: "100%", height: "100%"}}
        >
            <Col span={15}>
                <Space direction="vertical" size="large">
                    <Text>University</Text>
                    <Input
                        value={university.name}
                        onChange={inputChange}
                        placeholder="University"
                    />

                    <Select
                        allowClear
                        style={{
                            width: "100%",
                        }}
                        placeholder="Select the country"
                        onChange={selectChange}
                    >
                        {university.country.map((e, k) => <Option key={e.name} value={k}>{e.name || ''}</Option>)}
                    </Select>

                    <Button onClick={handleSend}>Add</Button>
                </Space>
            </Col>
        </Row>
    );
};

export const a = 0;


