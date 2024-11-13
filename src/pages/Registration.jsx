import React from "react";
import Navbar from "../Components/Navbar/Navbar";
function Registration() {
  return (
    <div>
      <Navbar></Navbar>
      <br />
      <br />
      <div className="flex justify-center items-center text-3xl font-bold">
        Registration
      </div>
      <br />
      <br />
      <b></b>
      <div className="flex justify-center w-2/3  ml-10 ">
        <div>
          At least one author of an accepted paper must register and present his
          / her paper at the conference.
          <br />
          Only accepted, registered, and presented papers will be considered for
          publication.
        </div>
      </div>

      <div className="flex justify-center w-2/3 ">
        <div className="max-w-2xl mx-auto mt-8 px-4 ">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 ">
            Registration Fees
          </h2>
          <div className="space-y-8">
            {/* Indian Authors */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Indian Authors
              </h3>
              <table className="w-full text-left text-gray-700 hidden sm:table">
                <thead>
                  <tr className="bg-orange-200 text-gray-900">
                    <th className="py-2 px-4">Category</th>
                    <th className="py-2 px-4">IEEE Members (INR)</th>
                    <th className="py-2 px-4">Non-IEEE Members (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-4">Academicians</td>
                    <td className="py-2 px-4">7000</td>
                    <td className="py-2 px-4">7500</td>
                  </tr>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-4">
                      UG/PG Scholars/Research Scholars
                    </td>
                    <td className="py-2 px-4">6000</td>
                    <td className="py-2 px-4">6500</td>
                  </tr>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-4">Industry Professionals</td>
                    <td className="py-2 px-4">8000</td>
                    <td className="py-2 px-4">8500</td>
                  </tr>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-4">Co-Authors/Attendee</td>
                    <td className="py-2 px-4">1000</td>
                    <td className="py-2 px-4">2000</td>
                  </tr>
                </tbody>
              </table>
              {/* Responsive Card View for Small Screens */}
              <div className="sm:hidden">
                <div className="space-y-4">
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-semibold">Category: Academicians</p>
                    <p>IEEE Members (INR): 6000</p>
                    <p>Non-IEEE Members (INR): 6500</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-semibold">
                      Category: UG/PG Scholars/Research Scholars
                    </p>
                    <p>IEEE Members (INR): 5000</p>
                    <p>Non-IEEE Members (INR): 5500</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-semibold">
                      Category: Industry Professionals
                    </p>
                    <p>IEEE Members (INR): 7000</p>
                    <p>Non-IEEE Members (INR): 7500</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-semibold">
                      Category: Co-Authors/Attendee
                    </p>
                    <p>IEEE Members (INR): 500</p>
                    <p>Non-IEEE Members (INR): 1000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreign Authors */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Foreign Authors
              </h3>
              <table className="w-full text-left text-gray-700 hidden sm:table">
                <thead>
                  <tr className="bg-orange-200 text-gray-900">
                    <th className="py-2 px-4">Category</th>
                    <th className="py-2 px-4">IEEE Members (USD)</th>
                    <th className="py-2 px-4">Non-IEEE Members (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-4">Academicians</td>
                    <td className="py-2 px-4">250</td>
                    <td className="py-2 px-4">350</td>
                  </tr>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-4">
                      UG/PG Scholars/Research Scholars
                    </td>
                    <td className="py-2 px-4">150</td>
                    <td className="py-2 px-4">200</td>
                  </tr>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-4">Industry Professionals</td>
                    <td className="py-2 px-4">400</td>
                    <td className="py-2 px-4">500</td>
                  </tr>
                  <tr className="bg-orange-100">
                    <td className="py-2 px-4">Co-Authors/Attendee</td>
                    <td className="py-2 px-4">80</td>
                    <td className="py-2 px-4">120</td>
                  </tr>
                </tbody>
              </table>
              {/* Responsive Card View for Small Screens */}
              <div className="sm:hidden">
                <div className="space-y-4">
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-semibold">Category: Academicians</p>
                    <p>IEEE Members (USD): 250</p>
                    <p>Non-IEEE Members (USD): 350</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-semibold">
                      Category: UG/PG Scholars/Research Scholars
                    </p>
                    <p>IEEE Members (USD): 150</p>
                    <p>Non-IEEE Members (USD): 200</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-semibold">
                      Category: Industry Professionals
                    </p>
                    <p>IEEE Members (USD): 400</p>
                    <p>Non-IEEE Members (USD): 500</p>
                  </div>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="font-semibold">
                      Category: Co-Authors/Attendee
                    </p>
                    <p>IEEE Members (USD): 80</p>
                    <p>Non-IEEE Members (USD): 120</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
