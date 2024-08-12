'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SearchBar from '../../../components/common/SearchBar/SearchBar'
import CustomContainer from '../../../components/common/CustomContainer'
import styles from './Header.module.scss'
import Button from '../../../components/common/Button'

const Header: React.FC = () => {
  const router = useRouter()

  const handleLoginRedirection = (type?: string) => {
    // since register and login pages or modals has similar forms they will act similar
    router.push('/login' + (type ? 'type?=' + type : ''))
  }

  return (
    <header className={styles.header}>
      <CustomContainer>
        <div className="container mx-auto">
          <div className="flex justify-end space-x-2 p-4">
            <Button
              title="Kayıt Ol"
              className={styles.headerButton}
              onClick={() => handleLoginRedirection('register')}
            >
              Kayıt Ol
            </Button>
            <Button
              title="Giriş Yap"
              className={styles.headerButton}
              onClick={() => handleLoginRedirection()}
            >
              Giriş Yap
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className={styles.logoContainer}>
              <Image
                src="/images/logo/logo.png"
                alt="Logo"
                className={styles.logo}
                fill
                sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 700px"
              />
            </div>
            <div className={styles.headerTextContainer}>
              <Image
                src="/images/header-text/header-text.png"
                alt="Logo"
                className={styles.logo}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 460px"
              />
            </div>
          </div>
          <SearchBar />
        </div>
      </CustomContainer>
    </header>
  )
}

export default Header
