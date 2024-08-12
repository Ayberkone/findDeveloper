import React from 'react'
import CustomContainer from '../../../components/common/CustomContainer'
import styles from './PopularSearches.module.scss'

const PopularSearches: React.FC = () => {
  const categories = ['UX designer', 'UI designer', 'Front-end developer', 'Back-end developer', 'iOS developer']

  return (
    <div className={styles.popular}>
      <CustomContainer>
        <div className="flex flex-wrap">
          <h2 className={styles.popularText + ' text-8 mb-0 flex items-center'}>Popüler aramalar</h2>
          <div className={styles.popularButtonContainer}>
            {categories.map((category) => (
              <button
                key={category}
                className={styles.popularButton + ' text-regular text-sm'}
                type="button"
                title={category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </CustomContainer>
    </div>
  )
}

export default PopularSearches
