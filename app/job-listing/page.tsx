'use client'

import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import CustomContainer from '../components/common/CustomContainer'
import Header from '../components/common/Header'
import SearchBar from '../components/common/SearchBar/SearchBar'
import JobDescription from './components/JobDescription'
import JobFilters from './components/JobFilters'
import MatchedJob from './components/MatchedJob'
import JobList from './components/JobList'
import JobDefinitions from './components/JobDefinitions'
import JobCards from './components/JobCards'
import JobPicks from '../Home/components/JobPicks/JobPicks'
import Footer from '../components/common/Footer/Footer'
// styling
import styles from './JobListing.module.scss'

const cards = [
  { id: 0, header: 'Bu İlana Uygun muyum?', text: 'Bu ilanla eşleşmek için ne yapmalıyım?', button: 'CV’nizi Güncelleyin' },
  { id: 1, header: 'Tahmini Maaş Aralığı', text: '8.000₺- 12.000.00₺ /yıl .net Developer' }
]

const JobListingPage: React.FC = () => (
  <Provider store={store}>
    <Header />
    <CustomContainer style={{ backgroundColor: '#f5f7ff' }}>
      <SearchBar isFullWidthView />
    </CustomContainer>
    <CustomContainer style={{ borderTop: '1px solid #dee3ed', borderBottom: '1px solid #dee3ed' }}>
      <JobFilters />
    </CustomContainer>
    <CustomContainer className="flex flex-col">
      <MatchedJob />
      <div className={styles.jobListContainer}>
        <div className={styles.unitSmall}>
          <JobList />
        </div>
        <div className={styles.unitBig + ' flex-col'}>
          <JobDescription />
          <JobDefinitions />
        </div>
      </div>
      <div className={styles.jobListContainer + ' mt-32'}>
        <div className={styles.unitSmall}>
        </div>
        <div className={styles.unitBig + ' flex-row'}>
          {cards.map((card) => (
            <JobCards key={card.id} {...card} />
          ))}
        </div>
      </div>
    </CustomContainer>
    <CustomContainer>
      <JobPicks />
    </CustomContainer>
    <Footer />
  </Provider>
)

export default JobListingPage
