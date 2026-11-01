import React from 'react';
import useFetch from './useFetch';

// Array of hex colors for thumbnails matching the look
const colors = [
  '#2a9d8f', '#8b0000', '#00e676', '#3a7bd5',
  '#2e7d32', '#002171', '#f8bbd0', '#ffeb3b',
  '#ec407a', '#4fc3f7', '#a7ffeb', '#4a148c'
];

function App() {
  const { data: photos, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/photos?_limit=12'
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white text-lg font-medium">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <span className="bg-[#1e293b] text-[#38bdf8] px-4 py-1.5 rounded text-sm font-medium">
          Error : {error}
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-center mb-6">
        <h1 className="bg-blue-600 text-white font-bold text-2xl px-4 py-1 rounded">
          Photos
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {photos &&
          photos.map((photo, index) => (
            <div
              key={photo.id}
              className="border border-neutral-700 bg-black p-4 flex flex-col justify-between items-center text-center"
            >
              <div
                className="w-full h-44 flex items-center justify-center font-bold text-gray-300 text-lg opacity-80"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                600 x 600
              </div>
              <p className="mt-4 text-sm text-gray-300 leading-tight">
                {photo.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;