import React,{ useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';
import api from '../services/api'
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo (3).png'
import './styles.css'

export default function Logon()
{
  const history = useHistory();
  const [id, setId] = useState('');

  async function handlelogin(e){
    e.preventDefault();

    try
    {
      const response = await api.post('/session', { id });
       
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
       
      history.push('Profile');
    }
    catch(err)
    {
      alert('Falha no login, tente novamente.');
    }
  };

  return  (
      <div className="class logon-container ">
        <section className="form">
          <img src={logoImg} alt="Be the Hero" />  
          
          <form onSubmit={handlelogin}>
              
              <h1>faca seu Logon</h1>

              <input placeholder="Sua ID"
              value={id}
              onChange={e =>setId(e.target.value)}
              />
              <button className="button" type="submit">Entra</button>

            <Link className="back-link" to="/Register">

                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
            </Link>  
          </form>
 
          </section>

         <img src={heroesImg} alt="Heroes"/> 
      </div>  
    );
}