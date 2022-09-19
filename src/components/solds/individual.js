import { ResumoCompra } from "../StylesCart"
import styled from "styled-components"

export default function IndividualBuy({name, total, dia,endereco}){
    return(
        <>
        <Recibo>
            <h2>{dia}</h2>
            <h3>Nome:</h3><h4>{name}</h4>

            <h3>Endereço:</h3><h4>{endereco}</h4>

            <h3>Total:</h3><h4>${total}</h4>
        </Recibo>
        </>
    )
}

const Recibo = styled(ResumoCompra)`
    
    border-bottom: 1px solid #F0F2F1;
    h2{
        font-family: 'Inter';
        font-weight: 700;
        font-size: 18px;
        line-height: 15px;
        color: #393F42;
        text-align: center;
        margin-bottom: 2vw;
    }

`
