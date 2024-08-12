'use client'

import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import CustomContainer from '../components/common/CustomContainer'
import Header from '../components/common/Header'
import SearchBar from '../components/common/SearchBar/SearchBar'
import Footer from '../components/common/Footer/Footer'
import ProfileLeft from './components/ProfileLeft'
import ProfileRight from './components/ProfileRight'
// styling
import styles from './Profile.module.scss'

const ProfilePage: React.FC = () => (
  <Provider store={store}>
    <Header isProfilePage />
    <CustomContainer style={{ backgroundColor: '#f5f7ff' }}>
      <SearchBar isFullWidthView />
    </CustomContainer>
    <CustomContainer className="py-32">
      <div className={styles.profileContainer}>
        <div className={styles.unitSmall}>
          <ProfileLeft />
        </div>
        <div className={styles.unitBig}>
          <ProfileRight />
        </div>
      </div>
    </CustomContainer>
    <Footer short />
  </Provider>
)

export default ProfilePage
