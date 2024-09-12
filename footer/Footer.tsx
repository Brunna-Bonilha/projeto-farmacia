import React from 'react';
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

function Footer() {

    let data = new Date().getFullYear();

    return (
        <div className="flex justify-center bg-slate-800 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>Farmácia Saúde & Bem-Estar | Copyright: {data}</p>
                <p className='text-lg'>Siga-nos nas redes sociais</p>
                <div className='flex gap-2'>
                    <a href="https://www.instagram.com/farmacia_saude" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={48} weight='bold' />
                    </a>
                    <a href="https://www.facebook.com/farmacia.saude" target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={48} weight='bold' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

