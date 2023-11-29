import { useState } from "react";

function Cadastro({ addAnimal }) {
  const [nome, setNome] = useState('');
  const [url, setUrl] = useState('');
  const [raca, setRaca] = useState('');
  const [local, setLocal] = useState('');
  const [encontrado, setEncontrado] = useState(false); // Inicializando com false, pois "Perdido" é o padrão

  const handleRadioChange = (e) => {
    setEncontrado(e.target.value === "true");
  };

  const cadastrar = () => {
    if (nome === "" || raca === "" || local === "" || url === "") return;
    addAnimal(nome, url, raca, encontrado, local);
    setNome('');
    setRaca('');
    setLocal('');
    setUrl('');
  };

  return (
    <>
      <div className="cadastrar">
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Informe o nome do Animal" />
        <input type="text" value={raca} onChange={(e) => setRaca(e.target.value)} placeholder="Informe a raça do Animal..." />
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Insira a imagem do Animal..." />
        <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} placeholder="Informe a localização ou referência do Animal..." />
        <div>
          <label htmlFor="enc">Encontrado</label>
          <input id="enc" type="radio" value={true} name="isEncontrado" checked={encontrado} onChange={handleRadioChange}/>
          <label htmlFor="per">Perdido</label>
          <input id="per" type="radio" value={false} name="isEncontrado" checked={!encontrado} onChange={handleRadioChange}/>
        </div>
        <button className="bt_cadastrar btns" onClick={cadastrar}>
          Cadastrar
        </button>
      </div>
      
    </>
  );
}

export default Cadastro;
