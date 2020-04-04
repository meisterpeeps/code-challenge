import React from "react"

export function Categories() {
    return(
        <>
        <h4 className="m-text14 p-b-7"> Categories </h4>

        <ul className="p-b-54">
            <li className="p-t-4">
                <a href="#" className="s-text13 active1">
                    All
                </a>
            </li>

            <li className="p-t-4">
                <a href="#" className="s-text13">
                    Women
                </a>
            </li>

            <li className="p-t-4">
                <a href="#" className="s-text13">
                    Men
                </a>
            </li>

            <li className="p-t-4">
                <a href="#" className="s-text13">
                    Kids
                </a>
            </li>

            <li className="p-t-4">
                <a href="#" className="s-text13">
                    Accesories
                </a>
            </li>
        </ul>
        </>
    )
}