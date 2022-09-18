import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function ToPayment({total}){

    const navigate = useNavigate();
    return (
        <>
        <Footer>
            <div>
            <p>Total</p>
            <h3>{total}</h3>
            </div>

            <Button onClick={()=>navigate("/pagamento")}>
                <p>Ir para o pagamento</p>
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

const Button = styled.span`
    width: 70vw;
    height: 10vw;
    min-height: 20px;
    background-color: #67C4A7;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5vw;
    transition: all 0.5s;

    &:active{
        transform: scale(0.9);
    }
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 17px;
        color: #FFFFFF;
    }
`