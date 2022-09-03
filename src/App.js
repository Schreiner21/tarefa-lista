import { useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState();
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);


  function salvar() {
    console.log('salvar ');

    if (id) {
      const index = lista.findIndex(n => n.id === id);
      lista[index].tarefa = parseInt(tarefa);
      setLista([...lista]);
      
    } else {
      let nota = {
        id: Math.random().toString(36),
        tarefa: (tarefa),

      };
  
      lista.push(nota);
      setLista([...lista]);
    }

    

    setId('');
    setTarefa('');
  }

  function editar(id) {
    console.log('editar ', id);
    const nota = lista.find(n => n.id === id);
    setId(nota.id);
    setTarefa(nota.tarefa);

  }

  function excluir(id) {
    console.log('excluir ', id);
    const index = lista.findIndex(n => n.id === id);
    lista.splice(index, 1);
    setLista([...lista]);
  }
  

  return (
    
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <center>
        <form className="row">

          <div id='dados' className="mb-3 col-4">
            <label className="form-label">Tarefa</label>
            <input type="text" className="form-control" value={tarefa} onChange={(event) => setTarefa(event.target.value)} />
          </div>

          <div className='col-md-12'>
          <button id='b_salvar' type="button" onClick={salvar}>Salvar</button>
          </div>
          
        </form>
      </center>

      <table className="table">
        <thead>
          <tr>
            <th>CheckMark</th>
            <th>Tarefa</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            lista.map((n, index) => {
              return (
                <tr key={index}>
                  <td id="caixa">
                    <input type="checkbox"/>
                  </td>
                  <td>{n.tarefa}</td>
                  <td>
                    <button className='col-md-12' id='b_editar' onClick={() => editar(n.id)}>Editar</button>
                  </td>
                  <td>
                    <button className='col-md-12' id='b_excluir' onClick={() => excluir(n.id)}>Excluir</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div>
  <footer id="rodape">
    <p><b>Grupo: Lucas Rocha Schreiner & Arthur da Silva</b></p>
  </footer>
</div>
    </div>
  );
}

export default App;
