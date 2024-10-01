import * as React from "react"
import styled from "styled-components"

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
    margin-bottom: 15px;
`

const Preco = styled.h3`
    margin: 0;
    font-family: sans-serif;
    color: #007bff;
    font-size: 30px;
`

const DescricaoSimples = ({ Imagem, Nome, Valor }) => {
    return (
        <ContainerCarrinho>
            <ImagemItem src={Imagem} alt="imagem do produto da compra" />
            <ContainerInfos>
                <TituloItem>{Nome}</TituloItem>
                <Preco>R$ {Valor}</Preco>
            </ContainerInfos>
        </ContainerCarrinho>
    )
}

export default DescricaoSimples