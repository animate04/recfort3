import { ButtonHTMLAttributes } from 'react'; // retorna todas as propriedade padrões de um botão HTML

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; // utiliza esses propriedades no type para o component

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props}></button>
    );
}
