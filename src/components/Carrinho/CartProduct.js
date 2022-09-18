import { useState } from "react";
import styled from "styled-components";



export default function ProdutoCarrinho({nome, cor, preco, imagem, id, deletarProduto}){

    
    return(
        <Produto>
            <img src={imagem} />
            <Descricao>
                <h1>{nome}</h1>
                <h4>cor: {cor}</h4>
                <h2>R$: {parseInt(preco)/100}</h2>
            </Descricao>
            <ion-icon onClick={()=> deletarProduto(id)} name="trash-outline"></ion-icon>
        </Produto>
    )
}

const Produto = styled.div`
    width: 100vw;
    height: 11vh;
    min-height: 67px;
    padding: 0 7vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 5vw;

    ion-icon{
        font-size: 20px;
        color: #393F42;
        margin: auto;
        cursor: pointer;
    }

    img{
        height: 100%;
        width: 21vw;
        border-radius: 5px;
        margin-right: 5vw ;
        box-shadow: 0px 0px 10px 2px #F0F2F1;
    }
`
const Descricao = styled.div`
    height: 100%;
    width: 41vw;
    position: relative;
    padding: 2vw 0 2vw 0;
    h1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 17px;
        color: #393F42;
    }
    h4 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: #939393;
    }
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #393F42;
        position: absolute;
        bottom: 2vw;
        left: 0;

    }

`