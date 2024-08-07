import React from 'react';
import StatsCard from './StatsCard';

function Home() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard title="Total Banks" value="75" />
        <StatsCard title="Total Blog" value="20" />
        <StatsCard title="Pending reviews" value="4" />
      </div>
    </div>
  );
}

export default Home;
