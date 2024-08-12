import React from 'react'
import Image from 'next/image'
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown'
import CustomContainer from '../CustomContainer'
import styles from './Footer.module.scss'

type FooterProps = {
  short?: boolean
}

const Footer: React.FC<FooterProps> = ({ short = false }) => (
  <div className={styles.footerBG + (short ? ' mt-36' : '')}>
    <CustomContainer>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.contentUnit}>
            <p>© 2020 Finddeveloper.net</p>
            <nav>
              <a href="#privacy">Gizlilik Merkezi</a>
              <a href="#cookies">Çerezler</a>
              <a href="#privacy">Gizlilik</a>
              <a href="#terms">Şartlar</a>
            </nav>
          </div>
          <div className={styles.contentUnit}>
            <nav>
              <a href="#work">Finddeveloper&apos;da Çalışmak</a>
              <a href="#about">Hakkımızda</a>
              <a href="#support">Yardım Merkezi</a>
            </nav>
            <LanguageDropdown />
          </div>
        </div>
        {!short && (
          <div className={styles.content}>
            <div className={styles.contentUnit}>
              <div className={styles.logoContainer}>
                <Image src="/images/iskur-logo.png" alt="Logo" width={60} height={60} />
              </div>
              <p className={styles.description}>
                Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak 31/08/2018 - 30/08/2021 tarihleri arasında faaliyette bulunmak
                üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar uyarinca 170 nolu belge ile faaliyet
                göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir.
                Şikayetlerinizi için aşağıdaki telefon numaralarına başvurabilirsiniz. Diğer iller için tıklayınız.
                Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye İş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye
                Hizmet Merkezi: 0216 523 90 26
              </p>
            </div>
            <div className={styles.contentUnit} />
          </div>
        )}
      </footer>
    </CustomContainer>
  </div>
)

export default Footer
