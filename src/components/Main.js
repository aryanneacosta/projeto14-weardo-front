import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts, postProducts } from "../services/Services";
import ecommerce from '../assets/images/ecommerce.png';
import banner from '../assets/images/banner.png';
import { useNavigate } from "react-router-dom";
import { Endereco } from "./StylesCart";

export default function Main() {
    const navigate = useNavigate();
    const [productsList, setProductsList] = useState([]);
    const auth = JSON.parse(localStorage.getItem('weardo'));
    let newProductsList = [];

    useEffect(() => {
        gettingList();
    }, []);

    async function gettingList() {
        await getProducts().then(resposta => {
            setProductsList(resposta.data);
        }).catch(resposta => {
            console.log(resposta.data);
        })
    };

    decimalSeparator(productsList);
    
    function decimalSeparator(arr) {
        arr.forEach(item => {
            item.price = (parseInt(item.price)/100).toFixed(2);
        })
        return newProductsList = arr;
    };

    async function addToCart(id) {
        const body = {
            name: auth.name,
            id: id
        }
        await postProducts(body).then(resposta => {
            console.log(resposta.data);
        }).catch(resposta => {
            console.log(resposta.data);
        })
    };

    return (
        <Content>
            <Header>
                <Welcome>
                    <img onClick={()=> { navigate("/");localStorage.clear();}} src={ecommerce} alt='logo'/>
                    Bem vindo(a),
                    <div>{auth.name}</div>
                    !
                </Welcome>
                <Cart>
                    <ion-icon onClick={()=> navigate("/carrinho")} name="cart-outline"></ion-icon>
                </Cart>
            </Header>
            <Titulo onClick={()=> { navigate("/vendidos")}}>
                <h3>Histórico de Compra</h3>
            </Titulo>
            <Poster>
                <img src={banner} alt="poster" />
            </Poster>
            <News>Confira as novidades:</News>
            <Products>
                {newProductsList.map((products, index) => {
                    return (
                        <Product key={index}>
                            <Image>
                                <img src={products.image} alt="produto" />
                            </Image>
                            <ProductName>
                                <h2>{products.name}</h2>
                            </ProductName>
                            <h3>R$ {products.price}</h3>
                            <Button onClick={() => addToCart(products.id)}>Adicionar ao carrinho</Button>
                        </Product>
                    );
                })}
            </Products>

        </Content>
    )
}

const Titulo = styled(Endereco)`
    justify-content: center;
    margin-top: 50px;
    border-top: 1px solid #F0F2F1;
    cursor:pointer;
`


const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    font-family: "Dancing Script", cursive;
    width: 100%;
`;

const Header = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--color-background);

    ion-icon[name='cart-outline'] {
        height: 28px;
        width: 28px;
        margin-right: 20px;
        cursor: pointer;
    }
`;

const Welcome = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-family: 'Inter';
    color: #393F42;
    margin-left: 16px;

    div {
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 700;
        color: #393F42;
        margin-left: 5px;
    }

    img {
        height: 28px;
        cursor: pointer;
    }
`;

const Cart = styled.div``;

const Poster = styled.div`
    height: 163px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 144px;
        width: 80%;
        border-radius: 10px;
        object-fit: fill;
    }
`;

const News = styled.div`
    margin-left: 16px;
    font-family: 'Inter';
    font-size: 14px;
    color: #393F42;
`;

const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 14px;
`;

const Product = styled.div`
    height: 217px;
    width: 170px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    h3 {
        font-size: 14px;
        font-family: 'Inter';
        font-weight: 600;
        color: #393F42;
        margin-top: 4px;
        margin-bottom: 11px;
        margin-left: 14px;
    }
`;

const Image = styled.div`
    height: 112px;
    width: 170px;

    img {
        object-fit: contain;
        height: 112px;
        width: 170px;
    }
`;

const ProductName = styled.div`
    height: 35px;
    width: 165px;
    margin-top: 13px;
    margin-left: 14px;

    h2 {
        font-size: 12px;
        font-family: 'Inter';
        color: #393F42; 
    }
`;

const Button = styled.div`
    height: 31px;
    width: 144px;
    margin-left: 14px;
    background-color: var(--color-buttons);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: var(--color-background);
    font-family: 'Inter';
    cursor: pointer;
`;