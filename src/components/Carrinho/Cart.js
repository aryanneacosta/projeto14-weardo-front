import styled from "styled-components";
import axios from "axios";
import ProdutoCarrinho from "./CartProduct";
import { useEffect, useState } from "react";
import ToPayment from "./ToPayments";
import { useNavigate } from "react-router-dom";

export default function Cart(){

    const navigate = useNavigate();

    const [total, setTotal] = useState(0);
    const [produtosSelecionados, setProdutosSelecionados] = useState([
        {
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin1 - Safra boa ein",
            preco: "1999",
            id: "1"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin2 - Safra boa ein",
            preco: "1999",
            id: "2"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin3 - Safra boa ein",
            preco: "1999",
            id: "3"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin4 - Safra boa ein",
            preco: "1999",
            id: "4"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin5 - Safra boa ein",
            preco: "1999",
            id: "5"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin6 - Safra boa ein",
            preco: "1999",
            id: "6"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin7 - Safra boa ein",
            preco: "1999",
            id: "7"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin8 - Safra boa ein",
            preco: "1999",
            id: "8"
        }
    ]);

    function deletarProduto(id){
        const aux = produtosSelecionados.filter(value => value.id !== id);
        setProdutosSelecionados(aux);
    }
    function somarTotal(){
        let aux=0;
        produtosSelecionados.map(value => aux += parseInt(value.preco))
        setTotal(aux/100)
    }

    useEffect(somarTotal, [produtosSelecionados]);

    return(
        <>
        <Top>
            <div>
            <ion-icon onClick={()=> navigate(-1)} name="arrow-back-outline"></ion-icon>
            <h2>Seu carrinho</h2>
            </div>
            <ion-icon name="cart-outline"></ion-icon>
        </Top>
        <Endereco>
            <h3>Entregar em:</h3>
            <h3>Endereço legal que a pessoa tem</h3>
        </Endereco>
        <ShowProducts>
        { produtosSelecionados.map((value, index) => <ProdutoCarrinho
            key={index}
            nome={value.nome}
            cor ={value.cor}
            preco ={value.preco}
            imagem = {value.imagem}
            id ={value.id}
            deletarProduto={deletarProduto}
        /> )}
        </ShowProducts>

        <ToPayment total={total}/>
        
        </>
    )
}

const ShowProducts = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 67vh;
    overflow-y: scroll;
`

const Top = styled.div`
    width: 100vw;
    height: 8vh;
    min-height: 66px;
    box-sizing: border-box;
    background-color: #ffffff;
    padding: 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F0F2F1;

    div{
        display: flex;
        align-items: center;

    }

    ion-icon{
        font-size: 30px;
        color: #393F42;
        cursor: pointer;
    }

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 19px;
        color: #393F42;
        text-align: center;
        margin-left: 5vw;
    }
`

const Endereco = styled.div`
    width: 100vw;
    height: 6vh;
    min-height: 50px;
    background-color:#ffffff;
    border-bottom: 1px solid #F0F2F1;
    padding: 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #393F42;
    }
`