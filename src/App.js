import Intro from "./components/Intro/Intro";
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import dataJson from "../src/data/data.json"
import ScrollOut from "scroll-out";
function App() {

    // https://api.first.org/data/v1/countries"
    // const [data, setData] = useState({})
    useEffect(() => {
        ScrollOut({
            /* options */
        });
    }, [])

    return (
        <div className="App">
            <Intro/>
            <Form data={dataJson}/>
        </div>
    );
}

export default App;
