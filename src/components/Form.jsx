import React, { useState } from "react";

export default function Form(props) {
    const [input, setInput] = useState("");

    function handelChange(e) {
        const value = e.target.value;
        setInput(value);
    }

    function handelSubmit(input) {
        props.updateItems((preVal) => {
            return [...preVal, input];
        });
        setInput("");
    }
    return (
        <div className="form">
            <input
                type="text"
                autoComplete="off"
                name="inputItem"
                value={input}
                onChange={handelChange}
              
            />
            <button
                onClick={() => {
                    handelSubmit(input);
                }}>
                <span>Add</span>
            </button>
        </div>
    );
}
