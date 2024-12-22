import React from 'react'
import { Reports } from './Reports';
import Banner from './Banner';
import { CrimeStatistics } from './CrimeStatistics';

const CrimeReports = () => {
  return (
    <div>
      <Banner/>
      <Reports/>
      <CrimeStatistics/>
    </div>
  )
}

export default CrimeReports;
