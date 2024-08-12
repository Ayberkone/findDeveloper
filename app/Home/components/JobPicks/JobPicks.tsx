import React from 'react'
import Link from 'next/link'
import styles from './JobPicks.module.scss'

type Category = {
  name: string;
  items: string[];
};

const JobPicks: React.FC = () => {
  const data: Category[] = [
    {
      name: 'Popüler Kategoriler',
      items: ['Yazılım Geliştirme', 'Mobil Uygulama Geliştirme', 'Kullanıcı Deneyimi', 'Kullanılabilirlik', 'Proje Yönetimi', 'İş Analizi', 'Raporlama Uzmanı', 'Test Uzmanı', 'Yazılım Mimarı']
    },
    {
      name: 'Popüler Başlıklar',
      items: ['Senior .net Developer', 'Senior Mobile Developer', 'Kullanıcı Deneyimi Tasarımcısı', 'Kullanılabilirlik Uzmanı', 'IT Sorumlusu', 'Mid Level .net Developer']
    },
    {
      name: 'Popüler Lokasyonlar',
      items: ['İstanbul', 'İzmir', 'Ankara']
    },
    {
      name: 'Popüler Şirket İlanları',
      items: ['Koç Sistem', 'Aktif Bank', 'Akbank', 'Türk Hava Yolları', 'Brisa', 'Vakıfbank', 'Neyasis Tech.']
    }
  ]

  return (
    <>
      <h2 className="text-8 unit-title mb-0 flex items-center">Sizin için iş ilanları</h2>
      <div className={styles.gridContainer}>
        {data.map((category) => (
          <div key={category.name} className={styles.category}>
            <h3 className="font-size-18">{category.name}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}><Link className="font-size-16" href="">{item}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default JobPicks
