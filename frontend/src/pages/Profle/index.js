import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiPower,FiTrash2} from 'react-icons/fi';
import logoImg from '../../assets/logo (3).png';
import api from '../services/api';
import './styles.css';

export default function Profile() {
  
  const [incidents, setIncidents] = useState([ ]);
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');// Para armagenar o Id da ong no Historico de navegação.
  const ongName = localStorage.getItem('ongName'); // Para armagenar o Name da ong no Historico de navegação.

  function handlelogon(){
      history.push('/')
  }
  
    useEffect(() => {
       api.get('/profile',{ 
         headers:
         { Authorization: ongId }
       
        })
        .then (Response => {
         setIncidents(Response.data);// São os dados que vem de dentro do banco de dados do backend. 
        }
         
        )},
    [ongId]);

    async function handleDeleteIncident(id) {
     try
      {
       await api.delete(`incidents/${id}`,
        {
           headers:
            {
             Authorization: ongId,
            } 
        }); 

        setIncidents(incidents.filter(incidents => incidents.id !== id));
      }
      catch(err)
      {
       alert('Erro ao tentar Deletar, tente novamente.');
      };
    }

    return (
     <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindo { ongName }</span>
                
                <Link className="button" to="/incidents/New" >Cadastro de novo Caso </Link>
                <button onClick={handlelogon} type="button"> 
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>  
       
            <h1>Casos cadastrados</h1>
       
            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>
                    
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incidents.description}</p>
                    
                        <strong>VALOR:</strong>
    
                         <p>{Intl.NumberFormat('pt-BR',{ style:'currency', currency:'BRL' }).format(incidents.value)}</p> {/* para formatar o valor em moeda Brasileira( "R$:" ,Reais) */}
                       
                        <button onClick={() => handleDeleteIncident(incidents.id)} 
                        type="button"> 
                        <FiTrash2 size={21} 
                        color="#a8a8b3"/>
                        </button>
 
                    </li>
                ))}
            </ul>
        </div>
    );
}