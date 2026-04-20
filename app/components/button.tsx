
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

export default function Button({ 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded text-base-comic transition-colors';
  
  const variants = {
    primary: 'bg-primary text-black hover:bg-primary-hover',
    secondary: 'bg-inactive text-black hover:bg-inactive-hover',
    danger: 'bg-destructive text-white hover:bg-destructive-hover',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
