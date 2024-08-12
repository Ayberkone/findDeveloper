'use client'

import React, { useState } from 'react'
import styles from './LanguageDropdown.module.scss'

interface DropdownProps {
  className?: string
}

const LanguageDropdown: React.FC<DropdownProps> = ({ className = '' }) => {
  const [language, setLanguage] = useState('tr')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value)
  }

  return (
    <select value={language} onChange={handleChange} className={styles.select + (className ? (' ' + className) : '')}>
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
    </select>
  )
}

export default LanguageDropdown
