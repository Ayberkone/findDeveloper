import Image from 'next/image'
import styles from './LogoGrid.module.scss'

type Logo = {
  src: string;
  alt: string;
};

const logos: Logo[] = [
  { src: '/images/logos/bosch.png', alt: 'Akbank' },
  { src: '/images/logos/aktifbank.png', alt: 'Akkim' },
  { src: '/images/logos/akbank.png', alt: 'Akkök Holding' },
  { src: '/images/logos/arcelik.png', alt: 'Arçelik' },
  { src: '/images/logos/allianz.png', alt: 'B/S/H/' },
  { src: '/images/logos/bezmia.png', alt: 'Bezmialem Vakıf Üniversitesi' },
  { src: '/images/logo/logo.png', alt: 'Logo' }
]

const LogoGrid: React.FC = () => (
  <div className={styles.logoGrid}>
    {logos.map((logo) => (
      <div key={logo.src} className={styles.logoContainer}>
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          objectFit="contain"
        />
      </div>
    ))}
    {logos.map((logo) => (
      <div key={logo.src + '_1'} className={styles.logoContainer}>
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          objectFit="contain"
        />
      </div>
    ))}
  </div>
)

export default LogoGrid
