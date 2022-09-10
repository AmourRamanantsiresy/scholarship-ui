import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Loading from "./Pages/Loading/Loading";
import Landing from "./Pages/Landing/Landing";

const App: FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Landing />}/>
        </Routes>
    )
}


export default App;