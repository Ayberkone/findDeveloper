import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '../Button'
// styling
import styles from './Header.module.scss'

const HeaderWithoutUser: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(x => !x)

  const handleLoginRedirection = (type?: string) => {
    // since register and login pages or modals has similar forms they will act similar
    router.push('/login' + (type ? 'type?=' + type : ''))
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.desktopView}>
        <Button
          title="İşveren Girişi"
          className={styles.headerButton + ' ml-36'}
          onClick={() => handleLoginRedirection('employer')}
        >
          İşveren Girişi
        </Button>
        <div className={styles.headerButtonContainer}>
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
            onClick={handleLoginRedirection}
          >
            Giriş Yap
          </Button>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={'menu-container' + (isOpen ? ' change' : '')} onClick={toggleDropdown}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          {isOpen && (
            <div className={styles.popup}>
              <ul>
                <li onClick={() => handleLoginRedirection('employer')}>İşveren Girişi</li>
                <li onClick={() => handleLoginRedirection('register')}>Kayıt Ol</li>
                <li onClick={() => handleLoginRedirection()}>Giriş Yap</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeaderWithoutUser
