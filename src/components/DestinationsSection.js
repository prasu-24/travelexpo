// src/components/DestinationsSection.js
import React from 'react';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: 'PARIS',
      description: 'City of Love',
      image: '/paris.jpg', 
    },
    {
      id: 2,
      name: 'INDIA',
      description: 'Rich in cultures',
      image: '/india.jpg', 
    },
    {
      id: 3,
      name: 'GERMANY',
      description: 'Western region of Central Europe',
      image: '/castle.jpg', // Provide the correct image file name or URL
    },
    {
      id: 4,
      name: 'SYDNEY',
      description: 'Magnificent harbour',
      image: '/sydney.webp', // Provide the correct image file name or URL
    },
    {
      id: 5,
      name: 'MALDIVES',
      description: 'Spellbinding Sceneries',
      image: '/maldives.jpeg', // Provide the correct image file name or URL
    },
    {
      id: 6,
      name: 'ROME',
      description: 'Eternal City',
      image: '/rome.avif', // Provide the correct image file name or URL
    },
  ];

  return (
    <section id="destinations" className="destinations">
      <h2 align="center">BEAUTIFUL DESTINATIONS</h2>
      <div className="destination-list">
        {destinations.map(destination => (
          <div key={destination.id} className="destination">
            <img src={destination.image} alt={destination.name} />
            <h3 align="center">{destination.name}</h3>
            <p align="center">{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
