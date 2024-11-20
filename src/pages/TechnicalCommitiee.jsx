import React from 'react';

function TechnicalCommitiee() {

  return (
    <div className=" text-center h-full">
      <div >
        <div className="text-4xl font-bold mb-4 pt-16">Technical Committee</div>

        {/* Patron in Chief
        <div className="text-xl font-bold mb-4">Patron in Chief</div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6">
            <div >Shri Sarish Agarwal</div>
            <div>Honourable Chairman</div>
            <div>KIET Group of Institutions,Delhi-NCR,Ghaziabad</div>
          </div>
        </div> */}
        
        {/* Patron */}
        {/* <div className="text-xl font-bold mb-4 mt-8">Patron </div>
        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <div className="w-full sm:w-2/6">
            <div>Prof. (Dr.) Preeti Bajaj</div>
            <div>Director General</div>
            <div>KIET Group of Institutions, Delhi-NCR, Ghaziabad</div>
          </div>
        </div> */}

        <div className="flex flex-wrap justify-center gap-4 text-xl">
          <div className="w-full sm:w-2/6 md:w-[100%]">
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Sonal Beniwal</div>
              <div>BPSMV, Sonipat, India</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Sajjan Singh</div>
              <div>Chandigarh Group of Colleges, Chandigarh, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Bosco Paul Alapat</div>
              <div> CHRIST (Deemed to be University), Delhi NCR, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Varuna Gupta
              </div>
              <div> CHRIST (Deemed to be University), Delhi NCR, India</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Yashpal Singh</div>
              <div> Jain University, Bangalore, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Gyanendra Tiwari</div>
              <div>IILM, Gurugram, India  </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Ankit Verma</div>
              <div>ADGITM, New Delhi, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Satya Prakash</div>
              <div> Bennett University, Greater Noida, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Neetu Sharma</div>
              <div> Galgotias University, Greater Noida, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Munish Khanna</div>
              <div> Galgotias University, Greater Noida, India</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Divya Mishra</div>
              <div> ABES Engineering College, Ghaziabad, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Sanjay Singla</div>
              <div> Chandigarh University, Chandigarh, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr Jagendra Singh</div>
              <div> Bennett University, Greater Noida, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Mahesh Kumar Singh</div>
              <div>Dronacharya Group of Institutions Greater Noida, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Gaganjot kaur</div>
              <div>RKGIT, Ghaziabad, India</div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div></div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Jyoti Agarwal</div>
              <div> Graphics Era University , Dehradun, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Kirti Jain</div>
              <div> JIIT, Greater Noida, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Prof. Ayushi Prakash</div>
              <div> AKG Engineering College, Ghaziabad, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Alka Singh</div>
              <div>JIIT, Greater Noida, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr. Vijay Singh</div>
              <div> IPEC, Ghaziabad, India
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 mb-6 md:grid-cols-2 md:gap-4">
              <div>Dr Pushpendra Singh</div>
              <div>SRM Institute of Science and Technology Delhi NCR, India</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TechnicalCommitiee;
