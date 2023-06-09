import React from 'react'
import WelcomeSection from '../components/Home/WelcomeSection'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import IntroSection from '../components/Home/IntroSection'
const HomePage = () => {
  return (
    <div>
        <WelcomeSection />
        <IntroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
    </div>
  )
}

export default HomePage