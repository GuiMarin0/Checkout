import * as React from "react"
import styled from "styled-components"
import Button from "../components/botao"
import ipag from "../images/ipag.svg"

const Global = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;    
  height: 100vh;        
  margin: 0;
`

const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: row;

  img{
    width: 80px;
    margin-left: 20px;
  }
`

const Texto = styled.p`
  font-family: sans-serif;
`

const IndexPage = () => {
  return (
    <Global>
      <ContainerTitulo>
        <Texto>Checkout IPag</Texto>
        <img src={ipag} />
      </ContainerTitulo>
      <Button texto="Continuar" width="60%" />
    </Global>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
