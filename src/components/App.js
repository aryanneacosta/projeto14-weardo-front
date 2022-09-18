import { Global } from "./Global";
import SingUp from "./SingUp";
import SingIn from "./SingIn";
import { Reset } from "styled-reset";
import { useState } from "react";
import { UserContext } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivatePage from "../services/PrivatePage";
import Main from "./Main";
import Cart from "./Carrinho/Cart";
import Confirm from "./Confirm/Confirm";

export default function App() {
  const [tokens, setTokens] = useState(false);
  const [theme, setTheme] = useState(false);

  const auth = JSON.parse(localStorage.getItem(`weardo`));
  if (auth && tokens === false) {
    return setTokens(auth);
  }
  return (
    <>
      <Reset />
      <UserContext.Provider value={{ tokens, setTokens, theme, setTheme}}>
        <Global theme={theme} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/cadastro" element={<SingUp />} />
            <Route
              path="/principal"
              element={
                <PrivatePage>
                  <Main />
                </PrivatePage>
              }
            />
            <Route 
              path="/carrinho" 
              element={
                /*<PrivatePage>
                  <Cart/>
                </PrivatePage>*/
                <Cart/>
                }/>
            <Route 
              path="/pagamento" 
              element={
                /*<PrivatePage>
                  <Confirm/>
                </PrivatePage>*/
                <Confirm/>
                }/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
