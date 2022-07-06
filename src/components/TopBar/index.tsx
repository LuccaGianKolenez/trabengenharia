import React from 'react';
import { Section} from './styles';

const TopBar: React.FC = () => {

    return (
    <Section>
                <span className='gridMenu'>
                <a href='*'className='logo'>Logo</a>
                <a href='/Home' className='menu'>Home</a>
                <a href='/Funcionários' className='menu'>Funcionários</a>
                <a href='/Produtos' className='menu'>Produtos</a>
                <a href='/Serviços' className='menu'>Serviços</a>
                <a href='/Agenda' className='menu'>Agenda</a>
                <a href='/Clientes' className='menu'>Clientes</a>
                </span>
    </Section>
    )
  }

export default TopBar