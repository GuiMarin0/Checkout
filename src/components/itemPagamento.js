import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    width: 20%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight:${(props) => {
        if (props.selected === props.value) return '600'
    }} ;
    border:${(props) => {
        if (props.selected === props.value) return '3px'
        return '1px';
    }}, solid, ${(props) => {
        if (props.selected === props.value && props.value === "cartao") return '#007bff';
        if (props.selected === props.value && props.value === "pix") return '#1a7c3e';
        if (props.selected === props.value && props.value === "outros") return '#000000';
        return '#ccc'; // Cinza para não selecionado
    }};
    border-radius: 5px;
    padding: 20px;
    margin-right: 20px;
    transition: border-color 0.3s;
    cursor: pointer;
    color: ${(props) => {
        if (props.selected === props.value && props.value === "cartao") return '#007bff';
        if (props.selected === props.value && props.value === "pix") return '#1a7c3e'
        if (props.selected === props.value && props.value === "outros") return '#000000';
        return '#ccc'; // Cinza para não selecionado
    }};
`
const Image = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 8px;
`

const Text = styled.span`
    font-size: 16px;
    text-align: start;
    font-family: sans-serif;
`


const ItemPagamento = ({ selectedItem, imageSrc, label, value, onClick }) => {
    return (
        <Container selected={selectedItem} value={value} onClick={onClick}>
            <Image src={imageSrc} alt={label} />
            <Text selected={selectedItem}>{label}</Text>
        </Container>
    )
}

export default ItemPagamento