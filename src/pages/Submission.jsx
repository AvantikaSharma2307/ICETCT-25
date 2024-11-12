import React from 'react';
import Card from "../Components/Card"
import CardHeader from '../Components/CardHeader';
import CardTitle from '../Components/CardTitle';
import CardDescription from '../Components/CardDescription';
import CardContent from '../Components/CardContent';
import CardFooter from '../Components/CardFooter';
import Button from '../Components/Button';


export default function PaperSubmission() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-black">
          Paper Submission
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden ">
            <CardHeader className="px-6 py-4 bg-black">
              <CardTitle className="text-xl font-bold text-white">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-black">
                <li className="flex items-start">
                  All submissions must be original and not under review/publication elsewhere.
                </li>
                <li className="flex items-start">
                  Papers should follow the conference formatting guidelines and should not exceed 8 pages, including references and appendices.
                </li>
                <li className="flex items-start">
                  Submit your papers through the conference submission portal by January 15, 2025.
                </li>
                <li className="flex items-start">
                  Accepted papers will be presented at the conference, and all registered participants will receive a certificate of participation.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="px-6 py-4 bg-black">
              <CardTitle className="text-xl font-bold text-white">Important Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-black">
                <li className="flex items-center">
                  <strong className="mr-2">Paper Submission Deadline:</strong> January 15, 2025
                </li>
                <li className="flex items-center">
                  <strong className="mr-2">Notification of Acceptance:</strong> March 1, 2025
                </li>
                <li className="flex items-center">
                  <strong className="mr-2">Camera-ready Submission:</strong> April 15, 2025
                </li>
                <li className="flex items-center">
                  <strong className="mr-2">Conference Dates:</strong> May 30-31, 2025
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white shadow-lg rounded-xl overflow-hidden max-w-md mx-auto">
          <CardHeader className="px-6 py-4 bg-black">
            <CardTitle className="text-xl font-bold text-white">Submit Your Paper</CardTitle>
            <CardDescription>Make sure you've read the guidelines before submitting.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ">
              Submit Paper
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}