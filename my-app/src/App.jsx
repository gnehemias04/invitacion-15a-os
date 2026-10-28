import { useState } from "react";

import "./App.css";

import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import EventDetails from "./components/EventDetails";
import DressCode from "./components/DressCode";
import Music from "./components/Music";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Countdown />
      <Introduction />
      <EventDetails />
      <DressCode />
      <Music />
      <Gallery />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;
