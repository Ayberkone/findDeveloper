import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  onClick: () => void
  title: string
  className?: string
	type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, title, className = '', type = 'button' }) => (
  <button
    type={type}
    title={title}
    className={'button ' + className}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
