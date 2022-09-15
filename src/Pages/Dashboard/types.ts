import {ChangeEvent, ReactNode} from "react";
import type {DatePickerProps} from "antd/es/date-picker";

export enum DashboardMenu {
    ADD = "add",
    CANDIDATE = "candidate",
    SCHOLARSHIP = "scholarship",
}

export type TDashboardMenu = { status: boolean; currentMenu: DashboardMenu };

type F<T> = (e: T) => void;
type SF = () => void;

export type THandleMenu = {
    toggleMenu: SF;
    switchMenu: F<DashboardMenu>;
};

export type THandleModal = {
    openModal: F<ReactNode>;
    closeModal: SF;
};

export type TButtonMenu = {
    label: string;
    onClick: SF;
};

export type TMessages = {
    success: SF;
    blank: SF;
    network: SF;
    server: SF;
    confirm: SF;
};

export type TModal = { open: boolean; content: ReactNode };

export type TCountry = {
    name: string;
    languages: { id: number, name?: string }[],
    selectedLanguages?: { id: number, name?: string }[]
}

export type TUniversity = {
    name: string;
    country: { id: number, name?: string, languages?: string[]}[],
    selectedCountry?: { id: number, name?: string, languages?: string[]}
}
type TId = {id?: number};
type TTId = TId;

export type TScholarship = {
    id?: number;
    description: string;
    duration: number;
    registrationDeadline: string;
    status?: "AVAILABLE" | "UNAVAILABLE";
    university: TTId;
    faculty: TTId;
    amount: TId;
}

export type RestScholarship = {
    id?:number;
    description?:string;
    duration?: number;
    registration_deadline?: string;
    status?: "AVAILABLE" | "UNAVAILABLE";
    university?: string;
    faculty?: string;
    amount?: number;
    country?: string;
    languages?: string[];
}

export type TInputHandling = { inputChange: F<ChangeEvent<HTMLInputElement>>, selectChange: F<string[]>, handleSend: SF }
export type TInputHandlingScholarship = { dateChange: F<DatePickerProps['value']>, inputChange: F<ChangeEvent<HTMLInputElement>>, selectChange: (id: number, name: string)=> void, handleSend: SF }
export type TInputHandlingUniversity = { inputChange: F<ChangeEvent<HTMLInputElement>>, selectChange: F<string>, handleSend: SF }