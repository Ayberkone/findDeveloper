import Image from 'next/image'
import Link from 'next/link'
import styles from './FeaturedProfiles.module.scss'

const FeaturedProfiles = () => (
  <div className={styles.container}>
    <div className={styles.profile}>
      <Image
        src="/images/ara.png"
        alt="Profile Description"
        fill
        objectFit="cover"
      />
      <div className={styles.text}>
        <Link href="/">İş Ara</Link>
        <Link href="/">Profilini Oluştur</Link>
      </div>
    </div>
    <div className={styles.profile}>
      <Image
        src="/images/veren.png"
        alt="Profile Description"
        fill
        objectFit="cover"
      />
      <div className={styles.text}>
        <p>İş Veren Çözümleri</p>
      </div>
    </div>
  </div>
)

export default FeaturedProfiles
