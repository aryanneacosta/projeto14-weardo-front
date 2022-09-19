import { Top, Endereco, ShowProducts } from "../StylesCart"
import { useNavigate } from "react-router-dom"
import IndividualBuy from "./individual";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getSolds } from "../../services/Services";

export default function Solds(){
    const navigate = useNavigate();
    const [comprados, setComprados] = useState([]);
    const auth = JSON.parse(localStorage.getItem('weardo'));

    async function getProductsSolds(){
        await getSolds().then(res=>{
            setComprados(res.data);

        }).catch(res=>{
            console.log(res.data);
        })
    };

    useEffect(()=>{
        getProductsSolds();
    }, [])

    return(
        <>
        <Top>
            <div>
            <ion-icon onClick={()=> navigate(-1)} name="arrow-back-outline"></ion-icon>
            <h2>Histórico</h2>
            </div>
            <ion-icon onClick={()=> navigate("/carrinho")} name="cart-outline"></ion-icon>
        </Top>

        <Titulo>
            <h3>Histórico:</h3>
        </Titulo>
        <ShowRecibos>
        { comprados.length > 0 ? comprados.map((value, index) => <IndividualBuy
            key={index}
            name={value.name}
            total ={value.total}
            dia = {value.day}
            endereco = {value.address}
        /> ): <p>Você ainda não possui histórico de compra</p>}
        </ShowRecibos>
        </>
    )
}

const Titulo = styled(Endereco)`
    justify-content: center;
`
const ShowRecibos = styled(ShowProducts)`
    height: 83vh;
`