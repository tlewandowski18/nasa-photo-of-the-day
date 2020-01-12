import React from "react"
import styled from "styled-components"

const Desc = styled.p`
    width: 75%;
    height: 75%;
    margin: 0 auto;
    text-align: center;
    padding: 2%;
    font-size: 1.2rem
`

const SpaceImg = styled.img`    
    width: 60%;
    border-radius: 20px;
`
const Subheading = styled.h2`
    font-size: 2.2rem;
    color: ${props => props.photographer ? "orange" : "whitesmoke"};
`

const Heading = styled.h1`
    font-size: 2.6rem;
    color: blue;
`
function Apod(props) {
    return (
        <div>
            <Heading>{props.title}</Heading>
            <Subheading photographer>{props.copyright}</Subheading>
            <Subheading>{props.date}</Subheading>
            <SpaceImg src={props.url} />
            <Desc>{props.explanation}</Desc>
        </div>
    )
}

export default Apod