import { DatePickerProps } from "antd/es/date-picker";
import {ChangeEvent, Dispatch, SetStateAction,} from "react";
import httpClient from "../../Utils/httpClient";
import {Scholarship} from "../Dashboard/Add/Scholarship";
import {messages} from "../Dashboard/messages";
import {TCandidate, THandlingChangeCandidate} from "./types";

export const initialCandidate: TCandidate = {
    email: '',
    about: '',
    birthDate: '',
    lastName: '',
    firstName: '',
    phoneNumber: '',
    schoolOrigin: '',
    country: {
        id: -1
    },
    studyLevel: {
        id: -1
    },
    credentials: {
        id: -1
    },
}


export const candidateValidator = (c : TCandidate) => {
    const conditions: boolean = Object.values(c).includes('');
    return true;
}

export const changeHandling = (values : [
    TCandidate,
    Dispatch < SetStateAction < TCandidate >>,
], navigate : (path : string) => void) : THandlingChangeCandidate => {
    const [state, setState] = values;

    const inputChange = (event : ChangeEvent < HTMLInputElement >) => {
        setState(e => ({
            ...e,
            credentials: {
                id: parseInt(localStorage.getItem("userId") || '-1')
            },
            [event.target.name]: event.target.value,
        }));
    }

    const selectChange = (value : number, key : string) => {
        setState(e => ({
            ...e,
            [key]: {
                id: value
            },
        }));
    }

    const dateChange = (date: DatePickerProps['value']) => {
        setState(e=> ({...e, birthDate: (date || new Date()).toISOString()}))
    }

    const save = () => {
        if (candidateValidator(state)) {
            httpClient.put("candidate", [state]).then(() => {
                messages.success();
                localStorage.setItem("user", JSON.stringify(state));
                navigate("/home")
            }).catch(() => {
                messages.server()
            })
        } else {
            messages.blank()
        }
    }

    return {inputChange, selectChange, save, dateChange}
}
