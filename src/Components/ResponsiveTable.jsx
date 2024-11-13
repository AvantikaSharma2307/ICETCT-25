import React from 'react';

const ResponsiveTable = () => {
  const Indiandata = [
    { IndianAuthors:"Academicians",IEEEMembers:7000,NonIEEEMembers:7500 },
    {IndianAuthors:"UG/PG Scholars/Research Scholars",IEEEMembers:6000,NonIEEEMembers:6500 },
    { IndianAuthors:"Industry Professionals",IEEEMembers:8000,NonIEEEMembers:8500 },
    { IndianAuthors:"Co-Authors/Attendee",IEEEMembers:1000,NonIEEEMembers:2000},
  ];
  const Foreigndata=[
    {ForeignAuthors:"Academicians",IEEEMembers:250,NonIEEEMembers:350},
    {ForeignAuthors:"UG/PG Scholars/Research Scholars",IEEEMembers:150	,NonIEEEMembers:200},
    {ForeignAuthors:"Industry Professionals",IEEEMembers:400,NonIEEEMembers:500},
    {ForeignAuthors:"Co-Authors/Attendee",IEEEMembers:80,NonIEEEMembers:120},
    
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md text-black">
        <thead>
          <tr className="bg-amber-300 text-black">
            <th className="py-3 px-4 text-left">Indian Authors</th>	
            <th className="py-3 px-4 text-left">IEEE Members(INR)</th>
            <th className="py-3 px-4 text-left">Non-IEEE Members(INR)</th>
       
          </tr>
        </thead>
        <tbody>
          {Indiandata.map((user, index) => (
            <tr
              key={user.id}
              className={`${index % 2 === 0 ? "bg-amber-200" : "bg-amber-400"} hover:bg-blue-100`}
            >
              <td className="py-3 px-4">{user.IndianAuthors}</td>
              <td className="py-3 px-4">{user.IEEEMembers}</td>
              <td className="py-3 px-4">{user.NonIEEEMembers}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      {/* 2nd table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md text-black mt-14">
        <thead>
          <tr className="bg-amber-300 text-black">
            <th className="py-3 px-4 text-left">Foreign Authors</th>	
            <th className="py-3 px-4 text-left">IEEE Members(USD)</th>
            <th className="py-3 px-4 text-left">Non-IEEE Members(USD)</th>
       
          </tr>
        </thead>
        <tbody>
          {Foreigndata.map((user, index) => (
            <tr
              key={user.id}
              className={`${index % 2 === 0 ? "bg-amber-200" : "bg-amber-400"} hover:bg-blue-100`}
            >
              <td className="py-3 px-4">{user.ForeignAuthors}</td>
              <td className="py-3 px-4">{user.IEEEMembers}</td>
              <td className="py-3 px-4">{user.NonIEEEMembers}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ResponsiveTable;
