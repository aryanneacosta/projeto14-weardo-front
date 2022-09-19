import { UserContext } from "./Context";
import { useContext } from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { singin } from "../services/Services";
import logo from "../assets/images/ecommerce.png";

export default function SingIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { tokens, setTheme} = useContext(UserContext);

  useEffect(() => {
    if (tokens) {
      navigate(`/principal`);
    }
  }, []);

  function handleForm(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    singin(body)
      .then((r) => {
        console.log(r);
        localStorage.setItem(
          "weardo",
          JSON.stringify({ token: r.data.token, name: r.data.name, address: r.data.address, email: r.data.email })
        );
        navigate(`/principal`);
      })
      .catch((r) => {
        console.log(r);
      });
  }
  return (
    <>
      <Father>
        <img src={logo} alt="" />
        <Name>Weardo</Name>
        <form onSubmit={handleForm}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
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
          <button>Entrar</button>
        </form>
        <p onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</p>
        <Buttons>
          <button onClick={() => setTheme(false)}>Light</button>
          <div onClick={() => setTheme(true)}>Dark</div>
        </Buttons>
      </Father>
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
  button {
    font-weight: 400;
    font-size: 20px;
    background-color: var(--color-buttons);
    width: 70px;
    height: 30px;
    font-family: "Inter", sans-serif;
    margin-right: 5px;
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
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
