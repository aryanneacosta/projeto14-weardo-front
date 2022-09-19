import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Top, Endereco, Button} from "../StylesCart";
import { useState, useEffect, useReducer } from "react";

function reducer(state, action){
    if(action.type === "dinheiro"){
        return state = "dinheiro"
    }else if(action.type === "cartao"){
        return state = "cartao"
    }else if(action.type === "pix"){
        return state = "pix"
    }
}

export default function Confirm(){
    const navigate = useNavigate();
    const [nomesProdutos, setNomesProdutos] = useState("");
    const [total, setTotal] = useState(0);
    const [state, dispatch] = useReducer(reducer, 0);
    const [produtosSelecionados, setProdutosSelecionados] = useState([
        {
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin1, Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin2, Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin3, Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin4, Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin5, Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin6, Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin7, Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin8, Safra boa ein",
            preco: "1999"
        }
    ]);

    function somarTotal(){
        let aux=0;
        produtosSelecionados.map(value => aux += parseInt(value.preco))
        setTotal(aux/100)
    }
    function enfileirarNomes(){
        let aux = ""
        produtosSelecionados.map(value=> aux += `${value.nome} - `);
        setNomesProdutos(aux);
    }
    function ConfirmarPedido(){


    }

    useEffect(somarTotal, []);
    useEffect(enfileirarNomes,[]);
    console.log(state);

    return(
        <>
        <Top>
            <div>
            <ion-icon onClick={()=> navigate(-1)} name="arrow-back-outline"></ion-icon>
            <h2>Pagamento</h2>
            </div>
            <ion-icon onClick={()=> navigate("/carrinho")} name="cart-outline"></ion-icon>
        </Top>

        <Titulo>
            <h3>Confirme sua Compra:</h3>
        </Titulo>

        <ResumoCompra>
        <h3>Nome:</h3><h4>Belo nome da pessoa</h4>

        <h3>Endereço:</h3><h4>Belo endereço da pessoa</h4>

        <h3>Produtos:</h3><h4>{nomesProdutos}</h4>

        <h3>Total:</h3><h4>{total}</h4>

        
        <form onSubmit={ConfirmarPedido}>
        <h3>Forma de pagamento:</h3>
        <input type="radio" onClick={()=> dispatch({type:"dinheiro"})} id="dinheiro" name="tipo_pagamento" value="dinheiro"/>
        <label htmlFor="dinheiro">Dinheiro</label><br/>
        <input type="radio" onClick={()=> dispatch({type:"cartao"})} id="cartão" name="tipo_pagamento" value="cartão"/>
        <label htmlFor="cartão">Cartão</label><br/>
        <input type="radio" onClick={()=> dispatch({type:"pix"})} id="pix" name="tipo_pagamento" value="pix"/>
        <label htmlFor="pix">Pix</label>
        <Button type="submit">
        <h6>Confirmar compra</h6>
        </Button>
        </form> 



        </ResumoCompra>

        </>
    )
}

const Titulo = styled(Endereco)`
    justify-content: center;
`
const ConfirmButton = styled(Button)`
    margin-top: 5vw;
`

const ResumoCompra = styled.div`
    width: 100vw;
    height: auto;
    box-sizing: border-box;
    padding: 5vw;

    h3{ 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 19px;
        color: #393F42;
        text-align: start;

    }
    h4{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #393F42;
        margin-bottom: 5vw;
    }
`