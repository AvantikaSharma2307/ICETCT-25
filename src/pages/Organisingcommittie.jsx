import React from 'react';

function Organisingcommittie() {

  return (
    <div className="bg-blue-50 text-center px-4  mt-24 md:px-8" id="committees">
      <div className="my-8">
        <div className="text-4xl font-bold mb-4 pt-16">Organising Committee</div>

        {/* Patron in Chief */}
        <div className="text-xl font-bold mb-4">Patron in Chief</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6">
            <div >Shri Sarish Agarwal</div>
            <div>Honourable Chairman</div>
            <div>KIET Group of Institutions,Delhi-NCR,Ghaziabad</div>
          </div>
        </div>
        {/* Patron */}
        <div className="text-xl font-bold mb-4 mt-8">Patron </div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6">
            <div>Prof. (Dr.) Preeti Bajaj</div>
            <div>Director General</div>
            <div>KIET Group of Institutions, Delhi-NCR, Ghaziabad</div>
          </div>
        </div>

        {/* General Chair */}
        <div className="text-xl font-bold mt-8 mb-4">General Chair</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6">
            <div>Dr. Manoj Goel</div>
            <div>Joint Director</div>
            <div>KIET Group of Institutions,Delhi-NCR,Ghaziabad</div>
          </div>
          <div className="w-full sm:w-2/6">
            <div>Dr. Anil Ahlawat</div>
            <div>Dean Academics</div>
            <div>KIET Group of Institutions, Delhi-NCR, Ghaziabad</div>
          </div>
        </div>

        {/* Conference Chair */}
        <div className="text-xl font-bold mt-8 mb-4">Conference Chair</div>
        <div className="w-full sm:w-2/6 mx-auto text-xl">
          <div className="text-center">
            <div>Prof. (Dr.) Rekha Kashyap</div>
            <div>
              Dean,
              <br />
              Department of CSE-AI and Department of CSE-AIML
            </div>
            <div>KIET Group of Institutions,Delhi-NCR,Ghaziabad</div>
          </div>
        </div>
        {/* Convenor */}
        <div className="text-xl font-bold mt-8 mb-4">Convener</div>
        <div className="w-full sm:w-2/6 mx-auto text-xl">
          <div className="text-center">
            <div>Dr.Puneet Garg</div>
            <div>
              Associate Professor,
              <br />
              Department of CSE-AI
            </div>
            <div>KIET Group of Institutions,Delhi-NCR,Ghaziabad</div>
          </div>
        </div>

        {/* Technical Program Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Technical Program Committee</div>
        <div className="flex flex-wrap justify-center gap-4 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Nidhi Singh (Chair)</div>
              <div>Assistant Professor, Department of CSE-AIML</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Preeti Verma (Co-Chair)</div>
              <div>Assistant Professor, Department of CSE-AI</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Thammali Gangadhar (Member)</div>
              <div>Assistant Professor, Department of CSE-AIML</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Ayushi Mittal (Member)</div>
              <div>Assistant Professor, Department of CSE-AI</div>
            </div>
          </div>
        </div>

        {/* Publication Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Publication Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Umang Kant (Chair)</div>
              <div>Assistant Professor, Department of CSE-AIML</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Kavya Gupta (Co-Chair)</div>
              <div>Assistant Professor, Department of CSE-AIML</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Anjali Chauhan (Member)</div>
              <div>Assistant Professor, Department of CSE-AI</div>
            </div>
          </div>
        </div>

        {/* Event Management Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Event Management Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Bhawna (Chair)</div>
              <div>Assistant Professor, Department of CSE-AIML</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Akanksha (Co-Chair)</div>
              <div>Assistant Professor, Department of CSE-AIML</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Chayanika Bhattacharjee</div>
              <div>Assistant Professor, Department of CSE-AIML</div>
            </div>
          </div>
        </div>

        {/* Publicity Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Publicity Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Bhuvnesh Malik (Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>


          </div>
        </div>

        {/* Local Arrangement Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Local Arrangement Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Anurag Gupta (Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Ajay Singh (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Ruchi Arora (Member)</div>
              <div >
                Assistant Professor, Department of CSE-AI
                 {/* NOT KNOWN */}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Jitendra (Member)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
          </div>
        </div>

        {/* Finance Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Finance Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Kumud Alok (Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Rachit Patel (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>
          </div>
        </div>

        {/* Registration Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Registration Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Ruchika Mavis Daniel (Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Gargi Singh (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Shaifali Rao (Member)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>
          </div>
        </div>

        {/* Other Committees */}
        <div className="text-xl font-bold mt-8 mb-4">Technical Session/Speaker Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Puneet Garg (Chair)</div>
              <div >
                Associate Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Gaurav Srivastav (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl font-bold mt-8 mb-4">Sponsorship Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Puneet Garg (Chair)</div>
              <div >
                Associate Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Payal Chhabra (Member)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Rajeev Kumar Singh (Member)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Richa Singh (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl font-bold mt-8 mb-4">Media Management Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Aastha Gupta (Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Shivansh Prasad (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl font-bold mt-8 mb-4">Abstract Book/Conference Proceedings</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Richa Singh (Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Deepak Tripathi (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Abhishek Shukla (Member)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>
          </div>
        </div>

        {/* Website Management Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Website Management Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6">
            <div>Mr. Rajeev Kumar Singh (Chair)</div>
            <div >
              Assistant Professor, Department of CSE-AIML
            </div>
          </div>
        </div>

        {/* Registration Kit/Memento Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Registration Kit/Memento Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Nagendra Nath Dubey (Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Sahil Bhatia (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Anuj Gupta (Member)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Committee */}
        <div className="text-xl font-bold mt-8 mb-4">Certificate Committee</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6 mb-14 md:w-[60%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Ms. Nidhi Singh (Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AIML
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Mr. Ashish Gaur (Co-Chair)</div>
              <div >
                Assistant Professor, Department of CSE-AI
              </div>
            </div>
          </div>
        </div>

        {/* Concluding Remarks */}



        {/* Acknowledgement */}
      </div>
    </div>
  )
}

export default Organisingcommittie;
