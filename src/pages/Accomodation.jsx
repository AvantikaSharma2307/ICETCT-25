import React from 'react';

function Accomodation() {
  return (
    <div id="accomodation">
      {/* Hero Section */}
      <div className="text-center text-white w-full h-16">
        <h1 className="text-3xl  md:text-5xl font-bold text-black">Accommodation</h1>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-16">
        <p className="text-gray-600 text-center text-lg md:text-3xl font-semibold mt-4 md:mt-8">
          Limited rooms are available for participants/guests (on a payment basis).
          <br /> The availability of rooms will be on a First-Come, First-Serve basis.
          <br /> For more details, kindly contact the following person:
        </p>
        <div className="mt-6 text-center">
          <p className="text-gray-700 text-xl md:text-2xl">
            Mr. ………………………….
            <br />
            Phone: ………………………
            <br />
            Email: ………………………
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accomodation;
