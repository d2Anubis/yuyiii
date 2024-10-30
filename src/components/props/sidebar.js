import React from 'react';

function Sidebar() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Keywords</h2>
      <div className="space-y-2 mb-6">
        <input type="checkbox" id="wifi" />
        <label htmlFor="wifi" className="ml-2">Wifi</label>
        <input type="checkbox" id="spa" />
        <label htmlFor="spa" className="ml-2">Spa</label>
        <input type="checkbox" id="jacuzzi" />
        <label htmlFor="jacuzzi" className="ml-2">Jacuzzi</label>
      </div>

      {/* Add more filter sections similarly */}
      
      <h2 className="text-lg font-semibold mb-4">Location</h2>
      <input type="range" min="0" max="100" className="w-full mb-6" />

      <h2 className="text-lg font-semibold mb-4">Activities</h2>
      <div className="space-y-2 mb-6">
        <input type="checkbox" id="private-pool" />
        <label htmlFor="private-pool" className="ml-2">Private Pool</label>
        {/* Add other activities */}
      </div>

      {/* Other filter sections */}
    </div>
  );
}

export default Sidebar;
