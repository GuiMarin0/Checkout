import * as React from "react"
import styled from "styled-components"

const HeaderContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 50%;
    padding: 20px;
    border-radius:10px;
    margin-bottom: 30px;
    height: 100px;
    border: 2px solid blue;
    background: #663399;
`

const HeaderLogo = styled.img`
`

const HeaderNome = styled.h1`
    font-family: sans-serif;
    color: #000;
    margin: 0;
    text-align: end;
    padding: 0px 10px;
`

const LogoAndNome = ({ logoPath, companyName }) => {

    return (
        <>
            <HeaderContent>
                {logoPath && <HeaderLogo src={logoPath} />}
                {companyName && <HeaderNome>{companyName}</HeaderNome>}
            </HeaderContent>
        </>
    )
}

export default LogoAndNome