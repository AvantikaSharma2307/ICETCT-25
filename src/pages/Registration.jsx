import React from 'react';
import ResponsiveTable from '../Components/ResponsiveTable';

function Registration() {
  return (
    <div id="registration" className="mb-44">
      {/* Registration Hero Section */}
      <div className="text-white w-full min-h-screen flex flex-col justify-center">
        <h1 className="pt-24 md:pt-36 text-4xl md:text-5xl font-bold text-black text-center">
          Registration
        </h1>

        {/* Registration Information */}
        <div className="mt-8 md:mt-16 px-4 md:px-16">
          <p className="text-black text-lg md:text-3xl font-semibold text-center">
            At least one author of an accepted paper must register and present their paper at the
            conference.
            <br />
            <span
              className="bg-yellow-300 font-bold"
              style={{ backgroundColor: 'yellow' }}
            >
              Only accepted, registered, and presented papers will be considered for publication.
            </span>
          </p>
        </div>

        {/* Registration Fees Section */}
        <div className="mx-2  md:mx-24 mt-8 md:mt-14">
          <h2 className="text-black text-2xl md:text-3xl font-bold mb-6 text-center">
            Registration Fees
          </h2>
          <ResponsiveTable />
        </div>
      </div>
    </div>
  );
}

export default Registration;
