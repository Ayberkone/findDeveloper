'use client'

import Image from 'next/image'
import React from 'react'
// styling
import styles from './JobCards.module.scss'

interface Card {
  id: number
  header: string
  text: string
  button?: string
}

const JobCards: React.FC<Card> = ({ id, header, text, button }) => (
  <div key={id} className={'layer-box ' + (styles.cardContainer)}>
    <div className="flex flex-col">
      <span className={styles.cardHeader + ' color-blue'}>{header}</span>
      <span className={styles.cardText}>{text}</span>
      {button && <span className={styles.cardButton}>{button}</span>}
    </div>
    <div className={styles.imageContainer}>
      <Image src="/icons/icon-file.svg" alt="Range" width={100} height={100} />
    </div>
    {/* <Image src="/icons/icon-range.svg" alt="Filter" width={24} height={24} /> */}
  </div>
)

export default JobCards
