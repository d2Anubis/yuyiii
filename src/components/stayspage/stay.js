import React from 'react';
import Sidebar from '../props/sidebar';
import Gallery from '../props/gallery';

function Stay() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-1/4 p-4 bg-gray-100">
        <Sidebar />
      </aside>
      <main className="flex-1 p-4">
        <Gallery />
      </main>
    </div>
  );
}

export default Stay;
