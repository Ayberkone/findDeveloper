import React from 'react'
import CustomContainer from '../components/common/CustomContainer'
import Footer from '../components/common/Footer/Footer'
import UnitSpacer from '../components/common/UnitSpacer'
import FeaturedProfiles from './components/FeaturedProfiles/FeaturedProfiles'
import Header from './components/Header/Header'
import JobPicks from './components/JobPicks/JobPicks'
import JobsCarousel from './components/JobsCarousel/JobsCarousel'
import LogoGrid from './components/LogoGrid/LogoGrid'
import PopularSearches from './components/PopularSearches/PopularSearches'

const Home: React.FC = () => (
  <>
    <Header />
    <PopularSearches />
    <CustomContainer>
      <JobsCarousel />
      <UnitSpacer />
      <FeaturedProfiles />
      <UnitSpacer />
      <LogoGrid />
      <UnitSpacer />
      <JobPicks />
      <UnitSpacer />
    </CustomContainer>
    <Footer />
  </>
)

export default Home
