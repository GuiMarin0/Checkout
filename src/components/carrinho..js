import * as React from "react"
import styled from "styled-components"
import IconeCompra from "../images/gatsby.png"

const ContainerCarrinho = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
`

const ImagemItem = styled.img`
    width: 15%;
    aspect-ratio: 1 / 1;
    border: 1px solid gray;
    border-radius: 10px;
`

const ContainerInfos = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const TituloItem = styled.h2`
    margin: 0;
    font-family: sans-serif;
`

const AutorItem = styled.span`
    font-family: sans-serif;
    margin-bottom: 10px;
`

const PrecoPrazo = styled.h3`
    margin: 0;
    font-family: sans-serif;
    color: #007bff;
    font-size: 30px;
`

const PrecoVista = styled.span`
    font-family: sans-serif;
    color: #007bff;
`

const Carrinho = () => {
    return (
        <ContainerCarrinho>
            <ImagemItem src={IconeCompra} alt="imagem do produto da compra" />
            <ContainerInfos>
                <TituloItem>Curso Gatsby - 2024</TituloItem>
                <AutorItem>Autor: Professor Godofredo Jefferosn</AutorItem>
                <PrecoPrazo>12 x de R$ 10,62</PrecoPrazo>
                <PrecoVista>Ou R$ 120,00 à vista</PrecoVista>
            </ContainerInfos>
        </ContainerCarrinho>
    )
}

export default Carrinho