import styled from "styled-components";
import axios from "axios";
import ProdutoCarrinho from "./CartProduct";
import { useEffect, useState } from "react";
import ToPayment from "./ToPayments";
import { useNavigate } from "react-router-dom";
import { Top, Endereco, ShowProducts } from "../StylesCart";
import { getCartProducts} from "../../services/Services";

export default function Cart(){

    const navigate = useNavigate();

    const [total, setTotal] = useState(0);
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    const auth = JSON.parse(localStorage.getItem('weardo'));


    async function gettingCart(){
        await getCartProducts().then(res=>{
            setProdutosSelecionados(res.data);
        }).catch(res=>{
            console.log(res.data);
        })
    }

    useEffect(()=>{
        gettingCart();
    }, [])

    
 
    function somarTotal(){
        let aux=0;
        produtosSelecionados.map(value => aux += parseInt(value.price))
        setTotal(aux/100)
    }

    useEffect(somarTotal, [produtosSelecionados]);
    console.log(auth);
    console.log(produtosSelecionados);
    console.log({email: auth.email});

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
            <h3>{auth.address}</h3>
        </Endereco>
        <ShowProducts>
        { produtosSelecionados.length > 0 ? produtosSelecionados.map((value, index) => <ProdutoCarrinho
            key={index}
            name={value.name}
            cor ={value.cor}
            price ={value.price}
            image = {value.image}
            id = {value.id}
            gettingCart={gettingCart}
        /> ): <p>Você ainda não possui produtos em seu carrinho</p>}
        </ShowProducts>

        <ToPayment total={total}/>
        
        </>
    )
}




