import { DatePickerProps } from "antd/es/date-picker";
import { ChangeEvent } from "react";

export type TCandidate = {
    lastName: string;
    firstName: string;
    email: string;
    schoolOrigin: string;
    about: string;
    phoneNumber: string;
    country: {id: number}
    birthDate: string;
    credentials: {id: number}
    studyLevel: {id: number}
}

export type THandlingChangeCandidate = {
    inputChange: (e: ChangeEvent<HTMLInputElement>)=> void;
    selectChange: (value: number, key: string)=> void;
    save: ()=> void;
    dateChange: (e: DatePickerProps['value'])=> void
}