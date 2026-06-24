import React, { useRef, useState } from 'react';
import ExploreWorkSection from './CaseStudyOverview';
import PortfolioGrid from './CaseStudySecond';

export default function WorkPage() {
  const [selIndustries, setSelIndustries] = useState([]);
  const [selServices,   setSelServices]   = useState([]);
  const portfolioRef = useRef(null);

  return (
    <>
      <ExploreWorkSection
        selIndustries={selIndustries}
        selServices={selServices}
        setSelIndustries={setSelIndustries}
        setSelServices={setSelServices}
      />
      <PortfolioGrid
        selIndustries={selIndustries}
        selServices={selServices}
        gridRef={portfolioRef}
      />
    </>
  );
}