'use client'

import React, { Fragment, useMemo, useState } from 'react'
// components
import Seperator from '../../../components/common/Seperator'
// styling
import styles from './JobDefinitions.module.scss'

const description = (
  <div>
    Promer Müşavirlik Mühendislik A.Ş Bilgi Teknolojileri Direktörlüğünün Yazılım
    Geliştirme Biriminde görev alacak Software Developer(.Net) arayışımız vardır.
    <br />
    <br />
    <b>İş Tanımı</b>
    <br />
    <br />

    .Net platformunda geliştirilen AURO yazılımında ve bu yazılımın alt yapısının
    güncellenmesi konularında standartlara uygun kod yazmak, Mevcut yazılım
    üzerinde yönetimden gelen ek isteklerin uygulanması, Yeni projelerde yazılım
    kodlama altyapısının oluşturulması,

    <br />
    <br />
    <b>Genel Nitelikler</b>
    <br />
    <br />

    Üniversitelerin Bilgisayar Mühendisliği veya ilgili mühendislik bölümlerinden
    mezun,
    - Alanında en az 3 yıl ve üzeri yazılım geliştirme deneyimi olan,
    - .Net geliştirme alanında tecrübe sahibi (C#, Vb.Net, .NET Framework, .NET Core)
    - HTML5, CSS, Bootstrap ve Javascript konularında bilgili,
    - MS SQL Server ve  veritabanı tasarımı konusunda tecrübe sahibi,
    - OOP - Nesne yönelimli programlama ve tasarım konusunda deneyimli,
    - Cloud versiyon kontrol sistemlerinin en az birinde çalışmış, (GIT,GitLab vb.)
    - Kurumsal uygulama tasarım, test, performans izleme, dokümantasyon tecrübesine
    sahip,
    - Güvenli ve test kontrollü kod geliştirme alanlarında bilgili,
    - Müşteri odaklı hizmet anlayışına sahip,
    - Alanında en az 3 yıl ve üzeri yazılım geliştirme deneyimi olan,
    - .Net geliştirme alanında tecrübe sahibi (C#, Vb.Net, .NET Framework, .NET Core)
    - HTML5, CSS, Bootstrap ve Javascript konularında bilgili,
    - MS SQL Server ve  veritabanı tasarımı konusunda tecrübe sahibi,
    - OOP - Nesne yönelimli programlama ve tasarım konusunda deneyimli,
    - Cloud versiyon kontrol sistemlerinin en az birinde çalışmış, (GIT,GitLab vb.)
    - Kurumsal uygulama tasarım, test, performans izleme, dokümantasyon tecrübesine
    sahip,
    - Güvenli ve test kontrollü kod geliştirme alanlarında bilgili,
    - Müşteri odaklı hizmet anlayışına sahip,

    <br />
    <br />
    <b>Genel Nitelikler</b>
    <br />
    <br />

    Üniversitelerin Bilgisayar Mühendisliği veya ilgili mühendislik bölümlerinden
    mezun,
    - Alanında en az 3 yıl ve üzeri yazılım geliştirme deneyimi olan,
    - .Net geliştirme alanında tecrübe sahibi (C#, Vb.Net, .NET Framework, .NET Core)
    - HTML5, CSS, Bootstrap ve Javascript konularında bilgili,
    - MS SQL Server ve  veritabanı tasarımı konusunda tecrübe sahibi,
    - OOP - Nesne yönelimli programlama ve tasarım konusunda deneyimli,
    - Cloud versiyon kontrol sistemlerinin en az birinde çalışmış, (GIT,GitLab vb.)
    - Kurumsal uygulama tasarım, test, performans izleme, dokümantasyon tecrübesine
    sahip,
    - Güvenli ve test kontrollü kod geliştirme alanlarında bilgili,
    - Müşteri odaklı hizmet anlayışına sahip,
    - Alanında en az 3 yıl ve üzeri yazılım geliştirme deneyimi olan,
    - .Net geliştirme alanında tecrübe sahibi (C#, Vb.Net, .NET Framework, .NET Core)
    - HTML5, CSS, Bootstrap ve Javascript konularında bilgili,
    - MS SQL Server ve  veritabanı tasarımı konusunda tecrübe sahibi,
    - OOP - Nesne yönelimli programlama ve tasarım konusunda deneyimli,
    - Cloud versiyon kontrol sistemlerinin en az birinde çalışmış, (GIT,GitLab vb.)
    - Kurumsal uygulama tasarım, test, performans izleme, dokümantasyon tecrübesine
    sahip,
    - Güvenli ve test kontrollü kod geliştirme alanlarında bilgili,
    - Müşteri odaklı hizmet anlayışına sahip,
  </div>
)

const tabConstants = [
  { id: 0, title: 'Detay' },
  { id: 1, title: 'Aday Kriterleri' },
  { id: 2, title: 'İşe Alım Süreci' }
]

const JobDefinitions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const renderTabs = useMemo(() => (
    <div className={styles.tabs}>
      {tabConstants.map((x, index) => (
        <Fragment key={x.id}>
          <div
            className={styles.tabUnit + ' ' + (activeTab === x.id ? styles.activeTab : '')}
            onClick={() => setActiveTab(x.id)}
          >
            {x.title}
          </div>
          {index !== tabConstants.length - 1 && <Seperator isMini />}
        </Fragment>
      ))}
    </div>
  ), [tabConstants, activeTab])

  return (
    <div>
      {renderTabs}
      <div className={'layer-box custom-scroll ' + (styles.descriptionContainer)}>
        {description}
      </div>
    </div>
  )
}

export default JobDefinitions
