'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'
import Button from '../../../components/common/Button'
// styling
import styles from './JobDescription.module.scss'

const jobDescription = {
  title: 'Mid. Level.net Developer',
  location: 'IBM- İstanbul (Anadolu)'
}

const JobDescription: React.FC = () => {
  const renderDescriptionShort = useMemo(() => (
    <div className={'layer-box ' + (styles.descriptionContainer)}>
      <div className="flex flex-col">
        <span className="color-blue">Mid. Level.net Developer</span>
        <span>IBM- İstanbul (Anadolu)</span>
      </div>
      <div>
        <Button
          title="Başvur"
          className="button-blue"
          onClick={() => null}
        >
          Başvur
        </Button>
        <div className="flex items-center justify-center mt-10">
          <Image src="/icons/icon-filled-favorite.svg" alt="Filter" width={24} height={24} />
          <Image src="/icons/icon-filled-go-on.svg" alt="Filter" width={24} height={24} />
        </div>
      </div>
    </div>
  ), [jobDescription])

  return (
    renderDescriptionShort
  )
}

export default JobDescription
