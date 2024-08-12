'use client'

import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import Seperator from '../../../components/common/Seperator'
// styling
import styles from './JobFilters.module.scss'

const JobFilters: React.FC = () => {
  const dispatch = useDispatch()

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const location = e.target.value
    dispatch({ type: 'FILTER_BY_LOCATION', payload: location })
  }

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterItem + ' ' + styles.filterItemBig}>
        <div className="flex">
          <div className="flex pr-16">
            <Image src="/icons/icon-filled-filter.png" alt="Filter" width={24} height={24} />
            <select id="location" name="location" className={styles.select} onChange={handleFilterChange}>
              <option value="istanbul">Filtrele</option>
              <option value="ankara">Ankara</option>
            </select>
          </div>
          <select id="location" name="location" className={styles.select} onChange={handleFilterChange}>
            <option value="istanbul">Son Aramalar</option>
            <option value="ankara">Ankara</option>
          </select>
        </div>
        <Seperator />
        <div className={styles.searchResult + ' ' + styles.filterItem}>
          <span className={styles.blueText}>Desing (0 iş ilanı bulundu)</span>
          <span className={styles.didYouMean}>Bunu mu demek istediniz? <u><b>Design</b></u></span>
        </div>
      </div>
      <div className={styles.filterItem + ' ' + styles.filterItemSmall}>
        <div className="flex ml-auto">
          <span className="mr-10">Beni Bilgilendir</span>
          <Image src="/icons/icon-notification.png" alt="Filter" width={24} height={24} />
        </div>
      </div>
    </div>
  )
}

export default JobFilters
