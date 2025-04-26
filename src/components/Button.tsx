interface ButtonProps {
    label?: string;              // propiedad requerida
    className?: string;         // el símbolo (?) hace que la propiedad no es requerida
    handleClick?: () => void;   // función definida
    children?: React.ReactNode;  // renderizar nodos de React
}

function Button({ children, className = 'btn', handleClick }: ButtonProps) {
    return (
        <button className={ className } onClick={ handleClick }>
            {children}
        </button>
    );
}

export default Button;