'use client'

import React from 'react'
import { useSearch } from '../../../hooks/useSearch'
// styling
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  isFullWidthView?: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({ isFullWidthView = false }) => {
  const { query, handleInputChange, performSearch } = useSearch()

  return (
    <div className={styles.searchBarContainer + ' flex items-center w-full mx-auto ' + (isFullWidthView ? styles.fullWidth : '')}>
      <div className={styles.searchBar + ' flex items-center w-full mx-auto'}>
        <input
          type="text"
          className={styles.searchBarInput + ' flex-grow border-none focus:outline-none focus:ring-0'}
          placeholder="İş, Şirket, Anathar Kelime"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.findButton}>
        <button
          type="button"
          title="Detaylı Arama"
          onClick={performSearch}
          className="bg-white hover:border-blue-600 transition duration-300"
        >
        </button>
        {!isFullWidthView && <div className={styles.deatiledSearch}>Detaylı Arama</div>}
      </div>
    </div>
  )
}

export default SearchBar
