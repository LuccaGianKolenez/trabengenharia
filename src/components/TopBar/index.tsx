import React from 'react';
import { Section} from './styles';

const TopBar: React.FC = () => {

    return (
    <Section>
                <span className='gridMenu'>
                <a href='*'className='logo'>Logo</a>
                <a href='/home' className='menu'>Home</a>
                <a href='/funcionarios' className='menu'>Funcionários</a>
                <a href='/produtos' className='menu'>Produtos</a>
                <a href='/serviços' className='menu'>Serviços</a>
                <a href='/agenda' className='menu'>Agenda</a>
                <a href='/clientes' className='menu'>Clientes</a>
                </span>
    </Section>
    )
  }

export default TopBar