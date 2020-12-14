import React, { useState } from "react";

export default function Item(props) {
    const [isDone, setIsDone] = useState(false);
    function handelClick(e) {
        setIsDone((preState) => !preState);
        props.checked(e.target.id);
    }

    return (
        <li
            className={isDone ? "strikeThrough" : "none"}
            onClick={handelClick}
            id={props.id}>
            {props.itemName}
        </li>
    );
}
