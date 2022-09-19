import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Button } from "../StylesCart";

export default function ToPayment({total}){

    const navigate = useNavigate();
    return (
        <>
        <Footer>
            <div>
            <p>Total</p>
            <h3>{total}</h3>
            </div>

            <Button onClick={()=>{
                if(total === 0){
                    return alert("Você ainda não possui produtos no carrinho");
                }else return navigate("/pagamento");}}>
                <h6>Ir para o pagamento</h6>
            </Button>
        </Footer>
        </>
    )
}

const Footer = styled.div`
    width: 100vw;
    height: 16vh;
    min-height: 120px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 5vw 10vw;
    border-top: 1px solid #F0F2F1;
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;
        color: #393F42;
    }
    h3{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 17px;
        color: #393F42;
    }
    div{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
    }

`

