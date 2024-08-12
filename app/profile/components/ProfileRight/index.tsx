'use client'

import React from 'react'
import Image from 'next/image'
// styling
import styles from './ProfileRight.module.scss'

const dummyData = [
  {
    id: 0,
    title: 'Profesyonel Bakış',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur.
    `
  },
  {
    id: 1,
    title: 'Deneyim',
    content: [
      {
        id: '1_0',
        title: 'Founder',
        miniTitle: 'Neyasis Technology',
        miniTitle_2: 'February 2014 - Present (6 Years , 10 Months)',
        minititle_3: 'Ümraniye - İstanbul / Turkey',
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        `
      },
      {
        id: '1_1',
        title: 'Software Development Manager',
        company: 'IBM',
        duration: 'Jully 2011 - January 2014  (2 Years, 6 Months)',
        location: 'Armonk- New York /ABD',
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        `
      }
    ]
  },
  {
    id: 2,
    title: 'Eğitim',
    content: [
      {
        id: '2_0',
        title: 'Bahçeşehir Üniversitesi',
        miniTitle: 'Master Degree',
        miniTitle_2: 'Computer & Information Scienses',
        miniTitle_3: '2015-2019'
      },
      {
        id: '2_1',
        title: 'Boğaziçi Üniversitesi',
        miniTitle: 'Bachelor’s Degree',
        miniTitle_2: 'Political Science and International Relations',
        miniTitle_3: '2010-2015'
      }
    ]
  },
  {
    id: 3,
    title: 'Sertifikalar',
    content: [
      {
        id: '3_0',
        title: 'MCP (Microsoft Certified Professional)',
        miniTitle: 'Microsoft',
        miniTitle_2: 'January 2015'
      }
    ]
  },
  {
    id: 4,
    title: 'Yetenekler',
    content: [
      'C#.Net (10 years)',
      'Swift (5 years)',
      'React (3 years)'
    ],
    isTwoColumnView: true
  },
  {
    id: 5,
    title: 'İlgi Alanları',
    content: [
      'Boating / Sailing',
      'Snowboarding',
      'Windsurfing'
    ],
    isTwoColumnView: true
  }
]

const ProfileRight: React.FC = () => (
  <div className={styles.rightSide}>
    <h1 className={styles.header}>Profil</h1>
    {dummyData.map(x => (
      <div key={x.id} className={styles.rightUnit}>
        <div className={styles.rightRow}>
          <h2 className={styles.rightHeader}>{x.title}</h2>
          <span>Düzenle</span>
        </div>
        <hr className="my-16" />
        <div className={styles.righUnitInner}>
          {typeof x.content === 'string'
            ? x.content
            : x?.isTwoColumnView
              ? (
                <div className={styles.twoColumn}>
                  {x.content.map(y => (
                    <span key={y} className="flex items-center">
                      <Image src="/icons/icon-check.svg" alt="Filter" width={14} height={14} />
                      <span className="ml-10">{y}</span>
                    </span>
                  ))}
                </div>
              )
              : (
                x.content.map(y => (
                  <div key={y.id} className={styles.descriptionContainer}>
                    <h2 className={styles.rightHeader + ' color-blue'}>{y.title}</h2>
                    <span className="mt-10">{y.miniTitle}</span>
                    {y.miniTitle_2 && <span>{y.miniTitle_2}</span>}
                    {y.miniTitle_3 && <span>{y.miniTitle_3}</span>}
                    {y.description && <span className="mt-10">{y.description}</span>}
                  </div>
                ))
              )}
        </div>
      </div>
    ))}
  </div>
)

export default ProfileRight
