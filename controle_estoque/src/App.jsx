import { EstoqueProvider } from "./context/EstoqueContext";
import FormProduto from "./components/FormProduto";
import TabelaProdutos from "./components/TabelaProdutos";

export default function App(){
  return(
    <EstoqueProvider>
      <h1>Controle de Estoque</h1>
      <FormProduto/>
      <TabelaProdutos/>
    </EstoqueProvider>
  )
}