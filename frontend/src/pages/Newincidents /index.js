import React, { useState  } from 'react';
import {Link,useHistory} from 'react-router-dom';
import{FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo (3).png';
import api from '../services/api';
import './styles.css';

export default function Newincidents()
{
  const ongId = localStorage.getItem('ongId')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

   async function handleNewIncident(e)
   {
     e.preventDefault();
    
      const data = 
      {
        title,
        description,
        value,
      }
   try
   { 
      await api.post('/incidents', data, 
      {
         headers:
         {
            Authorization: ongId,
         }
      });
       
      alert("Incidentes cadastrados com sucesso ");  
      history.push('/profile');
   }
   catch(err) 
   {
     alert('Erro no cadastro, tente novamente.'); 
   }
}  

return (
   <div className="new-incidents-container">
      <div className="content">
         <section>
            <img src={logoImg} alt="Be te Hero" />
     
            <h1>Cadastra Novo Caso</h1>
            <p>Descreva o caso detalhadamente para encontrarmos um herói para resolver isso.</p>
                  
            <Link className="back-link" to="/Profile">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar 
            </Link>  
       
         </section>
         <form onSubmit={handleNewIncident} >
            <input placeholder="Título do Caso"
             value={title}
             onChange={e =>setTitle(e.target.value)}
            />
            <textarea placeholder="Descrição"
             value={description}
             onChange={e =>setDescription(e.target.value)}
            />
            <input placeholder="Valor em Reais"
             value={value}
             onChange={e =>setValue(e.target.value)}
            /> 
            
            <button 
             className="button" 
             type="submit"
            >Cadastra
            </button>
         </form>
      </div>
   </div>
)};