import * as React from "react"
import styled from "styled-components"
import DadosCartao from "../Components/MetodoPagamento/Metodo_Cartao"
import { useState } from "react"
import ItemPagamento from "../itensComponents/itemPagamento"
import cartao_cinza from "../images/cartao-cinza.svg"
import cartao_azul from "../images/cartao-azul.svg"
import pix_cinza from "../images/pix-cinza.svg"
import pix_verde from "../images/pix-verde.svg"
import boleto_cinza from "../images/boleto-cinza.svg"
import boleto_preto from "../images/boleto-preto.svg"

const TituloSection = styled.h2`
    font-family: sans-serif;
`
const Itens = styled.div`
    display: flex;
    flex-direction: row;
`

const PagamentoSection = ({ MetodoChange, FormPagamento, DadosPagamento, PagamentoChange, schemaPayment }) => {

    return (
        <>
            <TituloSection>Pagamento</TituloSection>
            {/*MÉTODO DE PAGAMENTO*/}
            <Itens>
                <ItemPagamento
                    imageSrc={FormPagamento === 'cartao'
                        ? cartao_azul
                        : cartao_cinza}
                    label="Cartão de Crédito"
                    value="cartao"
                    selectedItem={FormPagamento}
                    onClick={() => MetodoChange("cartao")} />
                <ItemPagamento
                    imageSrc={FormPagamento === 'pix'
                        ? pix_verde
                        : pix_cinza}
                    label="Pix"
                    value="pix"
                    selectedItem={FormPagamento}
                    onClick={() => MetodoChange("pix")} />
                <ItemPagamento
                    imageSrc={FormPagamento === 'boleto'
                        ? boleto_preto
                        : boleto_cinza}
                    label="Boleto"
                    value="boleto"
                    selectedItem={FormPagamento}
                    onClick={() => MetodoChange("boleto")} />
            </Itens>

            {/*------------------------------------------------------------------------------*/}

            {/*DADOS DO PAGAMENTO*/}
            {FormPagamento === "cartao" && (
                <DadosCartao
                    DadosPagamento={DadosPagamento}
                    PagamentoChange={PagamentoChange} />
            )}
        </>
    )
}

export default PagamentoSection