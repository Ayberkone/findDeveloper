'use client'

import React, { Fragment, useMemo, useState } from 'react'
import Image from 'next/image'
// styling
import styles from './ProfileLeft.module.scss'

const dummyData = [
  {
    id: 0,
    title: 'Dokümanlar',
    content: [
      { title: 'eraycv.docx', type: 'docx', url: 'www.google.com' },
      { title: 'eraycv—eng.pdf', type: 'pdf', url: 'www.google.com' },
      { title: 'mcpd-cert.pdf', type: 'pdf', url: 'www.google.com' }
    ],
    button: 'Başka bir doküman ekle',
    buttonAction: () => null
  },
  {
    id: 1,
    title: 'Web Sitesi',
    content: [
      '/icons/linkedin.svg',
      '/icons/linkedin.svg',
      '/icons/linkedin.svg',
      '/icons/linkedin.svg',
      '/icons/linkedin.svg',
      '/icons/linkedin.svg',
      '/icons/linkedin.svg'
    ],
    rowView: true,
    button: 'Düzenle',
    buttonAction: () => null
  },
  {
    id: 2,
    title: 'Başvurularım',
    content: [
      { title: 'Neyasis Tech.', type: 'search', url: 'www.google.com/neyasis' },
      { title: 'Apple', type: 'search', url: 'www.google.com/apple' },
      { title: 'mcpd-cert.pdf', type: 'pdf', url: 'www.google.com' }
    ]
  },
  {
    id: 3,
    title: 'Başvurularım',
    content: [
      { title: 'Neyasis Tech.', type: 'appliance', url: 'www.google.com' }
    ],
    button: 'Tümünü Gör',
    buttonAction: () => null
  }
]

const ProfileLeft: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpansion = () => {
    setIsExpanded(x => !x)
  }

  const renderProfile = useMemo(() => (
    <>
      <div className={styles.profileImgContainer}>
        <Image src="/icons/blue-bg.svg" alt="" className={styles.profileImg} width={64} height={64} />
        <Image src="/icons/icon-filled-edit.svg" alt="" className={styles.profileImg + ' ' + styles.editIcon} width={24} height={24} />
        <Image src="/images/avatar.png" alt="Avatar" width={100} height={100} className="m-auto" />
      </div>
      <div className={styles.leftTextContainer}>
        <span className={styles.userName}>Nesil AKSOY</span>
        <span className={styles.leftText}>UX Designer<br />Türkiye, İstanbul, Sarıyer</span>
        <span className={styles.leftText}>eray_karakullukcu.neyasis.com <br />+90 555 66 44</span>
        <span className={styles.leftText + ' font-size-12 flex items-center'}>
          <Image src="/icons/icon-download.svg" alt="" className="mr-4" width={16} height={16} />
          <u>Find CV’mi İndir</u>
        </span>
        <span className={styles.leftLink + ' pb-32'}>Profili Düzenle</span>
      </div>
    </>
  ), [])

  const renderContent = useMemo(() => (
    dummyData.map(x => (
      <Fragment key={x.id}>
        <hr />
        <div className={styles.innerContainer}>
          <span className={styles.title}>{x.title}</span>
          <div className={styles.innerContent + (x?.rowView ? ' flex-row' : ' flex-col')}>
            {x.content?.length > 0 && x.content.map(y => (
              y.title
                ? (
                  <div key={y.title} className={styles.row}>
                    <span className="flex items-center">
                      <Image src="/icons/icon-pdf.svg" alt="" width={24} height={24} />
                      <span className="ml-16">{y.title}</span>
                    </span>
                    <Image src="/icons/icon-filled-cross.svg" alt="" width={16} height={16} />
                  </div>
                )
                : (
                  <div key={y} className={styles.row}>
                    <Image src={y} alt="" width={20} height={20} />
                  </div>
                )
            ))}
          </div>
          {x.button && <span className={styles.leftLink} onClick={x.buttonAction}>{x.button}</span>}
        </div>
      </Fragment>
    ))
  ), [dummyData])

  return (
    <div className={styles.leftSide}>
      <div className={styles.miniView}>
        <span className={`chevron x-axis${isExpanded ? ` ${styles.chevronOpen} open` : ''} ${styles.chevron}`} onClick={toggleExpansion} />
        {isExpanded && (
          <>
            {renderProfile}
            {renderContent}
          </>
        )}
      </div>
      <div className={styles.regularView}>
        {renderProfile}
        {renderContent}
      </div>
    </div>
  )
}

export default ProfileLeft
