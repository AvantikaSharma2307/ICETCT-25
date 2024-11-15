import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';

const Indiandata = [
  { IndianAuthors: 'Academicians', IEEEMembers: 7000, NonIEEEMembers: 7500 },
  { IndianAuthors: 'UG/PG Scholars/Research Scholars', IEEEMembers: 6000, NonIEEEMembers: 6500 },
  { IndianAuthors: 'Industry Professionals', IEEEMembers: 8000, NonIEEEMembers: 8500 },
  { IndianAuthors: 'Co-Authors/Attendee', IEEEMembers: 1000, NonIEEEMembers: 2000 },
];

const Foreigndata = [
  { ForeignAuthors: 'Academicians', IEEEMembers: 250, NonIEEEMembers: 350 },
  { ForeignAuthors: 'UG/PG Scholars/Research Scholars', IEEEMembers: 150, NonIEEEMembers: 200 },
  { ForeignAuthors: 'Industry Professionals', IEEEMembers: 400, NonIEEEMembers: 500 },
  { ForeignAuthors: 'Co-Authors/Attendee', IEEEMembers: 80, NonIEEEMembers: 120 },
];

const formatNumber = (num) => num.toLocaleString();

const ResponsiveTable = () => {
  return (
    <div className="px-6 py-8 bg-white">
      <div className="mb-14">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">Indian Authors Fees</h2>
        <div className="overflow-x-auto">
          <Table isStriped aria-label="Indian Authors Fees Table" className="min-w-full table-auto">
            <TableHeader>
              <TableColumn className="px-4 py-3 text-xl font-bold text-gray-800 w-auto sm:w-1/3 md:w-1/4 lg:w-1/4 break-words">
                Indian Authors
              </TableColumn>
              <TableColumn className="px-4 py-3 text-xl font-bold text-gray-800 w-auto sm:w-1/3 md:w-1/4 lg:w-1/4 break-words">
                IEEE Members <span className="block sm:inline">(INR)</span>
              </TableColumn>
              <TableColumn className="px-4 py-3 text-xl font-bold text-gray-800 w-auto sm:w-1/3 md:w-1/4 lg:w-1/4 break-words">
                Non-IEEE Members <span className="block sm:inline">(INR)</span>
              </TableColumn>
            </TableHeader>
            <TableBody>
              {Indiandata.map((user, index) => (
                <TableRow
                  key={index}
                  className={`transition-all duration-300 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                >
                  <TableCell className="px-4 py-3 text-lg text-gray-800 break-words">{user.IndianAuthors}</TableCell>
                  <TableCell className="px-4 py-3 text-lg text-gray-800 break-words">{formatNumber(user.IEEEMembers)}</TableCell>
                  <TableCell className="px-4 py-3 text-lg text-gray-800 break-words">{formatNumber(user.NonIEEEMembers)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">Foreign Authors Fees</h2>
        <div className="overflow-x-auto">
          <Table isStriped aria-label="Foreign Authors Fees Table" className="min-w-full table-auto">
   
            <TableHeader>
              <TableColumn className="px-4 py-3 text-xl font-bold text-gray-800 w-auto sm:w-1/3 md:w-1/4 lg:w-1/4 break-words">
                Foreign Authors
              </TableColumn>
              <TableColumn className="px-4 py-3 text-xl font-bold text-gray-800 w-auto sm:w-1/3 md:w-1/4 lg:w-1/4 break-words">
                IEEE Members <span className="block sm:inline">(USD)</span>
              </TableColumn>
              <TableColumn className="px-4 py-3 text-xl font-bold text-gray-800 w-auto sm:w-1/3 md:w-1/4 lg:w-1/4 break-words">
                Non-IEEE Members <span className="block sm:inline">(USD)</span>
              </TableColumn>
            </TableHeader>
  
            <TableBody>
              {Foreigndata.map((user, index) => (
                <TableRow
                  key={index}
                  className={`transition-all duration-300 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                >
                  <TableCell className="px-4 py-3 text-lg text-gray-800 break-words">{user.ForeignAuthors}</TableCell>
                  <TableCell className="px-4 py-3 text-lg text-gray-800 break-words">{formatNumber(user.IEEEMembers)}</TableCell>
                  <TableCell className="px-4 py-3 text-lg text-gray-800 break-words">{formatNumber(user.NonIEEEMembers)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;
