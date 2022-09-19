import styled from "styled-components";
import axios from "axios";
import ProdutoCarrinho from "./CartProduct";
import { useEffect, useState } from "react";
import ToPayment from "./ToPayments";
import { useNavigate } from "react-router-dom";
import { Top, Endereco } from "../StylesCart";

export default function Cart(){

    const navigate = useNavigate();

    const [total, setTotal] = useState(0);
    const [produtosSelecionados, setProdutosSelecionados] = useState([
        {
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin1 - Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin2 - Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin3 - Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin4 - Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin5 - Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin6 - Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin7 - Safra boa ein",
            preco: "1999"
        },{
            imagem: "https://f053de585b6c01c63f45-a7e947795f10d175ce7168574ff7ba2a.ssl.cf1.rackcdn.com/GaleriaImagem/121311/fotografia-produto-fundo-branco_orla-produto-35.jpg",
            cor: "vermelha",
            nome: "Vinzin8 - Safra boa ein",
            preco: "1999"
        }
    ]);

    function deletarProduto(nome){
        const aux = produtosSelecionados.filter(value => value.nome !== nome);
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


