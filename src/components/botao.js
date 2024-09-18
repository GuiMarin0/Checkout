import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

const Container = styled(Link)`
    width:${props => props.width ? props.width : "100%"};
    height: 50px;
    border-radius: 15px;
    background-color: #1a7c3e;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-family: sans-serif;
`

const Texto = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
`

const Button = ({ width, texto }) => {
    return (
        <Container to="/link" width={width}>
            <Texto>{texto}</Texto>
        </Container>
    )
}

export default Button