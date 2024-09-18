import * as React from "react"
import styled from "styled-components"
import Input from "../components/input"
import ItemPagamento from "../components/itemPagamento"
import cartao_cinza from "../images/cartao-cinza.svg"
import cartao_azul from "../images/cartao-azul.svg"
import pix_cinza from "../images/pix-cinza.svg"
import pix_verde from "../images/pix-verde.svg"
import mais_cinza from "../images/mais-cinza.svg"
import mais_preto from "../images/mais-preto.svg"
import { useState, useEffect } from "react"
import EscolheCartao from "../components/escolhaCartao"
import Banner from "../components/banner"
import Button from "../components/botao"
import Carrinho from "../components/carrinho."

const Global = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;           
  margin: 0;
  padding:20px 0px 20px 0px;
`

const SectionCheckout = styled.form`
    width: 50%;
    border: 1px solid #d8d8d8;
    padding: 20px;
    border-radius: 10px;
`

const InputsJuntos = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Itens = styled.div`
    display: flex;
    flex-direction: row;
`

const TituloSection = styled.h2`
    font-family: sans-serif;
`

const TituloSectionThin = styled.h2`
    font-weight: 100;
    font-family: sans-serif;
    color: gray;
`

const Detalhes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`

const SpanDetalhes = styled.span`
    font-family: sans-serif;
    font-weight: 700;
    font-size: 20px;
`

const SpanPreco = styled.span`
    font-family: sans-serif;
    font-weight: 100;
`

const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const CheckoutPage = () => {

    const [FormPagamento, setFormaPagamento] = useState("cartao")

    const [Dados, setDados] = useState({
        email: "",
        confirmaEmail: "",
        nomeCompleto: "",
        cpfCnpj: "",
        celular: "",
        cep: "",
        estado: "",
        cidade: "",
        bairro: "",
        endereco: "",
        numero: "",
        complemento: ""
    })

    const InputChange = (e) => {
        const { name, value } = e.target;
        setDados({
            ...Dados,
            [name]: value,
        })
    }

    const [DadosPagamento, setDadosPagamento] = useState({
        numeroCartao: "",
        nomeTitular: "",
        mes: "",
        ano: "",
        cvv: "",
        parcelas: ""
    })

    const PagamentoChange = (e) => {
        const { name, value } = e.target;
        setDadosPagamento({
            ...DadosPagamento,
            [name]: value
        });
    };


    const MetodoChange = (FormaPagamento) => {
        setFormaPagamento(FormaPagamento);
    }

    return (
        <Global>
            <Banner />
            <SectionCheckout>

                <Carrinho />
                <hr />
                {/*------------------------------------------------------------------------------*/}

                <TituloSection>Identidade</TituloSection>
                {/*Email*/}
                <Input
                    label="Seu Email"
                    placeholder="Digite seu email para receber a compra"
                    name="email"
                    value={Dados.email}
                    onChange={InputChange} />

                {/*Confirmar Email*/}
                <Input
                    label="Confirme Email"
                    placeholder="Digite novamente seu email"
                    name="confirmaEmail"
                    value={Dados.confirmaEmail}
                    onChange={InputChange} />

                {/*Nome*/}
                <Input
                    label="Nome Completo"
                    placeholder="Digite seu nome completo"
                    name="nomeCompleto"
                    value={Dados.nomeCompleto}
                    onChange={InputChange} />
                <InputsJuntos>

                    {/*Identidade*/}
                    <Input
                        label="CPF/CNPJ"
                        placeholder="Digite o número do seu CPF ou CNPJ"
                        width="45%"
                        name="cpfCnpj"
                        value={Dados.cpfCnpj}
                        onChange={InputChange} />

                    {/*Celular*/}
                    <Input
                        label="Celular"
                        placeholder="(18) 12345-6789"
                        width="45%"
                        name="celular"
                        value={Dados.celular}
                        onChange={InputChange} />
                </InputsJuntos>

                {/*------------------------------------------------------------------------------*/}

                <hr />
                <TituloSection>Endereço</TituloSection>
                {/*CEP*/}
                <Input
                    label="Código postal (CEP)"
                    placeholder="Digite aqui seu CEP"
                    name="cep"
                    value={Dados.cep}
                    onChange={InputChange} />
                <InputsJuntos>

                    {/*Estado*/}
                    <Input
                        label="Estado"
                        placeholder="Selecione"
                        width="20%"
                        opcoes={estados}
                        name="estado"
                        value={Dados.estado}
                        onChange={InputChange} />

                    {/*Cidade*/}
                    <Input
                        label="Cidade"
                        placeholder="Onde voce mora?"
                        width="35%"
                        name="cidade"
                        value={Dados.cidade}
                        onChange={InputChange} />

                    {/*Bairro*/}
                    <Input
                        label="Bairro"
                        placeholder="Digite aqui o seu bairro"
                        width="35%"
                        name="bairro"
                        value={Dados.bairro}
                        onChange={InputChange} />
                </InputsJuntos>

                {/*Endereço*/}
                <Input
                    label="Endereço"
                    placeholder="Qual seu endereço?"
                    name="endereco"
                    value={Dados.endereco}
                    onChange={InputChange} />
                <InputsJuntos>

                    {/*Numero*/}
                    <Input
                        label="Número"
                        placeholder="000"
                        width="45%"
                        name="numero"
                        value={Dados.numero}
                        onChange={InputChange} />

                    {/*Complemento*/}
                    <Input
                        label="Complemento"
                        placeholder="Apto/Bloco/Fundos..."
                        width="45%"
                        name="complemento"
                        value={Dados.complemento}
                        onChange={InputChange} />
                </InputsJuntos>

                {/*------------------------------------------------------------------------------*/}

                <hr />
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
                        imageSrc={FormPagamento === 'outros'
                            ? mais_preto
                            : mais_cinza}
                        label="Outros"
                        value="outros"
                        disabled={true}
                        selectedItem={FormPagamento}
                        onClick={() => MetodoChange("outros")} />
                </Itens>

                {/*------------------------------------------------------------------------------*/}

                {/*DADOS DO PAGAMENTO*/}
                {FormPagamento === "cartao" && (
                    <EscolheCartao
                        DadosPagamento={DadosPagamento}
                        PagamentoChange={PagamentoChange} />
                )}

                {/*------------------------------------------------------------------------------*/}
                <hr />
                {/*DETALHES COMPRA*/}
                <TituloSectionThin>Detalhe da compra</TituloSectionThin>
                <Detalhes>
                    <SpanDetalhes>Curso Gatsby 2024</SpanDetalhes>
                    <SpanPreco>{DadosPagamento.parcelas}</SpanPreco>
                </Detalhes>
                <Button texto="Comprar Agora" />

            </SectionCheckout>
        </Global>
    )
}

export default CheckoutPage