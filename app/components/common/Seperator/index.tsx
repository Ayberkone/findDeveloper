import React from 'react'
import styles from './Seperator.module.scss'

interface SeperatorProps {
  isMini?: boolean
}

const Seperator: React.FC<SeperatorProps> = ({ isMini }) => (
  <div className={styles.seperator + (isMini ? ' ' + styles.isMini : '')} />
)

export default Seperator
