import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Top, Endereco, Button, ResumoCompra} from "../StylesCart";
import { useState, useEffect, useReducer } from "react";
import { getCartProducts, postBuy, deleteCart } from "../../services/Services";

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
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    const auth = JSON.parse(localStorage.getItem('weardo'));

    function gettingCart(){
        getCartProducts().then(res=>{
            setProdutosSelecionados(res.data);
        }).catch(res=>{
            console.log(res.data);
        })
    }

    useEffect(()=>{
        gettingCart();
    }, []);

    function somarTotal(){
        let aux=0;
        produtosSelecionados.map(value => aux += parseInt(value.price))
        setTotal(aux/100)
    }
    function enfileirarNomes(){
        let aux = ""
        produtosSelecionados.map(value=> aux += `${value.name} - `);
        setNomesProdutos(aux);
    }

    function confirmarPedido(){
        const body = {
            name: auth.name,
            address: auth.address,
            products: produtosSelecionados,
            buyWay: state,
            total: total,
            email: auth.email
        }
        postBuy(body).then(()=> {
            
            deleteCart().then(()=> 
            navigate("/principal")
            ).catch(res=> console.log(res.data));
            alert("Compra concluída"); 
            

        }).catch(res=> console.log(res.data));


    }

    useEffect(somarTotal, [produtosSelecionados]);
    useEffect(enfileirarNomes,[produtosSelecionados]);
    console.log(produtosSelecionados);

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
        <h3>Nome:</h3><h4>{auth.name}</h4>

        <h3>Endereço:</h3><h4>{auth.address}</h4>

        <h3>Produtos:</h3><h4>{nomesProdutos}</h4>

        <h3>Total:</h3><h4>{total}</h4>

        <Formulario>
        <h3>Forma de pagamento:</h3>
        <input type="radio" onClick={()=> dispatch({type:"dinheiro"})} id="dinheiro" name="tipo_pagamento" value="dinheiro"/>
        <label htmlFor="dinheiro">Dinheiro (na entrega)</label><br/>
        <input type="radio" onClick={()=> dispatch({type:"cartao"})} id="cartão" name="tipo_pagamento" value="cartão"/>
        <label htmlFor="cartão">Cartão (na entrega)</label><br/>
        <input type="radio" onClick={()=> dispatch({type:"pix"})} id="pix" name="tipo_pagamento" value="pix"/>
        <label htmlFor="pix">Pix</label>
        <ConfirmButton onClick={confirmarPedido} type="submit">
        <h6>Confirmar compra</h6>
        </ConfirmButton>
        </Formulario>
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


const Formulario = styled.form`
    input{
        width: 20px;
        height: 20px;
    }


    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #393F42;
        margin-bottom: 5vw;
    }
`