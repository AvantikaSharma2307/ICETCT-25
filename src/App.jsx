import React, { Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import CallForPapers from "./pages/Call-for-papers.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";

const Home = React.lazy(() => import("./pages/Home"));
const Registration = React.lazy(() => import("./pages/Registration"));
const Speaker = React.lazy(() => import("./pages/Speaker"));
const Submission = React.lazy(() => import("./pages/Submission"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Commities = React.lazy(() => import("./pages/Commities"));
const Accomodation = React.lazy(() => import("./pages/Accomodation"));
const Organisingcommittie = React.lazy(() =>
  import("./pages/Organisingcommittie.jsx")
);

function App() {
  return (
    <div className="main">
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Home />
        <AboutUs/>
        <CallForPapers />
        <Submission />
        <Registration />
        <Accomodation />
        <Speaker />
        <Organisingcommittie />
        <Contact />
        <Footer/>
        {/* <Commities /> */}
       
       
       
      </Suspense>
    </div>
  );
}

export default App;
