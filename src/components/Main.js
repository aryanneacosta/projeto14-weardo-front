import styled from "styled-components";

export default function Main() {
    return (
        <Content>
            <Header>
                <Delivery>
                    Delivery adress
                    <div>rua blabla</div>
                </Delivery>
                <ion-icon name="cart-outline"></ion-icon>
            </Header>
            <Poster>
                <img src="https://www.casamagalhaes.com.br/blog/wp-content/uploads/2017/09/como-fazer-uma-promo%C3%A7%C3%A3o.jpg" alt="poster"/>
            </Poster>
            <Products>
                <Product>
                    <img src="https://lojista.imaginariumnamedida.com.br/media/wysiwyg/inicio/NaMedida/luminaria_onoff.jpg" alt="produto"/>
                    <h2>Nome do produto</h2>
                    <h3>R$ preço</h3>
                    <div>Adicionar ao carrinho</div>
                </Product>
                <Product>
                    <img src="https://lojista.imaginariumnamedida.com.br/media/wysiwyg/inicio/NaMedida/luminaria_onoff.jpg" alt="produto"/>
                    <h2>Nome do produto</h2>
                    <h3>R$ preço</h3>
                    <div>Adicionar ao carrinho</div>
                </Product>
                <Product>
                    <img src="https://lojista.imaginariumnamedida.com.br/media/wysiwyg/inicio/NaMedida/luminaria_onoff.jpg" alt="produto"/>
                    <h2>Nome do produto</h2>
                    <h3>R$ preço</h3>
                    <div>Adicionar ao carrinho</div>
                </Product>
                <Product>
                    <img src="https://lojista.imaginariumnamedida.com.br/media/wysiwyg/inicio/NaMedida/luminaria_onoff.jpg" alt="produto"/>
                    <h2>Nome do produto</h2>
                    <h3>R$ preço</h3>
                    <div>Adicionar ao carrinho</div>
                </Product>
                <Product>
                    <img src="https://lojista.imaginariumnamedida.com.br/media/wysiwyg/inicio/NaMedida/luminaria_onoff.jpg" alt="produto"/>
                    <h2>Nome do produto</h2>
                    <h3>R$ preço</h3>
                    <div>Adicionar ao carrinho</div>
                </Product>
                <Product>
                    <img src="https://lojista.imaginariumnamedida.com.br/media/wysiwyg/inicio/NaMedida/luminaria_onoff.jpg" alt="produto"/>
                    <h2>Nome do produto</h2>
                    <h3>R$ preço</h3>
                    <div>Adicionar ao carrinho</div>
                </Product>
            </Products>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
`;

const Delivery = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-family: 'Inter';
    margin-left: 20px;

    div {
        font-family: 'Inter';
        font-size: 12px;
        font-weight: 500;
    }
`;

const Poster = styled.div`
    height: 163px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    img {
        height: 144px;
        width: 90%;
        border-radius: 10px;
    }
`;

const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 350px;
`;

const Product = styled.div`
    height: 217px;
    width: 170px;
    display: flex;
    flex-direction: column;

    img {
        height: 112px;
        width: 170px;
        border-radius: 6px;
    }

    h2 {
        font-size: 12px;
        font-family: 'Inter';
        color: #393F42;
        margin-top: 13px;
        margin-left: 14px;
    }

    h3 {
        font-size: 14px;
        font-family: 'Inter';
        font-weight: 600;
        color: #393F42;
        margin-top: 4px;
        margin-bottom: 11px;
        margin-left: 14px;
    }

    div {
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
    }
`;