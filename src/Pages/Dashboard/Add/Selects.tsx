import React, {FC, useEffect, useState} from "react";
import {Select} from "antd";
import httpClient from "../../../Utils/httpClient";

const {Option} = Select;

export const SelectRandom: FC<{ onChange: (id: number, name: string) => void, resource: string }> = ({
                                                                                                         onChange,
                                                                                                         resource
                                                                                                     }) => {
    const [state, setState] = useState<{ id: number, name: string, amount: number }[]>([]);

    useEffect(() => {
        httpClient.get("/" + resource).then(res => setState(res.data.data))
    }, []);

    return (
        <Select
            allowClear
            style={{
                width: "100%",
            }}
            onChange={(e) => {
                onChange(parseInt(e), resource)
            }}
            placeholder={"Select the " + resource}
        >
            {state.map((e, k) =>
                <Option key={(e.name || e.amount.toString()) + e.id}
                        value={e.id}>
                    {(e.name || e.amount.toString()) || ''}
                </Option>)}
        </Select>
    )
}
