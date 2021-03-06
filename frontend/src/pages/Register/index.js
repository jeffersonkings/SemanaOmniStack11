import React,{ useState } from 'react';
import {Link, useHistory } from 'react-router-dom'; 
import{FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo (3).png';
import api from '../services/api';
import './styles.css';


export default function Registe(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  
  const history = useHistory(); 

  async function handleRegister(e){
     e.preventDefault();
   
     const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
   };
   try {
     const response = await api.post('ongs', data);

      alert(`Seu ID de Acesso eh: ${response.data.id}`);  
      history.push('/');
    }
    catch(err) {
     alert('Erro no cadastro, tente novamente.'); 
    }
  }  
  return (
        <div className="register-container">
            <div className="content">
              <section>
                  <img src={logoImg} alt="Be te Hero" />

                  <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontra casos da sua ONG.</p>
                  <h1>Cadastro</h1>
                  
                 <Link className="back-link" to="/Register">

                   <FiArrowLeft size={16} color="#E02041" />
                    Não tenho cadastro
                 </Link>  
              </section>
              <form onSubmit={handleRegister}>
                <input 
                placeholder="Nome da ONG" 
                value={name} checked
                onChange={e => setName(e.target.value)}
                />
                
                <input 
                type="email" placeholder="E-mail"
                value={email} checked
                onChange={e => setEmail(e.target.value)}
                />
                
                <input 
                placeholder="WhatsApp" 
                value={whatsapp}checkeding
                onChange={e => setWhatsapp(e.target.value)}
                />
                
                <div className="input-group">

                   <input 
                   placeholder="Cidade" 
                   value={city} 
                   onChange={e => setCity(e.target.value)}
                   />
                   
                   <input 
                   placeholder="UF" 
                   value={uf} 
                   onChange={e => setUf(e.target.value)} style={{ width:80 }}
                   /> 
                
                </div>

                <button className="button" type="submit">Cadastra</button>
              </form>

            </div>
        </div>
    );
}