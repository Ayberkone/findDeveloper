'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'
import { UserState } from '../../../../redux/reducers/auth/reducer'

interface HeaderWithUserProps {
	user: UserState
}

const HeaderWithUser: React.FC<HeaderWithUserProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(x => !x)

  return (
    <div className="flex justify-end">
      <div className={styles.headerContainer}>
        <div className="flex">
          <div className="flex flex-col justify-center mr-16">
            <div className={styles.userName + ' ml-auto chevron' + (isOpen ? ' open' : '')} onClick={toggleDropdown}>
              {user?.name || 'Eray Karakullukçu'}
              {isOpen && (
                <div className={styles.popup}>Cikis Yap</div>
              )}
            </div>
            <span className={styles.title}>{user?.title || 'findtalent’de Kurucu'}</span>
          </div>
          <div className={styles.avatar}>
            <Image
              src={user?.avatarURL || '/images/ara.png'}
              alt="User Avatar"
              className={styles.avatarImg}
              objectFit="cover"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderWithUser
