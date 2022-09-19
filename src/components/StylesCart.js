import styled from "styled-components";

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
    h6{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 17px;
        color: #FFFFFF;
    }
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
const ShowProducts = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 67vh;
    overflow-y: scroll;
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        color: #393F42;
        text-align: center;
        margin-top: 15vw;
    }
`

export {Top, Endereco, Button, ResumoCompra, ShowProducts};