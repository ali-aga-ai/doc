import React from 'react';

const GoogleMapsSection = () => {

  const map = require('./map.png')
  return (
    // Keeping the significantly increased margin top and bottom (e.g., mt-10 and mb-10)
    <section className="map-section mt-10 mb-20">
      <div className="container mx-auto px-8">
        <a href="https://maps.google.com/?q=YourStoreLocation" target="_blank" rel="noopener noreferrer">
          <img
            src={map}
            alt="Location Map"
            // Adjusted the size of the image to 70% of its original size
            className="w-full h-auto scale-70"
          />
        </a>
      </div>
    </section>
  );
};

export default GoogleMapsSection;
