import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const navigate = useNavigate();

  // animal_id, definido na rota NewUpdate
  const {animal_id} = useParams();

  // recebe e trata eventos do form
  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {name, size};

    if (animal_id === '0') {
      try {
        await api.post('api/v1/animals', data, {});
        navigate('/');
      } catch (error) {
        alert('Erro ao navegar');        
      }      
    } else {
      try {
        await api.patch(`api/v1/animals/${animal_id}`, data, {});
        navigate('/');
      } catch (error) {
        alert('Erro ao atualizar');        
      }      
    }
  }

  // busca registro especifico na api e seta dados para atualização
  async function loadAnimal(){
    try {
      const response = await api.get(`api/v1/animals/${animal_id}`,{});
      setName(response.data.name);
      setSize(response.data.size);
    } catch (error) {
      alert('erro ao buscar registro na api');
      navigate('/');      
    }
  }

  // chama loadAnimal e preenche form
  useEffect(() => {
    if (animal_id === '0') {
      return;      
    } else {
      loadAnimal();      
    }
  }, [animal_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Animals Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input data-testid="input1" id="name" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Nome" value={name}
            onChange={e => setName(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="size">Tamanho</label>
            <input data-testid="input2" id="size" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Tamanho" value={size}
            onChange={e => setSize(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}