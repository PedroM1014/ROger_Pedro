import { useState } from 'react'
import './App.css'
import Listagem from './Listagem'
import Cadastro from './Cadastro'


function App() {
  const [listaTarefa, setListaTarefa] = useState([
    {"id": 1, "nomeAnimal": "Thor", "imgAnimal": "https://love.doghero.com.br/wp-content/uploads/2016/11/Labrador-6.jpg", "racaAnimal": "Labrador", "localAnimal": "Perto do rio da Prata", "isEncontrado": false},
  {"id": 2, "nomeAnimal": "Lady", "imgAnimal": "https://fisiocarepet.com.br/wp-content/uploads/2023/10/Copia-de-Copia-de-Copia-de-Fisioterapia-Animal-com-Esteira-Aquatica-em-Campinas-5.png", "racaAnimal": "Golden Retriever", "localAnimal": "No parque central", "isEncontrado": true},
  {"id": 3, "nomeAnimal": "Shadow", "imgAnimal": "https://www.infoescola.com/wp-content/uploads/2010/06/pastor-alem%C3%A3o_319300679.jpg", "racaAnimal": "Pastor Alemão", "localAnimal": "Na rua principal", "isEncontrado": false},
  {"id": 4, "nomeAnimal": "Max", "imgAnimal": "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10369/raca-beagle-2-cursos-cpt.jpg", "racaAnimal": "Beagle", "localAnimal": "Ao lado da escola", "isEncontrado": true},
  {"id": 5, "nomeAnimal": "Mia", "imgAnimal": "https://www.patasdacasa.com.br/sites/default/files/2023-10/husky-siberiano0.jpg", "racaAnimal": "Husky Siberiano", "localAnimal": "No parque da cidade", "isEncontrado": false},
  {"id": 6, "nomeAnimal": "Mel", "imgAnimal": "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10329/racas-de-cachorro-shih-tzu-cpt.jpg", "racaAnimal": "Shih Tzu", "localAnimal": "Próximo ao mercado", "isEncontrado": true},
  {"id": 7, "nomeAnimal": "Bela", "imgAnimal": "https://s2-vidadebicho.glbimg.com/5gOBXeFYgEGJSFYQDmzfZ7egKZk=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/q/K/SULI1LTrAHWrO3jUemyA/2022-06-16-poodle-vida-de-bicho-andres-felipe-aristizabal-por-pixabay-poodle-g233259f4e-1280.jpeg", "racaAnimal": "Poodle", "localAnimal": "No jardim botânico", "isEncontrado": false},
  {"id": 8, "nomeAnimal": "Totó", "imgAnimal": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6XY0ecsOEEnBuIksFFjmH2MD7zpBsMRbKQ&usqp=CAU", "racaAnimal": "Bulldog Francês", "localAnimal": "No centro da cidade", "isEncontrado": true},
  {"id": 10, "nomeAnimal": "Roger junior", "imgAnimal": "https://s2.glbimg.com/EVgAk6kzjR8vWgmAZ1q2sNATIEg=/e.glbimg.com/og/ed/f/original/2022/02/02/73c7ad7a-8c57-42e9-8168-f28fa5e14e98.jpg", "racaAnimal": "Cavalier King Charles", "localAnimal": "No campo", "isEncontrado": true}
    
  ])
  
  const addAnimal = (nome, url, raca, encontrado, local)=>{
    const newListaTarefa = [...listaTarefa, {
      id: Math.floor(Math.random() * 100000), 
      nomeAnimal: nome,
      imgAnimal: url,
      racaAnimal: raca, 
      localAnimal: local,
      isEncontrado: encontrado
    }]
    setListaTarefa(newListaTarefa)
  }

  const concluirTarefa = (id) =>{
    const newListaTarefa = [...listaTarefa]
    newListaTarefa.map((item) =>{
      if(item.id === id){
        item.isEncontrado = !item.isEncontrado;
      }
    })
    setListaTarefa(newListaTarefa)
  }

  const removerTarefa = (id) =>{
    const newListaTarefa = [...listaTarefa].filter(item => item.id !== id)
    setListaTarefa(newListaTarefa)
  }

  return (
    <>
    <div className='app'>
      <h1>Cadastro de Animais Perdidos</h1>
      <Cadastro addAnimal={addAnimal}/>
        {
          listaTarefa
          .map((item) => (
            <Listagem item={item} concluirTarefa={concluirTarefa} removerTarefa={removerTarefa}/>
          ))
        }
    </div>
    </>
  )
}

export default App