import React, { ReactNode } from 'react'

interface CustomContainerProps {
  children?: ReactNode
  style?: React.CSSProperties
  className?: string
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children, style, className }) => (
  <div className={'custom-container mx-auto ' + (className || '')} style={style}>
    {children}
  </div>
)

export default CustomContainer
