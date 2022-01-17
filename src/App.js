import Intro from "./components/Intro/Intro";
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import dataJson from "../src/data/data.json"
function App() {

    // https://api.first.org/data/v1/countries"
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch("https://api.first.org/data/v1/countries", {mode: 'cors', credentials: "include"})
        //     .then((result) => {
        //         console.log(result.json(), result)
        //         return result.json()
        //     })
        //     .then(final => {
        //         console.log(final)
        //         setData(final)
        //     })
        setData(dataJson)
    }, [])
    console.log(data)
    return (
        <div className="App">
            <Intro/>
            <Form data={dataJson}/>
        </div>
    );
}

export default App;
