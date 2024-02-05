import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function Animals(){

  const [my_animals, setAnimals] = useState([]);
  const navigate = useNavigate();

  // read, busca todos os registros na api
  useEffect(() => {
    api.get('api/v1/animals',{})
    .then(response => {setAnimals(response.data)})
  }, []);

  // update, navega para tela NewUpdate 
  async function updateAnimal(id){
    try {
      navigate(`/newupdate/${id}`);
    } catch (error) {
      alert('erro ao acessar newUpdate');      
    }
  }

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Animals Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Tamanho</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_animals.map(animal => (
              <tr key={animal.id}>
                <th scope="row">{animal.id}</th>
                <td>{animal.name}</td>
                <td>{animal.size}</td>
                <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}
                  onClick={() => updateAnimal(animal.id)}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger" style={{margin: '2px'}}>Excluir</button>

                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}