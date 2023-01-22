import React from "react";
import { useState } from "react";
import Picture from "../picture/picture";

const Dropdown = () => {

    const [dropdown, setDropDownValue] = useState('')
    const getDropDownValue = (event) => {
        setDropDownValue(event.target.value.trim().toLowerCase())
    }

    return (
        <section>
            <div>
                <select onChange={getDropDownValue}>
                    <option value=''>Random</option>
                    <option value='Beagle'>Beagle</option>
                    <option value='Boxer'>Boxer</option>
                    <option value='Dalmatian'>Dalmatian</option>
                    <option value='Husky'>Husky</option>
                </select>
            </div>

            <div><Picture breed={dropdown} /></div>
        </section>
    )

}

export default Dropdown