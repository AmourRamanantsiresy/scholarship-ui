import {createContext} from "react";
import {TContext} from "./types";

export const context: TContext = {
    scrollHandling: [0, n => {}]
}

export const APP_CONTEXT = createContext(context);