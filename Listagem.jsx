function Listagem({item, concluirTarefa, removerTarefa}){
    return(
        <>
        
          <li className="animal">
                <img src={item.imgAnimal} alt="Imagem Animal"/>
                <span>
                    <h4>Nome: {item.nomeAnimal}</h4>
                    <h4>Raça: {item.racaAnimal}</h4>
                    <h4>Local: {item.localAnimal}</h4>
                    <h4>Estado: {item.isEncontrado == true ? "Encontrado" : "Perdido"}</h4>
                </span>

                <div>
                    <button className={item.isEncontrado == true ? "bt_pendente btns": "bt_concluir btns"} onClick={() => concluirTarefa(item.id)}>{item.isEncontrado == true ? <i class="bi bi-x-lg black"></i>:<i class="bi bi-check-lg black"></i>}</button>
                    <button className="bt_remover btns" onClick={() => removerTarefa(item.id)}><i class="bi bi-trash3-fill"></i></button>
                </div>
          </li>  


        </>
    )
}

export default Listagem