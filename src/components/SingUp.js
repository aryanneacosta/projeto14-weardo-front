import styled from "styled-components";
import logo from "../assets/images/ecommerce.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";
import { useContext, useState, useEffect } from "react";
import { singup } from "../services/Services";

export default function SingUp() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { tokens, setTheme } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokens) {
      navigate(`/principal`);
    }
  }, []);

  function handleForm(e) {
    e.preventDefault();
    if (password !== confirmpassword) {
      return alert(`Senhas não coincidem.`);
    } else if (password.length < 6) {
      return alert(`Tamanho mínimo da senha são 6 caracteres.`);
    }
    const body = {
      name: name,
      email: email,
      password: password,
      address: address,
    };
    singup(body)
      .then((r) => {
        console.log(r);
        setPassword("");
        setConfirmpassword("");
        setName("");
        setEmail("");
        setAddress("");
        navigate(`/`);
      })
      .catch((r) => {
        console.log(r);
        setPassword("");
        setConfirmpassword("");
        setName("");
        setEmail("");
        setAddress("");
      });
  }
  return (
    <>
      <Father>
        <img src={logo} alt="Initial logo" />
        <Name>Weardo</Name>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="nome"
            required
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          ></input>
          <input
            type="text"
            placeholder="Endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="endereço"
            required
          ></input>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="senha"
            required
          ></input>
          <input
            type="password"
            placeholder="Confirme a senha"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            name="confirmeasenha"
            required
          ></input>
          <button>Cadastrar</button>
        </form>
        <p onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</p>
      </Father>
      <Buttons>
          <nav onClick={() => setTheme(false)}>Light</nav>
          <div onClick={() => setTheme(true)}>Dark</div>
        </Buttons>
    </>
  );
}
const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  font-family: "Dancing Script", cursive;
  width: 100%;

  img {
    margin-top: 50px;
  }

  input {
    width: 80%;
    height: 58px;
    margin-bottom: 13px;
    font-size: 20px;
    ::placeholder {
      font-family: "Inter", sans-serif;
      color: var(--color-letters);
      font-weight: 400;
      font-size: 20px;
      opacity: 1;
    }
  }
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  button {
    background-color: var(--color-buttons);
    width: 80%;
    height: 46px;
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 20px;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin: 36px auto auto auto;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Name = styled.span`
  font-size: 50px;
  margin: 10px;
`;
const Buttons = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 30px;
  background-color: var(--color-buttons);
  justify-content: center;
  align-items:center;
  text-align:center;

  nav {
    font-weight: 400;
    font-size: 20px;
    background-color: var(--color-buttons);
    width: 70px;
    height: 30px;
    font-family: "Inter", sans-serif;
    margin-right: 5px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: scale(0.9);
    }
  }
  div {
    font-weight: 400;
    font-size: 20px;
    display: flex;
    background-color: var(--color-buttons);
    width: 70px;
    height: 30px;
    font-family: "Inter", sans-serif;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 1px;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
