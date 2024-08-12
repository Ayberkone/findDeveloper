import React from 'react'
import styles from './MatchedJob.module.scss'

interface MatchedJobProps {
	matchedJob?: string
}

const MatchedJob: React.FC<MatchedJobProps> = ({ matchedJob = 'Eşleşen iş ilanı yok' }) => (
  <span className={styles.matchedJob}>{matchedJob}</span>
)

export default MatchedJob
