'use client'

import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import CustomContainer from '../CustomContainer'
import HeaderWithUser from './HeaderWithUser'
import HeaderWithoutUser from './HeaderWithoutUser'
// styling file
import styles from './Header.module.scss'

interface HeaderProps {
  isProfilePage?: boolean
}

const Header: React.FC<HeaderProps> = ({ isProfilePage }) => {
  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <header className={styles.header}>
      <CustomContainer className="flex overflow-visible">
        <div className={styles.headerWrapper}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/logo/logo.png"
              alt="Logo"
              className={styles.logo}
              fill
            />
          </div>
          {user || isProfilePage
            ? <HeaderWithUser user={user} />
            : <HeaderWithoutUser /> }
        </div>
      </CustomContainer>
    </header>
  )
}

export default Header
