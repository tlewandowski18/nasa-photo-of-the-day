import React from "react"

function Apod(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.copyright}</h2>
            <h2>{props.date}</h2>
            <img src={props.url} />
            <p>{props.explanation}</p>
        </div>
    )
}

export default Apod