import React from 'react';

import BikingRecordsComponents from 'components/BikingRecords';
import SidebardComponent from 'components/Sidebar';

const DashboardPage = () => (
  <div className="h-screen bg-yellow-100 flex flex-row">
    <div className="w-52 h-full bg-white shadow-md py-8">
      <SidebardComponent />
    </div>
    <div className="m-8 p-8 w-full bg-white rounded-3xl shadow-md">
      <BikingRecordsComponents />
    </div>
  </div>
);

export default DashboardPage;
