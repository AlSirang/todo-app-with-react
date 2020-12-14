import React, { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
import List from "./List";
function App() {
    const [Items, setItems] = useState([]);

    return (
        <div className="container">
            <Heading />
            <Form updateItems={setItems} />
            <List setItems={setItems} Items={Items} />
        </div>
    );
}

export default App;
