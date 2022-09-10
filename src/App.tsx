import {FC, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Loading from "./Pages/Loading/Loading";
import Landing from "./Pages/Landing/Landing";
import {APP_CONTEXT, context} from "./Provider/Context/context";
import {TContext} from "./Provider/Context/types";
import {useScroll} from "./Utils/Hooks/useScroll";

const App: FC = () => {
    const scrollHandling = useState(0);
    const appContext: TContext = {...context, scrollHandling};


    useEffect(() => {
        useScroll(scrollHandling);
    });


    return (
        <APP_CONTEXT.Provider value={appContext}>
            <Routes>
                <Route path="/" element={<Landing/>}/>
            </Routes>
        </APP_CONTEXT.Provider>
    )
}


export default App;