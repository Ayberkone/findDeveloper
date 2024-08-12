'use client'

import React, { useMemo, useState } from 'react'
import styles from './JobList.module.scss'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../../../redux/store'

const dummyJobs = [
  { id: 1, title: '.Net Developer', company: 'IBM', location: 'Istanbul', details: '', criterias: '' },
  { id: 2, title: 'Frontend Developer', company: 'Google', location: 'Remote', details: '', criterias: '' },
  { id: 3, title: 'Backend Developer', company: 'Amazon', location: 'Berlin', details: '', criterias: '' },
  { id: 4, title: 'Full Stack Developer', company: 'Facebook', location: 'California', details: '', criterias: '' },
  { id: 5, title: 'Data Scientist', company: 'Twitter', location: 'Remote', details: '', criterias: '' },
  { id: 6, title: 'DevOps Engineer', company: 'Dropbox', location: 'Tokyo', details: '', criterias: '' },
  { id: 7, title: 'System Architect', company: 'Intel', location: 'Shanghai', details: '', criterias: '' },
  { id: 8, title: 'Security Analyst', company: 'Cisco', location: 'Bangalore', details: '', criterias: '' },
  { id: 9, title: 'Database Administrator', company: 'Oracle', location: 'New York', details: '', criterias: '' },
  { id: 10, title: 'Product Manager', company: 'Microsoft', location: 'London', details: '', criterias: '' },
  { id: 11, title: 'UI/UX Designer', company: 'Adobe', location: 'Paris', details: '', criterias: '' },
  { id: 12, title: 'QA Engineer', company: 'Spotify', location: 'Stockholm', details: '', criterias: '' },
  { id: 13, title: 'Mobile Developer', company: 'Samsung', location: 'Seoul', details: '', criterias: '' },
  { id: 14, title: 'Graphics Designer', company: 'Pixar', location: 'San Francisco', details: '', criterias: '' },
  { id: 15, title: 'Cloud Specialist', company: 'Salesforce', location: 'Texas', details: '', criterias: '' },
  { id: 16, title: 'AI Researcher', company: 'IBM', location: 'Boston', details: '', criterias: '' },
  { id: 17, title: 'Hardware Engineer', company: 'HP', location: 'Singapore', details: '', criterias: '' },
  { id: 18, title: 'Network Engineer', company: 'Nokia', location: 'Helsinki', details: '', criterias: '' },
  { id: 19, title: 'Blockchain Developer', company: 'Coinbase', location: 'Remote', details: '', criterias: '' },
  { id: 20, title: 'VR Engineer', company: 'Unity', location: 'Vancouver', details: '', criterias: '' }
]

// const jobs = useSelector((state: RootState) => state.data.filteredJobs) // Use filteredJobs
const JobList: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpansion = () => {
    setIsExpanded(x => !x)
  }

  const renderContent = useMemo(() => (
    <>
      <div className={styles.jobListHeader}>
        İlgilenebileceğiniz iş ilanları
      </div>
      <ul className={styles.jobList + ' custom-scroll flex flex-col'}>
        {dummyJobs.map((job) => (
          <li key={job.id} className={styles.jobUnit}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </>
  ), [dummyJobs])

  return (
    <>
      <div className={styles.miniView}>
        <div className="layer-box p-0">
          <span className={`chevron x-axis${isExpanded ? ' open' : ''} ${styles.chevron}`} onClick={toggleExpansion} />
          {isExpanded && renderContent}
        </div>
      </div>
      <div className={styles.regularView}>
        <div className="layer-box p-0">
          {renderContent}
        </div>
      </div>
    </>
  )
}

export default JobList
