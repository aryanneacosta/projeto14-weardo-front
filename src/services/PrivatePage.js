import { useNavigate } from "react-router-dom";



export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem(`weardo`));

  if (auth) {
    return <>{children}</>;
  } else {
    alert(`O usuario não está logado, acesso não autorizado.`);
    navigate(`/`);
  }
}
