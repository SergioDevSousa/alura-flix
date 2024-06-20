import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div>
      <Cabecalho
        logoCabecalho='./imagens/logomain.png'
        alt="Logo texto"
      />
      <Rodape 
        logoRodape='./imagens/logomain.png'
        alt="Logo texto"
      />
    </div>
  );
}

export default App;
