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
import {TCountry, TInputHandling} from "../types";

const {Text} = Typography;
const {Option} = Select;


const operationHandling = (state: [TCountry, React.Dispatch<React.SetStateAction<TCountry>>]): TInputHandling => {
    const [country, setCountry] = state;
    const inputChange = (event: ChangeEvent<HTMLInputElement>) => setCountry(e => ({...e, name: event.target.value}));
    const selectChange = (values: string[]) => {
        const selected = country.languages.filter((e) => values.includes(e.name || 'none'));
        setCountry(e => ({...e, selectedLanguages: selected}));
    }

    const handleSend = () => {
        (country.name.length && (country.selectedLanguages?.length || 0) > 0)
            ? httpClient
                .put("/country", [{name: country.name, languages: country.selectedLanguages}])
                .then((res) => {
                    messages.success();
                    setCountry(e => ({...e, name: '', selectedLanguages: []}));
                })
                .catch((err) => {
                    messages.server();
                })
            : messages.blank();
    };
    return {inputChange, selectChange, handleSend};
}


export const Country = () => {
    const [country, setCountry] = useState<TCountry>({name: '', languages: []});

    useEffect(() => {
        httpClient.get("/language", {params: {page: -1}}).then(res => {
            setCountry(e => ({...e, languages: res.data.data}))
        })
    }, []);

    const {selectChange, inputChange, handleSend} = operationHandling([country, setCountry]);
    const value = country.selectedLanguages?.map(e=> e.name || "") || [];

    return (
        <Row
            align="middle"
            justify="center"
            style={{width: "100%", height: "100%"}}
        >
            <Col span={15}>
                <Space direction="vertical" size="large">
                    <Text>Country</Text>
                    <Input
                        value={country.name}
                        onChange={inputChange}
                        placeholder="Country"
                    />

                    <Select
                        mode="multiple"
                        allowClear
                        style={{
                            width: "100%",
                        }}
                        value={value}
                        placeholder="Please select"
                        onChange={selectChange}
                    >
                        {country.languages.map(e => <Option key={e.name} value={e.name}>{e.name || ''}</Option>)}
                    </Select>

                    <Button onClick={handleSend}>Add</Button>
                </Space>
            </Col>
        </Row>
    );
};

export const a = 0;


