import React from "react";
import Item from "./Item";

export default function List(props) {
    function deleteItem(itemId) {
        props.setItems((preVal) => {
            return preVal.filter(
                (val, index) => parseInt(index) !== parseInt(itemId)
            );
        });
    }
    return (
        <ul>
            {props.Items.map((item, index) => (
                <Item
                    key={index}
                    id={index}
                    itemName={item}
                    checked={deleteItem}
                />
            ))}
        </ul>
    );
}
