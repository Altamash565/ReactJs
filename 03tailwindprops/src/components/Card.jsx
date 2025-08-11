import React from 'react'

function card({username, btntext="Read me"}) {
  console.log();
  
  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg">
    <img className="w-full h-48 object-cover" src="https://images.pexels.com/photos/33121633/pexels-photo-33121633.jpeg" alt="Nature Image" />
  <div className="p-4">
    <h3 className="text-lg font-bold text-gray-900">{username}</h3>
    <p className="mt-2 text-gray-600 text-sm">Discover breathtaking landscapes and natural wonders around the world.</p>
    <div className="mt-4">
      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">{btntext}</button>
    </div>
  </div>
</div>

  )
}

export default card